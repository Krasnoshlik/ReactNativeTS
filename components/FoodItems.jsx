import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/constants";
import { popular } from "../products";
import { Shadow } from "react-native-shadow-2";
import AntDesign from "@expo/vector-icons/AntDesign";

const FoodItems = () => {
  const [likedItems, setLikedItems] = useState({});

  function toggleLikedItems (idx) {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [idx]: !prevLikedItems[idx],
    }))
  }
  
  return (
    <View style={styles.itemsContainer}>
      {popular.map((product, idx) => (
        <Shadow
          distance={10}
          startColor={"#00000010"}
          radius={8}
          key={`popular-${idx}`}
        >
          <View style={styles.itemWrapper}>
            <TouchableHighlight>
              <View style={styles.itemContent}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.itemDataWrapper}>
                  <Text style={styles.itemName}>{product.name}</Text>
                  <View style={styles.priceAndlikedWrapper}>
                    <Text style={styles.itemPrice}>$ {product.price}</Text>
                    <TouchableHighlight onPress={() => toggleLikedItems(idx)}>
                    {!likedItems[idx] ? (
                      <AntDesign name="hearto" size={20} color="black" />
                    ) : (
                      <AntDesign name="heart" size={20} color="black" />
                    )}
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </Shadow>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    color: "black",
  },
  itemWrapper: {
    width: "100%",
    widthMax: 220,
    heightMax: 220,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth: 0,
    borderRadius: 20,
  },
  itemContent: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  itemDataWrapper: {
    width: "100%",
  },
  itemName: {
    fontSize: SIZES.h4,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
  priceAndlikedWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: SIZES.h4,
    color: COLORS.primary,
    marginTop: 10,
    textAlign: "center",
  },
});

export default FoodItems;
