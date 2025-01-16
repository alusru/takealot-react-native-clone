//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { discount, truncate, wrap } from "../helper";
import { Ionicons } from "@expo/vector-icons";

// create a component
const ProductCard = ({ item, pressHandler }) => {
  const { title, image, price, rating, discounts } = item;

  return (
    <Pressable onPress={pressHandler}>
      <View
        style={{
          borderWidth: 1,
          padding: 21,
          marginHorizontal: 4,
          borderColor: "#9b9b9b",
          backgroundColor: "#ffffff",
        }}
      >
        <View>
          {discounts == 0 ? (
            <></>
          ) : (
            <View
              style={{
                backgroundColor: "#0b79bf",
                width: 40,
                height: 40,
                position: "absolute",
                top: -15,
                left: -15,
                right: 0,
                zIndex: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                {discounts}% OFF
              </Text>
            </View>
          )}
          <Image style={styles.img} source={{ uri: image }} />
          <Text>{truncate(wrap(title, 20), 38)}</Text>
          <View style={styles.priceDiscount}>
            <Text style={styles.price}>R{discount(price, discounts)}</Text>
            <Text style={styles.discount}>
              {price == discount(price, discounts) ? null : `R${price}`}
            </Text>
          </View>
          <View>
            <Text style={styles.rating}>
              <Ionicons
                style={{ marginTop: 50 }}
                name="star-sharp"
                size={15}
                color={"#fbb600"}
              />
              {rating}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
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
