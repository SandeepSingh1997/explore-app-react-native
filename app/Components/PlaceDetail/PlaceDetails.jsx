import { View, Text } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "./PlaceDetailItem";

export default function PlaceDetails() {
  const param = useRoute().params;
  const [place, setPlace] = useState(param?.place);
  return (
    <View style={{ padding: 20 }}>
      <PlaceDetailItem place={place} />
    </View>
  );
}
