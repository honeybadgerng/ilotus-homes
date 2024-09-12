import React, { useState, useCallback } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Modal,
  Dimensions,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { properties } from "../../app/propertiesApi"; // Importing properties

const { width } = Dimensions.get("window");

export default function LandingPage() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // Reset menuVisible state when page is focused
  useFocusEffect(
    useCallback(() => {
      setMenuVisible(false); // Reset the menu visibility
      return () => {
        setMenuVisible(false); // Ensure it is reset on unfocus as well
      };
    }, [])
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          onPress: () => {
            navigation.navigate("LoginScreen");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderProperty = ({ item }) => (
    <TouchableOpacity
      style={styles.propertyCard}
      onPress={() =>
        navigation.navigate("property-details/[id]", { id: item.id })
      }
    >
      <Image source={item.images[0]} style={styles.propertyImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
        <TextInput
          style={styles.searchInput}
          placeholder="Search your dream home"
        />
        <FlatList
          data={properties}
          renderItem={renderProperty}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContent}
        />
        <Modal
          visible={menuVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={toggleMenu}
        >
          <View style={styles.menuModal}>
            <Text style={styles.menuItem} onPress={handleLogout}>
              Logout
            </Text>
            <Text
              style={styles.menuItem}
              onPress={() => navigation.navigate("ServicesScreen")}
            >
              Services
            </Text>
            <Text
              style={styles.menuItem}
              onPress={() => navigation.navigate("AboutUs")}
            >
              About us
            </Text>
            <Text style={styles.menuItem} onPress={toggleMenu}>
              Close Menu
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 },
  container: { flex: 1, paddingHorizontal: 16 },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: { width: 100, height: 50, resizeMode: "contain" },
  menuIcon: { padding: 10 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  flatListContent: { paddingBottom: 20 },
  row: { flex: 1, justifyContent: "space-between" },
  propertyCard: { width: (width - 48) / 2, marginBottom: 16 },
  propertyImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  menuModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    fontSize: 24,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
});
