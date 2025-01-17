//import liraries
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { discount } from "../../helper";

// create a component
const ProductScreen = ({ route }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: route.params.image }} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleAndShare}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Ionicons
            style={styles.shareIcon}
            name="share-outline"
            size={30}
            color={"blue"}
          />
        </View>
        <Text style={styles.vendorTitle}>Vendor</Text>
        <View style={styles.ratingContainer}>
          <Ionicons
            style={{ marginTop: 10, flex: 0 }}
            name="star-sharp"
            size={15}
            color={"#fbb600"}
          />
          <Text style={{ marginTop: 10, flex: 0 }}>{route.params.rating}</Text>
          <Text style={{ marginTop: 10, flex: 1, paddingLeft: 10 }}>
            2 Reviews
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text styles={{ fontSize: 30, fontWeight: "bold" }}>
            R {discount(route.params.price, route.params.discounts)}
          </Text>
          <Text
            style={{
              paddingLeft: 5,
              textDecorationLine: "line-through",
              fontSize: 10,
              marginVertical: 3,
            }}
          >
            {route.params.price ==
            discount(route.params.price, route.params.discounts)
              ? null
              : `R ${route.params.price}`}
          </Text>
          <Ionicons
            style={{ paddingLeft: 5 }}
            name="information-circle-sharp"
            size={15}
            color={"#949494"}
          />
        </View>
        <View>
          <Text>Estimated Delivery</Text>
        </View>
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
  image: {
    width: 350,
    height: 350,

    textAlign: "center",
  },
  imageContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    alignItems: "center",
  },
  descriptionContainer: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 5,
  },
  titleAndShare: {
    flexDirection: "row",
  },
  title: {
    flex: 6,
    fontSize: 20,
  },
  shareIcon: {
    flex: 1,
  },
  vendorTitle: {
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: "row",
  },
});

//make this component available to the app
export default ProductScreen;
