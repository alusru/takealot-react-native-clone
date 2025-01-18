//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { accounts, settings } from "../data";
import AccountSection from "../components/AccountSection";

// create a component
const AccountScreen = () => {
  return (
    <View>
      <AccountSection data={accounts} />
      <View style={styles.settings}>
        <AccountSection data={settings} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  settings: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default AccountScreen;
