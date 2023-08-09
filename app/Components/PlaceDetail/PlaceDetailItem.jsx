import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PlaceDetailItem({ place }) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{place.name}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <AntDesign name="star" size={20} />
        <Text>{place.rating}</Text>
      </View>
      <Image
        source={{ uri: place.image }}
        style={{
          width: Dimensions.get("screen").width * 0.9,
          height: 200,
          borderRadius: 20,
          objectFit: "contain",
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text>{place.address}</Text>
    </View>
  );
}
