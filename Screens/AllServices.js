import { React, useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as API from "../Api/Constant";

const AllServices = () => {
  const [datas, setDatas] = useState();

  const navigation = useNavigation();

  const myUserData = async () => {
    try {
      const res = await fetch(API.Services, {
        method: "GET",
        headers: {
          Accept: "application.json",
          content_type: "application/json",
        },
      });
      const response = await res.json();
      const resUpdated = response.data;
      setDatas(resUpdated);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myUserData();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <View>
        <View style={styles.PageName}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={32} style={styles.ArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.PageTxt}>All Services</Text>
        </View>

        <FlatList
          data={datas}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.box1}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TopServices")}
                  >
                    <Image source={{ uri: item.image }} style={styles.img1} />
                    <Text style={styles.txt1}>{item.service_name}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: "100%",
    backgroundColor: "white",
  },
  PageName: {
    height: Dimensions.get("window").height * 0.12,
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "white",
  },
  ArrowIcon: {
    top: 32,
    left: 10,
    width: Dimensions.get("window").width * 0.1,
  },
  PageTxt: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  box1: {
    marginBottom: 15,
    top: 23,
    backgroundColor: "white",
    elevation: 5,
    width: Dimensions.get("window").width * 0.94,
    alignSelf: "center",
    height: Dimensions.get("window").height * 0.09,
    borderRadius: 10,
  },
  img1: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    top: 10,
    left: 5,
    borderRadius: 10,
  },
  txt1: {
    fontWeight: "bold",
    left: 70,
    bottom: 35,
    fontSize: 23,
  },
  lastBox: {
    marginBottom: 32,
    top: 23,
    backgroundColor: "white",
    elevation: 5,
    width: Dimensions.get("window").width * 0.94,
    alignSelf: "center",
    height: Dimensions.get("window").height * 0.09,
    borderRadius: 10,
  },
});

export default AllServices;
