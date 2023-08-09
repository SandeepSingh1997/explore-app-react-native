import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("../../../assets/cafe.png"),
    },
  ];
  return (
    <View>
      <Text
        style={{
          fontFamily: "raleway-regular",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Select Top Category
      </Text>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
}
