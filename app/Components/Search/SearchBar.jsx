import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";

export default function SearchBar() {
  return (
    <View>
      <Text style={{ fontSize: 30, margin: 20 }}>Discover</Text>
      <View
        style={{
          alignItems: "center",
          width: Dimensions.get("screen").width,
        }}
      >
        <TextInput
          placeholder="Discover"
          style={{
            borderRadius: 10,
            padding: 10,
            width: Dimensions.get("screen").width * 0.8,
            height: 40,
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
}
