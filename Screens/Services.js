import { React, useEffect, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button1 from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import * as API from "../Api/Constant";

const Services = () => {
  const navigation = useNavigation();

  const [dataone, setDataone] = useState();

  const Api = async () => {
    try {
      const formData = new FormData();
      formData.append("shop_id", "zAd1d3");

      const res = await fetch(API.ShopServices, {
        method: "POST",
        headers: {
          Accept: "application.json",
        },
        body: formData,
      });
      const response = await res.json();
      const resUpdated = await response.data;
      console.log("1010101010101010101010", resUpdated);
      setDataone(resUpdated);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  // const check = Api()
  // console.log("check", check)

  return (
    <View>
      <View style={styles.mainContainer}>
        <FlatList
          data={dataone}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  elevation: 5,
                  width: Dimensions.get("window").width * 0.94,
                  alignSelf: "center",
                  borderRadius: 10,
                  height: Dimensions.get("window").height * 0.23,
                  top: 15,
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    color: "#A0A0A0",
                    left: 10,
                    top: 15,
                  }}
                >
                  {item.service_name}
                </Text>
                <Text
                  style={{
                    fontSize: 19,
                    color: "#A0A0A0",
                    left: 10,
                    top: 15,
                    width: Dimensions.get("window").width * 0.6,
                    marginTop: 9,

                    height: Dimensions.get("window").height * 0.06,
                  }}
                >
                  {item.description}
                </Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    borderWidth: 1.5,
                    borderColor: "#147fdc",
                    width: 120,
                    left: 10,
                    top: 100,
                    height: 50,
                    justifyContent: "center",
                    borderRadius: 5,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#147fdc",
                      fontSize: 15,
                      alignSelf: "center",
                    }}
                  >
                    24 HOURS
                  </Text>
                </TouchableOpacity>
                <Image
                  source={require("../assets/Images/services.jpeg")}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 100,
                    alignSelf: "flex-end",
                    bottom: 82,
                  }}
                />
              </View>
            );
          }}
        />

        <View style={styles.btn}>
          <Button1
            value={"SCHEDULE A PICKUP"}
            onPress={() => navigation.navigate("TopTabNavigatorSecond")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "white",
  },
  boxOne: {
    backgroundColor: "white",
    elevation: 5,
    width: Dimensions.get("window").width * 0.94,
    alignSelf: "center",
    borderRadius: 10,
    height: Dimensions.get("window").height * 0.23,
    top: 15,
    marginBottom: 15,
  },
  img: {
    height: 100,
    width: 100,
    alignSelf: "flex-end",
    right: 10,
    top: 50,
  },
  txtOne: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#A0A0A0",
    left: 10,
    bottom: 50,
  },
  txt5: {
    fontSize: 19,
    color: "#A0A0A0",
    left: 10,
    bottom: 50,
  },
  btn: {
    marginBottom: 30,
    bottom: 90,
  },
});

export default Services;
