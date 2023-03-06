import { React, useState, useEffect } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import {
  EvilIcons,
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons,
  AntDesign,
} from "react-native-vector-icons";
import * as API from "../Api/Constant";
import { interpolateNode } from "react-native-reanimated";

const NearBy = () => {
  const [dataone, setDataone] = useState();

  const navigation = useNavigation();

  const NearByApi = async () => {
    try {
      const formdata = new FormData();
      formdata.append("count", "2");
      formdata.append("latitude", "22.7375");
      formdata.append("longitude", "75.8699");

      const response = await fetch(API.GetAllLaundryShops, {
        method: "POST",
        headers: {
          Accept: "application.json",
          Content_Type: "application.json",
        },
        body: formdata,
      });
      const ress = await response.json();
      const updatedRess = ress.data;
      setDataone(updatedRess);
      console.log("dsfsadfsadfsadfsafsafafafaff", updatedRess);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    NearByApi();
  }, []);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ flex: 1 }}>
        <MapView
          userInterfaceStyle="dark"
          showsUserLocation={true}
          showsMyLocationButton={true}
          followUserLocation={true}
          initialRegion={{
            latitude: 22.749978,
            longitude: 75.902956,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      <View style={{ top: 550, position: "absolute" }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataone}
          renderItem={({ item, index }) => {
            console.log(item.txt);
            return (
              <View
                style={{
                  elevation: 5,
                  backgroundColor: "white",
                  marginBottom: 10,
                  margin: 10,
                  height: 160,
                  width: 240,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("TopTabFourth")}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: "100%",
                      height: 120,
                      resizeMode: "contain",
                      borderRadius: 5,
                    }}
                  />
                  <Text style={{ fontSize: 13, paddingLeft: 5 }}>
                    {item.shop_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingLeft: 5,

                      width: 230,
                      height: 20,
                    }}
                  >
                    {item.address}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingLeft: 5,
                      alignSelf: "flex-end",
                      bottom: 32,

                      width: 23,
                      height: 20,
                      right: 10,
                    }}
                  >
                    {item.rating}
                  </Text>
                  <AntDesign
                    name="star"
                    size={20}
                    style={{
                      color: "#FFA500",
                      position: "absolute",
                      alignSelf: "flex-end",
                      top: 123,
                      right: 32,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TouchableContainer: {
    top: 120,
    height: 40,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.4,
    left: 32,
    borderRadius: 32,
    backgroundColor: "#147fdc",
  },
});

export default NearBy;
