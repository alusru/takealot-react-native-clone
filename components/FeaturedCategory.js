//import liraries
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { featureCategory } from "../data";
import { wrap } from "../helper";

// create a component
const FeaturedCategory = ({ heading }) => {
  function FeaturedCategoryUI({ item }) {
    const { title, image } = item;

    return (
      <View>
        <View style={styles.subContainer}>
          <Image style={styles.img} source={{ uri: image }} />
          <Text style={styles.title}>{wrap(title, 9)}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 12,
            paddingTop: 12,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{heading}</Text>
        </View>
        <FlatList
          data={featureCategory}
          renderItem={FeaturedCategoryUI}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  img: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  subContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
  },
});

//make this component available to the app
export default FeaturedCategory;
