//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FeaturedCategory from "../components/FeaturedCategory";
import ProductSection from "../components/ProductSection";

// create a component
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <FeaturedCategory heading={"Featured Categories"} />

        <ProductSection
          navigation={navigation}
          heading={"Pick Up Where You Left Off"}
        />
        <ProductSection
          navigation={navigation}
          heading={"Back to Work Essentials"}
        />
        <ProductSection
          navigation={navigation}
          heading={"Exclusive to Takealot: GetUp"}
        />
        <ProductSection navigation={navigation} heading={"Home Refresh"} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default HomeScreen;
