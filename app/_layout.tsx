import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Add the LoginScreen */}
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="property-details/[id]"
          options={{ title: "Property Details" }}
        />
        <Stack.Screen
          name="AboutUs"
          options={{ title: "About i-Lotus Homes" }} // Set the title for the about page
        />
        <Stack.Screen
          name="ServicesScreen"
          options={{ title: "Services" }} // Set the title for the about page
        />
        <Stack.Screen
          name="PropertyRequest"
          options={{ title: "Send in you requests" }} // Set the title for the about page
        />
        <Stack.Screen
          name="ScheduleInspection"
          options={{ title: "Book Inspection" }} // Set the title for the about page
        />
        <Stack.Screen name="OrderScreen" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
