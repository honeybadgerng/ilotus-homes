import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { properties } from "../../app/propertiesApi"; // Importing properties

const { width } = Dimensions.get("window");

export default function PropertyDetails() {
  const route = useRoute();
  const { id } = route.params;

  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const scrollViewRef = useRef(null); // Reference for ScrollView

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.id === id);
    setProperty(selectedProperty);
  }, [id]);

  if (!property) return <Text>Loading...</Text>;

  const handleNextImage = () => {
    if (currentIndex < property.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * width,
        animated: true,
      });
    }
  };
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Carousel for property images */}
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={styles.carousel}
        >
          {property.images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>

        {/* Navigation buttons for image carousel */}
        <View style={styles.navigationButtons}>
          <Button
            title="Previous"
            onPress={handlePreviousImage}
            disabled={currentIndex === 0}
          />
          <Button
            title="Next"
            onPress={handleNextImage}
            disabled={currentIndex === property.images.length - 1}
          />
        </View>
      </View>

      {/* Property details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.price}>{property.price}</Text>
        <Text style={styles.location}>{property.location}</Text>
        <Text style={styles.description}>{property.description}</Text>
      </View>

      {/* Book Inspection Button */}
      <View style={styles.bookInspectionButtonContainer}>
        <Button
          title="Book Inspection"
          onPress={() => navigation.navigate("ScheduleInspection")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  carouselContainer: {
    height: 250,
    marginBottom: 16,
  },
  carousel: {
    flex: 1,
  },
  image: {
    width: width - 32,
    height: 250,
    resizeMode: "cover",
    borderRadius: 8,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: "#333",
    lineHeight: 20,
  },
  bookInspectionButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});
