import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

export default function ScheduleInspection() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();

  // State for DateTimePicker
  const [dob, setDob] = useState(new Date());
  const [showDobPicker, setShowDobPicker] = useState(false);

  const [inspectionDate, setInspectionDate] = useState(new Date());
  const [showInspectionPicker, setShowInspectionPicker] = useState(false);

  // State for ImagePicker (passport upload)
  const [passport, setPassport] = useState(null);

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data: ", data);
    // Navigate to the Order page after submission
    navigation.navigate("OrderScreen");
  };

  // Function to pick image (passport upload)
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPassport(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <Text style={styles.label}>Full Name</Text>
      <Controller
        control={control}
        rules={{ required: "Full name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
      />
      {errors.fullName && (
        <Text style={styles.error}>{errors.fullName.message}</Text>
      )}

      <Text style={styles.label}>Gender</Text>
      <Controller
        control={control}
        rules={{ required: "Gender is required" }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={styles.input}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        )}
        name="gender"
      />
      {errors.gender && (
        <Text style={styles.error}>{errors.gender.message}</Text>
      )}

      {/* Marital Status */}
      <Text style={styles.label}>Marital Status</Text>
      <Controller
        control={control}
        rules={{ required: "Marital status is required" }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={styles.input}
          >
            <Picker.Item label="Select Marital Status" value="" />
            <Picker.Item label="Single" value="Single" />
            <Picker.Item label="Married" value="Married" />
          </Picker>
        )}
        name="maritalStatus"
      />
      {errors.maritalStatus && (
        <Text style={styles.error}>{errors.maritalStatus.message}</Text>
      )}

      {/* Date of Birth */}
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDobPicker(true)}
      >
        <Text>{dob.toDateString()}</Text>
      </TouchableOpacity>
      {showDobPicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDobPicker(false);
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}

      {/* Current Address */}
      <Text style={styles.label}>Current Address</Text>
      <Controller
        control={control}
        rules={{ required: "Current address is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Your current address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="currentAddress"
      />
      {errors.currentAddress && (
        <Text style={styles.error}>{errors.currentAddress.message}</Text>
      )}

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Phone Number */}
      <Text style={styles.label}>Phone Number</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phoneNumber"
      />

      {/* State of Origin */}
      <Text style={styles.label}>State of Origin</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your state of origin (optional)"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="stateOfOrigin"
      />

      {/* Religion */}
      <Text style={styles.label}>Religion</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your religion (optional)"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="religion"
      />

      {/* Occupation */}
      <Text style={styles.label}>Occupation</Text>
      <Controller
        control={control}
        rules={{ required: "Occupation is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your occupation"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="occupation"
      />
      {errors.occupation && (
        <Text style={styles.error}>{errors.occupation.message}</Text>
      )}

      {/* Office Address */}
      <Text style={styles.label}>Office Address</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your office address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="officeAddress"
      />

      {/* Who Will be Responsible for Payment */}
      <Text style={styles.label}>Who will be responsible for payment</Text>
      <Controller
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={styles.input}
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Myself" value="Myself" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        )}
        name="responsibleForPayment"
      />
      {errors.responsibleForPayment && (
        <Text style={styles.error}>{errors.responsibleForPayment.message}</Text>
      )}

      {/* Upload Passport */}
      {/* <Text style={styles.label}>Upload a Passport</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>
          {passport ? "Change Passport" : "Upload Passport"}
        </Text>
      </TouchableOpacity>
      {passport && (
        <Image source={{ uri: passport }} style={styles.passportImage} />
      )} */}

      {/* Property of Interest */}
      <Text style={styles.label}>Property of Interest</Text>
      <Controller
        control={control}
        rules={{ required: "Property of interest is required" }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={styles.input}
          >
            <Picker.Item label="Select Property" value="" />
            <Picker.Item label="Airlotus Court" value="Airlotus Court" />
            <Picker.Item label="Yuta" value="Yuta" />
            <Picker.Item label="WhiteGold" value="WhiteGold" />
          </Picker>
        )}
        name="propertyOfInterest"
      />
      {errors.propertyOfInterest && (
        <Text style={styles.error}>{errors.propertyOfInterest.message}</Text>
      )}

      {/* Inspection Date */}
      <Text style={styles.label}>Inspection Date</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowInspectionPicker(true)}
      >
        <Text>{inspectionDate.toDateString()}</Text>
      </TouchableOpacity>
      {showInspectionPicker && (
        <DateTimePicker
          value={inspectionDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowInspectionPicker(false);
            if (selectedDate) setInspectionDate(selectedDate);
          }}
        />
      )}

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  passportImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginVertical: 16,
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
});
