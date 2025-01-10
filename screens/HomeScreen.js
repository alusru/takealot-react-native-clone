//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FeaturedCategory from "../components/FeaturedCategory";
import ProductSection from "../components/ProductSection";

// create a component
const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <FeaturedCategory heading={"Featured Categories"} />

        <ProductSection heading={"Pick Up Where You Left Off"} />
        <ProductSection heading={"Back to Work Essentials"} />
        <ProductSection heading={"Exclusive to Takealot: GetUp"} />
        <ProductSection heading={"Home Refresh"} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default HomeScreen;
