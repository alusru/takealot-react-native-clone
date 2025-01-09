//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FeaturedCategory from "../components/FeaturedCategory";
import ProductCard from "../components/ProductCard";
import WhereyouLeft from "../components/WhereyouLeft";

// create a component
const HomeScreen = () => {
  return (
    <View>
      <FeaturedCategory heading={"Featured Categories"} />

      <WhereyouLeft />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default HomeScreen;
