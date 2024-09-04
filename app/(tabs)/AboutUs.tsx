import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function AboutPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo at the top */}
        <Image
          source={require("../../assets/logo.jpg")} // Replace with your logo path
          style={styles.logo}
        />

        {/* About content */}
        <Text style={styles.headerText}>Welcome to i-Lotus Homes</Text>
        <Text style={styles.paragraph}>
          We are the pioneers and pathfinders in real estate discovery. We have
          a proven track record of discovering properties and transforming them
          into lucrative opportunities that others overlook, only to see them
          develop rapidly. Trust in us, and we will deliver your real estate
          dreams with utmost satisfaction.
        </Text>
        <Text style={styles.paragraph}>
          i-Lotus Homes is dedicated to sustainability and environmental
          stewardship. Our projects incorporate green building practices,
          energy-efficient designs, and eco-friendly materials to minimize
          environmental impact and promote healthy living environments.
        </Text>
        <Text style={styles.paragraph}>
          i-Lotus Homes has been recognized with several awards for excellence
          in real estate development, design innovation, and sustainability
          practices, highlighting our commitment to setting industry standards.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    marginTop: 50,
  },
  container: {
    padding: 16,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});
