import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const properties = [
  {
    id: "1",
    title: "Property 1",
    image: require("../../assets/property1.jpg"),
    price: "₦80,000,000",
    location: "Lekki",
  },
  {
    id: "2",
    title: "Property 2",
    image: require("../../assets/property2.jpg"),
    price: "₦40,000,000",
    location: "Ikota",
  },
  // Add more properties as needed
];

export default function LandingPage() {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(0);
  const navigation = useNavigation();

  // State to control the visibility of the tray menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleNext = () => {
    if (scrollViewRef.current) {
      scrollX.current += width - 80;
      scrollViewRef.current.scrollTo({ x: scrollX.current, animated: true });
    }
  };

  const handlePrev = () => {
    if (scrollViewRef.current) {
      scrollX.current -= width - 80;
      if (scrollX.current < 0) scrollX.current = 0;
      scrollViewRef.current.scrollTo({ x: scrollX.current, animated: true });
    }
  };

  // Function to toggle the tray menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Function to handle menu option selection
  const handleMenuOption = (option) => {
    setIsMenuVisible(false); // Close the menu
    switch (option) {
      case "Login/Register":
        // navigation.navigate("LoginRegister"); // Ensure this screen exists
        break;
      case "Settings":
        // navigation.navigate("Settings"); // Ensure this screen exists
        break;
      case "About Us":
        navigation.navigate("AboutUs"); // Ensure this screen exists
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}
    >
      <View style={styles.container}>
        {/* Top Section: Logo and Menu Icon */}
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
          />
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons
              name="menu"
              size={32}
              color="black"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search your dream home"
        />

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          {/* Previous Button */}
          <TouchableOpacity style={styles.carouselButton} onPress={handlePrev}>
            <Text>{"<"}</Text>
          </TouchableOpacity>

          {/* Image Carousel */}
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContentContainer}
          >
            <View style={styles.carouselItem}>
              <Image
                source={require("../../assets/lekki.jpg")}
                style={styles.carouselImage}
              />
              <Text style={styles.carouselText}>Lekki</Text>
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require("../../assets/yaba.jpg")}
                style={styles.carouselImage}
              />
              <Text style={styles.carouselText}>Yaba</Text>
            </View>
            {/* Add more carousel items as needed */}
          </ScrollView>

          {/* Next Button */}
          <TouchableOpacity style={styles.carouselButton} onPress={handleNext}>
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>

        {/* Property Cards with Infinite Scroll */}
        <FlatList
          data={properties}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.propertyCard}
              onPress={() =>
                navigation.navigate("property-details/[id]", { id: item.id })
              }
            >
              <Image source={item.image} style={styles.propertyImage} />
              <Text style={styles.propertyTitle}>{item.title}</Text>
              <Text style={styles.propertyPrice}>{item.price}</Text>
              <Text style={styles.propertyLocation}>{item.location}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={() => {
            // Logic for infinite scroll (e.g., fetch more properties)
          }}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      {/* Tray Menu Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={toggleMenu}
      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.menuTitle}>Menu</Text>
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => handleMenuOption("Login/Register")}
          >
            <Text style={styles.menuOptionText}>Login/Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => handleMenuOption("Settings")}
          >
            <Text style={styles.menuOptionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => handleMenuOption("About Us")}
          >
            <Text style={styles.menuOptionText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  menuIcon: {
    padding: 8,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 16,
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  carouselContentContainer: {
    alignItems: "center",
  },
  carouselItem: {
    position: "relative",
    width: width - 80,
    marginHorizontal: 20,
  },
  carouselImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  carouselText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  carouselButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 50,
  },
  propertyCard: {
    flex: 1,
    flexDirection: "column",
    margin: 8,
    padding: 8,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    alignItems: "center",
  },
  propertyImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  propertyPrice: {
    fontSize: 14,
    color: "green",
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 14,
    color: "#555",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    position: "absolute",
    top: 0,
    right: 0,
    width: width * 0.75,
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuOptionText: {
    fontSize: 18,
  },
});
