import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function PropertyRequestScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const navigation = useNavigation();

  // Submit handler
  const onSubmit = async (data) => {
    const isValid = await trigger();
    if (!isValid) {
      Alert.alert("Form Validation", "Please fill in all required fields.");
      return;
    }

    try {
      // FormSubmit logic
      const response = await fetch(
        "https://formsubmit.co/13e1273f5b7a4c1bb177d4b64550c7f8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestType: data.requestType,
            location: data.location,
            propertyType: data.propertyType,
            budget: data.budget,
            furnished: data.furnished,
          }),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "Your request has been submitted!");
        // Navigate to OrderScreen after successful form submission
        navigation.navigate("OrderScreen");
      } else {
        Alert.alert("Error", "There was an issue submitting your request.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Property Request Form</Text>

      <View>
        {/* Request Type */}
        <Text>Request Type *</Text>
        <Controller
          control={control}
          name="requestType"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => onChange(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Request Type" value="" />
              <Picker.Item label="Buy" value="Buy" />
              <Picker.Item label="Rent" value="Rent" />
              <Picker.Item label="Shortlet" value="Shortlet" />
            </Picker>
          )}
        />
        {errors.requestType && (
          <Text style={styles.error}>This field is required.</Text>
        )}

        {/* Location */}
        <Text>Location *</Text>
        <Controller
          control={control}
          name="location"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your preferred location"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.location && (
          <Text style={styles.error}>This field is required.</Text>
        )}

        {/* Property Type */}
        <Text>Property Type *</Text>
        <Controller
          control={control}
          name="propertyType"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => onChange(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Property Type" value="" />
              <Picker.Item label="Flat/Apartment" value="Flat" />
              <Picker.Item label="House" value="House" />
              <Picker.Item label="Land" value="Land" />
              <Picker.Item
                label="Commercial Property"
                value="Commercial Property"
              />
            </Picker>
          )}
        />
        {errors.propertyType && (
          <Text style={styles.error}>This field is required.</Text>
        )}

        {/* Budget */}
        <Text>Budget *</Text>
        <Controller
          control={control}
          name="budget"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your budget"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.budget && (
          <Text style={styles.error}>This field is required.</Text>
        )}

        {/* Furnished */}
        <Text>Furnished *</Text>
        <Controller
          control={control}
          name="furnished"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => onChange(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Option" value="" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          )}
        />
        {errors.furnished && (
          <Text style={styles.error}>This field is required.</Text>
        )}

        {/* Submit Button */}
        <Button
          title="Submit Request"
          onPress={handleSubmit(onSubmit)}
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
