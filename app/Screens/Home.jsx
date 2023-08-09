import { View } from "react-native";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import PlaceList from "../Components/Home/PlaceList";
import { ScrollView } from "react-native";

export default function Home() {
  const placeList = [
    {
      id: 1,
      name: "New York cafe",
      address: "13th street, Main Avenue, NY",
      rating: 4.5,
      image:
        "https://media.istockphoto.com/id/1317827657/photo/people-sitting-outside-a-trendy-hipster-cafe-in-brooklyn.jpg?s=612x612&w=0&k=20&c=SDPQ07eguOakWLEWnBiYYC2eYtM139M3H-E3D2l4-To=",
    },
    {
      id: 2,
      name: "La pino's Pizza",
      address: "13th street, Main Avenue, NY",
      rating: 3.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VT0SPB613rgQAz2czbm5b8pEJsIVjl9EMw&usqp=CAU",
    },
    {
      id: 3,
      name: "Bonjour Club and cafe",
      address: "13th street, Main Avenue, NY",
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-0OlrG6byP8OVDsDuUP6HLQfZoi1tGzF7A&usqp=CAU",
    },
    {
      id: 4,
      name: "Hill side resturant",
      address: "13th street, Main Avenue, NY",
      rating: 4.8,
      image:
        "https://media.istockphoto.com/id/1317827657/photo/people-sitting-outside-a-trendy-hipster-cafe-in-brooklyn.jpg?s=612x612&w=0&k=20&c=SDPQ07eguOakWLEWnBiYYC2eYtM139M3H-E3D2l4-To=",
    },
  ];
  return (
    <ScrollView style={{ padding: 10 }} va>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
