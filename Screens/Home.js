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
import {
  EvilIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "react-native-vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as API from "../Api/Constant";

const Home = () => {
  const [homedata, setHomedata] = useState();
  const [servicedata, setServicedata] = useState();
  const [ad, setAd] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const listSecond = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("latitude", "22.7375");
      formData.append("longitude", "75.8759");
      formData.append("user_id", "vw1628");

      const res = await fetch(API.ListSecond, {
        method: "POST",
        headers: {
          Accept: "application.json",
          content_type: "application/json",
        },
        body: formData,
      });
      const response = await res.json();
      const ress = response.data.laundry;
      const serviceRess = response.data.service;
      const adRess = response.data.advertis;
      // console.log("0987654321123456789", serviceRess);
      setHomedata(ress);
      setServicedata(serviceRess);
      setAd(adRess);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listSecond();

  }, []);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <View style={{ backgroundColor: "#147fdc", height: 123 }}>
          <View
            style={{
              flexDirection: "row",
              top: 46,
              backgroundColor: "white",
              height: 50,
              width: Dimensions.get("window").width * 0.85,
              left: 10,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchBar")}
              style={{
                width: Dimensions.get("window").width * 0.84,
                height: Dimensions.get("window").height * 0.069,
                justifyContent:'center'
              }}
            >
              <EvilIcons
                name="search"
                size={40}
                style={{ top: 10, color: "#909090" }}
              />
              <Text style={{fontSize:15,alignSelf:'center',bottom:18}}>Search Laundry Name And Place</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={{
              width: Dimensions.get("window").width * 0.1,
              height: 50,
              alignSelf: "flex-end",
              right: 5,
            }}
          >
            <Ionicons
              name="notifications"
              size={40}
              style={{ alignSelf: "flex-end", color: "white" }}
            />
          </TouchableOpacity>
        </View>

        {/* <Text style={{ fontWeight: 'bold', fontSize: 18, left: 15, top: 10 }}>name:{route.params.name}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, left: 15, top: 10, marginBottom: 20, }}>email:{route.params.email}</Text> */}

        <FlatList
          style={{ top: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ad}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  elevation: 5,
                  backgroundColor: "white",
                  marginBottom: 10,
                  height: 230,
                  width: 400,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    paddingLeft: 5,
                    width: 215,
                    fontSize: 18,
                    fontWeight: "bold",
                    left: 15,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    paddingLeft: 5,
                    top: 23,
                    width: 215,
                    left: 15,
                  }}
                >
                  {item.short_description}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    top: 32,
                    right: 23,
                    width: 215,
                    left: 5,
                    fontSize: 15,
                    fontWeight: "bold",
                    left: 23,
                  }}
                >
                  {item.long_description}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    alignSelf: "flex-end",
                    bottom: 73,
                    width: 120,
                    height: 120,
                    resizeMode: "cover",
                    right: 23,
                  }}
                />
              </View>
            );
          }}
        />

        <View style={{ top: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, left: 5 }}>
            Top Services
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("AllServices")}>
            <Text
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                right: 5,
                color: "#147fdc",
                fontWeight: "bold",
                fontSize: 18,
                bottom: 1,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>

          <FlatList
            style={{ top: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={servicedata}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    elevation: 5,
                    backgroundColor: "white",
                    marginBottom: 10,
                    margin: 5,
                    height: 150,
                    borderRadius: 10,
                    left: 5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TopServices")}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: 120,
                        height: 120,
                        resizeMode: "stretch",
                        borderRadius: 5,
                      }}
                    />
                    <Text style={{ fontSize: 13, width: 120, left: 5 }}>
                      {item.service_name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ top: 32 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, left: 5 }}>
            Popular Laundries
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("TopServices")}>
            <Text
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                right: 5,
                color: "#147fdc",
                fontWeight: "bold",
                fontSize: 18,
                bottom: 1,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>

          <FlatList
            style={{ top: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={homedata}
            renderItem={({ item, index }) => {
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
                    onPress={() => navigation.navigate("TopTabNavigator")}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: 120,
                        resizeMode: "stretch",
                        borderRadius: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 5,

                        width: 182,
                        height: 20,
                      }}
                    >
                      {item.shop_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12.5,
                        paddingLeft: 5,

                        width: Dimensions.get("window").width * 0.59,
                        height: Dimensions.get("window").height * 0.02,
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
                        right: 10,

                        width: 30,
                        height: 20,
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
                        right: 40,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ top: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, left: 5 }}>
            Special Packages & Offer
          </Text>
        </View>

        <View
          style={{
            top: 64,
            height: 164,
            width: Dimensions.get("window").width * 0.95,
            alignSelf: "center",
            borderRadius: 5,
            backgroundColor: "#147fdc",
          }}
        >
          <Text style={{ color: "white", left: 10, fontSize: 19, top: 5 }}>
            Special offer for product{" "}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              width: 140,
              left: 10,
              fontSize: 19,
              top: 5,
            }}
          >
            Get 20 % off on Laundry
          </Text>
          <Image
            source={require("../assets/Images/bluelaundry.jpeg")}
            style={{
              width: 140,
              height: 140,
              resizeMode: "stretch",
              alignSelf: "flex-end",
              bottom: 64,
              borderRadius: 32,
              right: 5,
            }}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              borderWidth: 2.8,
              borderColor: "white",
              width: 100,
              left: 10,
              top: 100,
              height: 32,
              justifyContent: "center",
              borderRadius: 32,
            }}
          >
            <Text style={{ color: "white", fontSize: 15, alignSelf: "center" }}>
              6A9RA6
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: 90, marginBottom: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, left: 5 }}>
            Laundry Near by
          </Text>
          <View
            style={{
              top: 10,
              backgroundColor: "white",
              elevation: 5,
              height: 130,
              width: Dimensions.get("window").width * 0.91,
              alignSelf: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 18, left: 10, top: 10 }}
            >
              Rahat laundry shop
            </Text>
            <Text
              style={{
                left: 10,
                width: Dimensions.get("window").width * 0.45,
                fontSize: 15,
                top: 10,
              }}
            >
              near by rajkumar bridge good
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TopTabFourth")}
              style={{
                borderWidth: 1,
                height: 40,
                width: Dimensions.get("window").width * 0.32,
                borderRadius: 32,
                backgroundColor: "#08584c",
                alignSelf: "flex-end",
                right: 15,
                bottom: 15,
              }}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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

export default Home;
