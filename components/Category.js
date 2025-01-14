//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { shopByDepartment } from "../data";

// create a component
const Category = () => {
  function CategoryUI({ item }) {
    const { title, image } = item;
    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#e7e5e4",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: "#fff",
              marginLeft: 15,
              marginVertical: 12,
            }}
            source={{ uri: image }}
          />
          <Text style={{ marginVertical: 28, marginLeft: 15 }}>{title}</Text>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={shopByDepartment}
      renderItem={CategoryUI}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Category;
