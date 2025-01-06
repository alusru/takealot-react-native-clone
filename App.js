import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DealScreen from "./screens/DealScreen";
import ListScreen from "./screens/ListScreen";
import AccountScreen from "./screens/AccountScreen";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function TabNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"home-outline"} size={size} color={color} />
            ),
            headerTitle: () => (
              <SvgUri
                width="150"
                height="150"
                uri="https://shopfront.takealot.com/5a21343c616641f68da892b452aa154c446d6610/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg"
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
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
    );
  }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
