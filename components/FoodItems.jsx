import React from "react";
import {
  Text,
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/constants";
import { popular } from "../products";
import {Shadow} from 'react-native-shadow-2';

const FoodItems = () => {
  return (
    <View style={styles.itemsContainer}>
      {popular.map((product, idx) => (
        <Shadow
        distance={10}
        startColor={'#00000010'}
        radius={8} 
        key={`popular-${idx}`}>
        <View style={styles.itemWrapper}>
          <TouchableHighlight
          >
            <View style={styles.itemContent}>
              <Image source={{ uri: product.image }} style={styles.image} />
              <View>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemPrice}>$ {product.price}</Text>
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
    justifyContent: 'center',
    gap: 20,
    color: 'black',
  },
  itemWrapper: {
    width: 200,
    height: 220,
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
  itemName: {
    fontSize: SIZES.h4,
    marginTop: 10,
    textAlign: "center",
  },
  itemPrice: {
    fontSize: SIZES.h4,
    color: COLORS.primary,
    marginTop: 10,
    textAlign: "center",
  },
});

export default FoodItems;
