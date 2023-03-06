import React from "react";
import { View, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "react-native-vector-icons";

const TopServicesComponent = (props) => {
  return (
    <View>
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
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={require("../assets/Images/loundry5.png")}
            style={{ height: 120, width: 100, resizeMode: "center", top: 10 }}
          />
          <View style={{ left: 10 }}>
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
            {/* <Text style={{ alignSelf: "flex-end", right: 10, top: 10 }}>
              4.3
            </Text> */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                alignSelf: "center",
                bottom: 95,
                right: 10,
              }}
            >
              Rahat laundry shop
            </Text>
            <Entypo
              name="location-pin"
              size={32}
              style={{ left: 89, bottom: 82 }}
            />
            <Text
              style={{
                bottom: 120,

                width: Dimensions.get("window").width * 0.55,
                alignSelf: "center",
                left: 49,
                fontSize: 16,
              }}
            >
              new palacia ,indore,madhya pradesh,india
            </Text>
            <Text
              style={{
                color: "#147fdc",
                fontWeight: "bold",
                fontSize: 16,
                bottom: 116,
                right: 30,
                alignSelf: "center",
              }}
            >
              Laundry Shop
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopServicesComponent;
