import React from "react";
import { View, ScrollView } from "react-native";
import { COLORS } from "../../constants/constants";
import Header from "../../components/Header";
import FoodItems from "../../components/FoodItems";
import InputAndFilter from "@/components/InputAndFilter";

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1, marginTop: 0 }}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          padding: 10,
          paddingTop: 35,
          paddingBottom: 0,
          backgroundColor: COLORS.white,
          height: "100%",
        }}
      >
        <Header />
        <InputAndFilter />
        <FoodItems />
      </View>
    </ScrollView>
  );
}
