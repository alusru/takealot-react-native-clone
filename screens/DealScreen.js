//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FeaturedCategory from "../components/FeaturedCategory";
import ProductSection from "../components/ProductSection";

// create a component
const DealScreen = () => {
  return (
    <View>
      <FeaturedCategory heading={"Shop Deals by Department"} />
      <ProductSection heading={"TakealotMORE Member Exlcusive"} />
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
export default DealScreen;
