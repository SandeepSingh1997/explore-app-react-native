import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {
  const navigate = useNavigation();
  const onPressClick = (item) => {
    navigate.navigate("place-detail", { place: item });
  };
  return (
    <View>
      <Text style={style.font}>Found {placeList.length} places</Text>
      <FlatList
        data={placeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onPressClick(item);
            }}
          >
            <PlaceItem place={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      />
    </View>
  );
}

const style = StyleSheet.create({
  font: {
    fontFamily: "raleway-regular",
    fontSize: 20,
  },
});
