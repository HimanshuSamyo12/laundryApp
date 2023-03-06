import React from "react";
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
import InputField from "../Components/InputComponent";
import Button1 from "../Components/Button";
import {
  EvilIcons,
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const SchedulePickup = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: Dimensions.get("window").height * 0.12,
          justifyContent: "center",
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("PreviewOrder")}>
          <Ionicons
            name="arrow-back"
            size={32}
            style={{
              top: 32,
              left: 10,
              width: Dimensions.get("window").width * 0.1,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 23, fontWeight: "bold", alignSelf: "center" }}>
          Schedule Pickup
        </Text>
      </View>

      <View
        style={{
          borderWidth: 0.5,
          top: 55,
          width: Dimensions.get("window").width * 0.9,
          left: 20,
        }}
      ></View>

      <View
        style={{
          top: 30,
          left: 10,
          height: Dimensions.get("window").height * 0.09,
        }}
      >
        <View
          style={{
            backgroundColor: "#147fdc",
            width: Dimensions.get("window").width * 0.12,
            height: Dimensions.get("window").height * 0.06,
            left: 10,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Entypo
            name="location-pin"
            size={32}
            style={{ alignSelf: "center", color: "white" }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#c3c3c3",
            width: Dimensions.get("window").width * 0.12,
            height: Dimensions.get("window").height * 0.06,
            borderRadius: 50,
            bottom: 48,
            justifyContent: "center",
            left: 110,
          }}
        >
          <Ionicons
            name="calendar-sharp"
            size={30}
            style={{ alignSelf: "center", color: "white" }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#c3c3c3",
            width: Dimensions.get("window").width * 0.12,
            height: Dimensions.get("window").height * 0.06,
            left: 215,
            borderRadius: 50,
            bottom: 95,
            justifyContent: "center",
          }}
        >
          <Entypo
            name="wallet"
            size={30}
            style={{ alignSelf: "center", color: "white" }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#c3c3c3",
            width: Dimensions.get("window").width * 0.12,
            height: Dimensions.get("window").height * 0.06,
            left: 320,
            borderRadius: 50,
            bottom: 142,
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="wallet"
            size={27}
            style={{ alignSelf: "center", color: "white" }}
          />
        </View>
      </View>

      <Text style={{ fontSize: 21, top: 32, left: 15 }}>
        Where should we deliver?
      </Text>

      <View style={{ top: 23 }}>
        <View
          style={{
            top: 15,
            backgroundColor: "white",
            width: Dimensions.get("window").width * 0.95,
            alignSelf: "center",
            height: Dimensions.get("window").height * 0.09,
            justifyContent: "center",
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
            <TouchableOpacity>
          <Entypo name="circle" size={23} style={{ top: 10, left: 10 }} />
          <Text style={{ left: 40, bottom: 15, fontSize: 18 }}>Home</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            top: 15,
            backgroundColor: "white",
            width: Dimensions.get("window").width * 0.95,
            alignSelf: "center",
            height: Dimensions.get("window").height * 0.09,
            justifyContent: "center",
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
           <TouchableOpacity><Entypo name="circle" size={23} style={{ top: 10, left: 10 }} />
          <Text style={{ left: 40, bottom: 15, fontSize: 18 }}>Work</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            top: 15,
            backgroundColor: "white",
            width: Dimensions.get("window").width * 0.95,
            alignSelf: "center",
            height: Dimensions.get("window").height * 0.09,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <Entypo name="circle" size={23} style={{ top: 10, left: 10 }} />
          <Text style={{ left: 40, bottom: 15, fontSize: 18 }}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ top: 230 }}>
        <Button1
          value={"Select Address & Continue"}
          onPress={() => navigation.navigate("DateAndTime")}
        />
      </View>
    </View>
  );
};
export default SchedulePickup;
