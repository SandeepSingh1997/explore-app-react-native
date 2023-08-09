import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

export default function PlaceItem({ place }) {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Image
        source={{ uri: place.image }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <View style={{ marginTop: 10 }}>
        <Text>{place.name}</Text>
        <Text>{place.address}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="star" size={18} color="black" />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}
