import { React, useEffect, useState } from "react";
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

const Laundry = () => {
  const navigation = useNavigation();

  const [itemData, setItemData] = useState();

  const ShopItemApi = async () => {
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
      const updatedRess = await ress.data.item_list[0];
      const newRess = updatedRess.services;
      console.log("Chek Shop Items 123456789", newRess);
      setItemData(newRess);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("check useState 123456789", itemData);

  useEffect(() => {
    ShopItemApi();
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <FlatList
        data={itemData}
        renderItem={({ item }) => {
          console.log("flatListdata", item);
          return (
            <LaundryComponent
              name={item.item_name}
              rate={item.price}
              img={{ uri: item.image }}
              totalrates={item.price}
              totalsecond={5}
            />
          );
        }}
      />
    </View>
  );
};
export default Laundry;
