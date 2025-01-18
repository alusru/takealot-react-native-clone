//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const AccountSection = ({ data }) => {
  function UI({ item }) {
    const { title } = item;
    return (
      <View style={styles.accountContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons
            style={styles.icon}
            name="chevron-forward-outline"
            size={24}
            color={"#dfdfdf"}
          />
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList data={data} renderItem={UI} keyExtractor={(item) => item.id} />
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
  accountContainer: {
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
  },
  title: {
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingVertical: 15,
    borderBottomColor: "#dfdfdf",
  },
});

//make this component available to the app
export default AccountSection;
