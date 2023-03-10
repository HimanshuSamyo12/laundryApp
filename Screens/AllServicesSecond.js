import { React, useState, useEffect } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LaundryComponent from "../Components/LaundryComponent";
import * as API from "../Api/Constant";

const AllServicesSecond = () => {
  const [loadData, setLoadData] = useState();

  const navigation = useNavigation();

  const ServiceAPI = async () => {
    try {
      const formdata = new FormData();
      formdata.append("shop_id", "zAd1d3");

      const response = await fetch(API.laundryItemsApi, {
        method: "POST",
        headers: {
          Accept: "application.json",
          Content_Type: "application.json",
        },
        body: formdata,
      });
      const ress = await response.json();
      const ressUpdated = ress.data.item_list[3].services;
      setLoadData(ressUpdated);
      console.log("Check data flow on ALLSERVICE 123456789", ressUpdated);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ServiceAPI();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <FlatList
        style={{ top: 10 }}
        data={loadData}
        renderItem={({ item }) => {
          console.log("check my data aLlSERVICE aaaaaaaaaaaaaaaaaa", item);
          return (
            <LaundryComponent
              name={item.item_name}
              rate={item.price}
              img={{ uri: item.image }}
              totalrates={item.price}
              totalsecond={item.price}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: "100%",
    backgroundColor: "white",
  },
  box1: {
    top: 32,
  },
});

export default AllServicesSecond;
