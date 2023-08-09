import { View, Text } from "react-native";
import React from "react";
import MapFull from "../Components/Search/MapFull";
import SearchBar from "../Components/Search/SearchBar";

export default function Search() {
  return (
    <View>
      <View style={{ position: "absolute", zIndex: 1 }}>
        <SearchBar />
      </View>
      <MapFull />
    </View>
  );
}
