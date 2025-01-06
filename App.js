import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DealScreen from "./screens/DealScreen";
import ListScreen from "./screens/ListScreen";
import AccountScreen from "./screens/AccountScreen";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStaticNavigation();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"home-outline"} size={size} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarcon: ({ color, size }) => (
              <Ionicons name={"search-outline"} size={size} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Deal"
          component={DealScreen}
          options={{
            tabBarLabel: "Deal",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"time-outline"} size={size} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Lists"
          component={ListScreen}
          options={{
            tabBarLabel: "Lists",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"heart-outline"} size={size} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"person-outline"} size={size} color={color} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
