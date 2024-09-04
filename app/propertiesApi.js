// propertiesApi.js

// Sample data for properties and locations
const properties = [
  {
    id: "1",
    title: "Property 1",
    location: "Lekki",
    images: [
      require("../assets/property1.jpg"),
      require("../assets/property2.jpg"),
      // Add more images as needed
    ],
    price: "₦500,000",
    description: "A beautiful 4-bedroom house in Lekki.",
  },
  {
    id: "2",
    title: "Property 2",
    location: "Yaba",
    images: [
      require("../assets/property2.jpg"),
      require("../assets/property1.jpg"),
      // Add more images as needed
    ],
    price: "₦300,000",
    description: "A cozy 3-bedroom apartment in Yaba.",
  },
  // Add more properties as needed
];

const locations = [
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
