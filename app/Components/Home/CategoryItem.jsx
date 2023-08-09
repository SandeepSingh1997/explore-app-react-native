import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        margin: 10,
        padding: 5,
        backgroundColor: Colors.gray,
        height: 90,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Image source={category.icon} style={{ width: 50, height: 50 }} />
      <Text>{category.name}</Text>
    </View>
  );
}
