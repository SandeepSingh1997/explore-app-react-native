import { View, StyleSheet, TextInput, Dimensions, Text } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

export default function Header() {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="location" size={30} />
        <TextInput placeholder="Search" style={style.searchBar} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    paddingLeft: 5,
    width: Dimensions.get("screen").width * 0.6,
  },
});
