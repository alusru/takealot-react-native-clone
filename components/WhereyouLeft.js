//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../data";

// create a component
const WhereyouLeft = () => {
  function WYL({ item }) {
    return <ProductCard item={item} />;
  }
  return (
    <FlatList
      data={products}
      renderItem={WYL}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
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
export default WhereyouLeft;
