//import liraries
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { discount, wrap } from "../helper";

// create a component
const ProductCard = ({ item }) => {
  const { title, image, price, rating, discounts } = item;
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 21,
        marginHorizontal: 4,
        borderColor: "#4d4d4f",
        backgroundColor: "#ffffff",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: "#ff0",
            width: 25,
            padding: 5,
            position: "relative",
          }}
        >
          <Text>{discounts}%</Text>
        </View>
        <Image style={styles.img} source={{ uri: image }} />
        <Text>{wrap(title, 20)}</Text>
        <View style={styles.priceDiscount}>
          <Text style={styles.price}>{discount(price, discounts)}</Text>
          <Text style={styles.discount}>
            {price == discount(price, discounts) ? null : price}
          </Text>
        </View>
        <View>
          <Text style={styles.rating}>{rating}</Text>
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
  img: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  priceDiscount: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  price: {
    fontWeight: "bold",
    paddingRight: 4,
  },
  rating: {
    fontSize: 11,
  },
  discount: {
    fontSize: 11,
    marginTop: 3,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

//make this component available to the app
export default ProductCard;
