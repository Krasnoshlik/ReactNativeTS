import React, { useState } from "react";
import { View, TextInput, Image, TouchableOpacity, ScrollView, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/constants";
import { categories } from "@/products";

const InputAndFilter = () => {
  const [searchInfo, setSearchInfo] = useState("");
  const [chooseCategories, setChooseCategories] = useState("All");

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setSearchInfo(value)}
            placeholder="Search"
            placeholderTextColor={COLORS.black}
          />
        </View>
        <TouchableOpacity underlayColor="rgba(0,0,0,0.1)">
          <Image
            style={styles.filterIcon}
            source={require("../assets/Filter.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((item, index) => (
          <CustomButton
            key={index}
            onPress={() => setChooseCategories(item)}
            title={item}
            isSelected={chooseCategories === item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const CustomButton = ({ onPress, title, isSelected }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.customButton, isSelected && styles.buttonSelected]}
  >
    <Text style={[styles.buttonText, isSelected && styles.textSelected]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 30,
    borderWidth: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
    height: 60,
    borderColor: COLORS.black,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 25,
    marginRight: 20,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingLeft: 0,
    fontSize: SIZES.body3,
  },
  filterIcon: {
    width: 60,
    height: 60,
    marginLeft: 13,
  },
  scrollContainer: {
    marginTop: 4,
    padding: 10,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  customButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: SIZES.body3,
    fontWeight: 'medium',
    color: '#6A6A6A',
  },
  buttonSelected: {
    backgroundColor: '#EF2A39',
  },
  textSelected: {
    color: '#F5F5F5',
  },
});

export default InputAndFilter;
