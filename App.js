import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DealScreen from "./screens/DealScreen";
import ListScreen from "./screens/ListScreen";
import AccountScreen from "./screens/AccountScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const [routeState, setRouteState] = useState("");

  function handleCartIcon() {
    console.log("pressed");
  }

  function TabNavigation() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerRight: () => (
            <>
              {routeState == "Home" ? null : (
                <Pressable>
                  <Ionicons name="search" size={20} color={"#000000"} />
                </Pressable>
              )}
              <Pressable
                style={{ marginHorizontal: 19 }}
                onPress={handleCartIcon}
              >
                <Ionicons name="cart" size={20} color={"#000000"} />
              </Pressable>
            </>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"home-outline"} size={size} color={color} />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 31,
                      fontWeight: "bold",
                      marginRight: 4,
                    }}
                  >
                    takealot
                  </Text>

                  <Text
                    style={{
                      fontSize: 11,

                      backgroundColor: "#0b79bf",
                      padding: 9,
                      color: "#fff",
                      borderRadius: 50,
                    }}
                  >
                    com
                  </Text>
                </View>

                {/* <TextInput
                  value={search}
                  autoCapitalize={"none"}
                  onChangeText={setSearch}
                  style={styles.input}
                  placeholder={"Search"}
                /> */}
              </View>
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

  function CurrentRoute() {
    const currentRoute = useNavigationState(
      (state) => state?.routes[state?.index]?.name
    );
    setRouteState(currentRoute);

    return <></>;
  }

  return (
    <NavigationContainer>
      <CurrentRoute />
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
  input: {
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 4,
    padding: Platform.OS ? 15 : 0,
  },
});
