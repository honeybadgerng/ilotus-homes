import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Services</Text>
      <Text style={styles.subHeader}>Services rendered by i-Lotus Homes</Text>

      {/* Development */}
      <View style={styles.serviceItem}>
        <FontAwesome5 name="building" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Development</Text>
          <Text style={styles.serviceDescription}>
            This involves the purchase of raw land, construction, renovation of
            buildings, and sale or lease of the finished product to end users.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Estate Management */}
      <View style={styles.serviceItem}>
        <Ionicons name="business" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Estate Management</Text>
          <Text style={styles.serviceDescription}>
            We have a team of professionals who help manage completed projects
            and ensure our clients have a seamless experience.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Property Leasing */}
      <View style={styles.serviceItem}>
        <MaterialIcons name="location-city" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Property Leasing</Text>
          <Text style={styles.serviceDescription}>
            We offer land and buildings for lease ranging from months to years
            for commercial or residential purposes.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Agriculture */}
      <View style={styles.serviceItem}>
        <FontAwesome5 name="tractor" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Agriculture</Text>
          <Text style={styles.serviceDescription}>
            We have farmland for sale or lease, available for agricultural use.
            We engage in mechanized livestock and crop farming.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Land Banking */}
      <View style={styles.serviceItem}>
        <Ionicons name="cash" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Land Banking</Text>
          <Text style={styles.serviceDescription}>
            Invest in property with us and get a higher Return on Investment by
            reselling later.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Architectural Designs */}
      <View style={styles.serviceItem}>
        <Ionicons name="construct" size={32} color="black" />
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>Architectural Designs</Text>
          <Text style={styles.serviceDescription}>
            Our real estate professionals create top-notch architectural
            designs.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F0F0F0" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subHeader: { fontSize: 18, marginBottom: 20 },
  serviceItem: { flexDirection: "row", marginBottom: 20, alignItems: "center" },
  serviceText: { marginLeft: 10, flex: 1 },
  serviceTitle: { fontSize: 20, fontWeight: "bold" },
  serviceDescription: { fontSize: 14, marginVertical: 5 },
  learnMore: { color: "blue", fontSize: 14, textDecorationLine: "underline" },
});
