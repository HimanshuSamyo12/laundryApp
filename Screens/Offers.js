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
import InputField from "../Components/InputComponent";
import Button1 from "../Components/Button";
import * as API from "../Api/Constant";

const Offers = () => {
  const [dataone, setDataone] = useState();

  const MyOffersApi = async () => {
    try {
      const formdata = new FormData();
      formdata.append("shop_id", "YZf0f6");

      const response = await fetch(API.OffersApi, {
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
    MyOffersApi();
  }, []);

  return (
    <View>
      <View style={{ top: 23 }}>
        <Text style={{ fontSize: 23, top: 15, alignSelf: "center" }}>
          Offers
        </Text>
      </View>

      <FlatList
        data={dataone}
        renderItem={({ item }) => {
          console.log("11122223333444445555", item);
          return (
            <View>
              <View
                style={{
                  top: 64,
                  height: 240,
                  width: Dimensions.get("window").width * 0.95,
                  alignSelf: "center",
                  borderRadius: 5,
                  backgroundColor: "#147fdc",
                }}
              >
                <Text
                  style={{ color: "white", left: 10, fontSize: 19, top: 5 }}
                >
                  {item.offer_name}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    width: 140,
                    left: 10,
                    fontSize: 19,
                    top: 35,
                  }}
                >
                  {item.description}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 140,
                    height: 140,
                    resizeMode: "stretch",
                    alignSelf: "flex-end",
                    bottom: 64,
                    borderRadius: 32,
                  }}
                />
              </View>

              <View
                style={{
                  top: 182,
                  marginBottom: 40,
                  position: "absolute",
                  backgroundColor: "white",
                  width: Dimensions.get("window").width * 0.95,
                  alignSelf: "center",
                  borderRadius: 5,
                  height: 60,
                }}
              >
                <Text style={{ fontSize: 16, left: 23 }}>{item.detail}</Text>
                <Text style={{ fontSize: 16, left: 23 }}>{item.end_date}</Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    borderWidth: 2.8,
                    borderColor: "#147fdc",
                    width: 100,
                    left: 260,
                    top: 14,
                    height: 32,
                    justifyContent: "center",
                    borderRadius: 32,
                  }}
                >
                  <Text
                    style={{
                      color: "#147fdc",
                      fontSize: 15,
                      alignSelf: "center",
                    }}
                  >
                    6A9RA6
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
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

export default Offers;
