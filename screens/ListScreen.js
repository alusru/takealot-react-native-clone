//import liraries
import { Ionicons } from "@expo/vector-icons";
import React, { Component, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Category from "../components/Category";
import { lists } from "../data";
import ProductSection from "../components/ProductSection";

// create a component
const ListScreen = ({ navigation }) => {
  function openUp() {
    console.log("pressed");
  }

  return (
    <View>
      <View style={{ marginVertical: 12 }}>
        <View
          style={{ flexDirection: "row", backgroundColor: "#fff", padding: 20 }}
        >
          <Text style={{ flex: 4, fontSize: 15 }}>
            Price & back-in-stock notifications
          </Text>
          <Text style={{ flex: 1, color: "blue" }}>Manage</Text>
        </View>
        <Category data={lists} />
        <ProductSection
          navigation={navigation}
          heading={"Customers Also Bought"}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ListScreen;
