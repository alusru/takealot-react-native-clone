//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../data";

// create a component
const ProductSection = ({ heading }) => {
  function SliderUI({ item }) {
    return <ProductCard item={item} />;
  }
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 12,
          paddingTop: 12,
          paddingBottom: 12,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold", flex: 5 }}>{heading}</Text>
        <Text style={{ fontWeight: "bold", flex: 1, color: "#0b79bf" }}>
          VIEW ALL
        </Text>
      </View>
      <FlatList
        data={products}
        style={{ flexGrow: 0 }}
        renderItem={SliderUI}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
export default ProductSection;
