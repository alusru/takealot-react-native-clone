//import liraries
import { Ionicons } from "@expo/vector-icons";
import React, { Component, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BottomSheetModal, {
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Category from "../components/Category";
import { lists } from "../data";
import ProductSection from "../components/ProductSection";

// create a component
const ListScreen = ({ navigation }) => {
  const snapPoints = useMemo(() => ["100%"], []);
  const bottomSheetModalRef = useRef(null);

  const handleOpen = () => bottomSheetModalRef.current?.expand();

  function openUp() {
    console.log("pressed");
  }

  navigation.setOptions({
    headerLeft: () => (
      <Pressable onPress={openUp}>
        <Ionicons name={"add"} size={24} color={"blue"} />
      </Pressable>
    ),
  });
  return (
    <View>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Text onPress={handleOpen}>handleOpen</Text>
          <BottomSheetModal
            index={-1}
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: "#f00" }}
            enablePanDownToClose={true}
          >
            <BottomSheetView>
              <Text>LIST</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      <View style={{ marginVertical: 12 }}>
        <View
          style={{ flexDirection: "row", backgroundColor: "#fff", padding: 20 }}
        >
          <Text style={{ flex: 4, fontSize: 15 }}>
            Price & back-in-stock notifications
          </Text>
          <Text style={{ flex: 1, color: "blue" }}>Manage</Text>
        </View>
        <Category data={lists} />
        <ProductSection heading={"Customers Also Bought"} />
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
});

//make this component available to the app
export default ListScreen;
