import { View, StyleSheet, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function MapFull() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 30,
    longitude: -70,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      });
    }
  }, []);

  return (
    <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 10,
      }}
    >
      <MapView style={style.map} showsUserLocation={true} region={mapRegion}>
        <Marker title="you" coordinate={mapRegion} />
      </MapView>
    </View>
  );
}

const style = StyleSheet.create({
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
