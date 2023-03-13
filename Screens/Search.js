import { React, useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo, EvilIcons, Ionicons } from "react-native-vector-icons";
import * as API from "../Api/Constant";
import TopServicesComponent from "../Components/TopServicesComponent";
import filter from "lodash.filter";

const SearchBar = () => {
  const [apiData, SetApiData] = useState();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  const searchAPI = async () => {
    try {
      const formdata = new FormData();
      formdata.append("shop_name", "laundry");

      const apiResponse = await fetch(API.SearchApi, {
        method: "POST",
        headers: {
          Accept: "application.json",
          Content_Type: "application.json",
        },
        body: formdata,
      });
      const apiresss = await apiResponse.json();
      const myApiRess = apiresss.data;
      setData(myApiRess);
      SetApiData(myApiRess);
      setFullData(myApiRess);
      // console.log("123456789asdfghjkl", myApiRess);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("12345 Check Search API", apiData);

  useEffect(() => {
    searchAPI();
  }, []);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    SetApiData(filteredData);
    setQuery(text);
  };

  const contains = ({ shop_name }, query) => {
    if (shop_name.includes(query)) {
      return true;
    }

    return false;
  };


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          top: 46,
          backgroundColor: "white",
          height: 50,
          width: Dimensions.get("window").width * 0.9,

          borderRadius: 10,
          marginBottom: 69,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: Dimensions.get("window").width * 0.84,
            height: Dimensions.get("window").height * 0.069,
          }}
        >
          <EvilIcons
            name="search"
            size={40}
            style={{ top: 10, color: "#909090" }}
          />
          <TextInput
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={(queryText) => handleSearch(queryText)}
            placeholder="Search"
            style={{
              fontSize: 16,
              bottom: 20,
              paddingLeft: 40,
              height: Dimensions.get("window").height * 0.032,
            }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={apiData}
        // ListHeaderComponent={renderHeader}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                elevation: 4,
                width: Dimensions.get("window").width * 0.91,
                height: Dimensions.get("window").height * 0.2,
                borderRadius: 10,
                alignSelf: "center",
                marginBottom: 15,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: 140,
                    width: 130,
                    resizeMode: "stretch",
                    margin: 5,
                    top: 10,
                  }}
                />
                <View style={{}}>
                  {/* <Image
          source={require("../assets/Images/star.png")}
          style={{
            height: 15,
            width: 15,
            position: "absolute",
            alignSelf: "flex-end",
            right: 35,
            top: 12,
          }}
        /> */}
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      right: 10,
                      bottom: 140,

                      height: Dimensions.get("window").height * 0.023,
                      width: Dimensions.get("window").width * 0.06,
                    }}
                  >
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      alignSelf: "center",
                      bottom: 140,
                      left: 64,
                      height: Dimensions.get("window").height * 0.05,
                      width: Dimensions.get("window").width * 0.5,
                    }}
                  >
                    {item.shop_name}
                  </Text>
                  <Entypo
                    name="location-pin"
                    size={32}
                    style={{ alignSelf: "center", bottom: 150, right: 29 }}
                  />
                  <Text
                    style={{
                      bottom: 182,

                      width: Dimensions.get("window").width * 0.45,
                      height: Dimensions.get("window").height * 0.05,
                      alignSelf: "center",
                      left: 74,
                      fontSize: 16,
                    }}
                  >
                    {item.address}
                  </Text>
                  <Text
                    style={{
                      color: "#147fdc",
                      fontWeight: "bold",
                      fontSize: 16,
                      bottom: 180,
                      left: 15,
                      alignSelf: "center",
                    }}
                  >
                    Laundry Shop
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchBar;
