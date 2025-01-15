//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Category from "../components/Category";
import { shopByDepartment } from "../data";

// create a component
const CategoryScreen = () => {
  return (
    <View>
      <Category data={shopByDepartment} />
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
export default CategoryScreen;
