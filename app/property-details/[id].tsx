import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const { width } = Dimensions.get("window");

export default function PropertyDetails() {
  const { id } = useLocalSearchParams(); // Get the id from the route params
  const router = useRouter();

  // Mock data fetching, replace with actual API call or data fetching logic
  const property = {
    title: "Property " + id,
    images: [require("../../assets/property1.jpg")], // replace with actual images
    price: "₦80,000,000",
    location: "Lekki",
    description: "This is a detailed description of the property.",
  };

  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollX = React.useRef(0);

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

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>

        {/* Property Title */}
        <Text style={styles.title}>{property.title}</Text>

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
            {property.images.map((image, index) => (
              <View key={index} style={styles.carouselItem}>
                <Image source={image} style={styles.carouselImage} />
              </View>
            ))}
          </ScrollView>

          {/* Next Button */}
          <TouchableOpacity style={styles.carouselButton} onPress={handleNext}>
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>

        {/* Property Details */}
        <Text style={styles.price}>{property.price}</Text>
        <Text style={styles.location}>{property.location}</Text>
        <Text style={styles.description}>{property.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
  carouselButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 50,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  location: {
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});
