// propertiesApi.js

// Sample data for properties and locations
export const properties = [
  {
    id: "1",
    title: "Airlotus Court",
    location: "Lekki",
    images: [
      require("../assets/app_pix/aviation3.jpg"),
      require("../assets/app_pix/aviation4.jpg"),
      require("../assets/app_pix/aviation5.jpg"),
      require("../assets/app_pix/aviation6.jpg"),
      require("../assets/app_pix/aviation7.jpg"),
      require("../assets/app_pix/aviation8.jpg"),
      require("../assets/app_pix/aviation9.jpg"),
      require("../assets/app_pix/aviation10.jpg"),
      // Add more images as needed
    ],
    price: "₦34,000,000",
    description: "An ongoing aviation project at the heart of Lekki",
  },
  {
    id: "2",
    title: "WhiteGold Court",
    location: "Lekki",
    images: [
      require("../assets/app_pix/whitegold.jpg"),
      require("../assets/app_pix/whitegold2.jpg"),
      // Add more images as needed
    ],
    price: "₦100,000,000",
    description: "A cozy 3-bedroom apartment in Lekki.",
  },
  {
    id: "3",
    title: "Yuta",
    location: "Leki",
    images: [
      require("../assets/app_pix/Yuta.jpg"),
      require("../assets/app_pix/Yuta2.jpg"),
      // Add more images as needed
    ],
    price: "₦300,000,000",
    description: "A nice land in Lekki.",
  },

  // Add more properties as needed
];

export const locations = [
  {
    id: "1",
    name: "Lekki",
    image: require("../assets/lekki.jpg"),
    description: "A vibrant and upscale neighborhood in Lagos.",
  },
  {
    id: "2",
    name: "Yaba",
    image: require("../assets/yaba.jpg"),
    description: "A bustling area known for its educational institutions.",
  },
  // Add more locations as needed
];

// Function to get all properties
export const getAllProperties = () => {
  return properties;
};

// Function to get all locations
export const getAllLocations = () => {
  return locations;
};

// Function to get property by ID
export const getPropertyById = (id) => {
  return properties.find((property) => property.id === id);
};

// Function to get location by ID
export const getLocationById = (id) => {
  return locations.find((location) => location.id === id);
};

// Function to get properties by location
export const getPropertiesByLocation = (locationName) => {
  return properties.filter((property) => property.location === locationName);
};

// Additional API functions can be added as needed
