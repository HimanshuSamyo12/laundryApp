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
  MaterialIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConfirmOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
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
            backgroundColor: "#147fdc",
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
            backgroundColor: "#147fdc",
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

      <View
        style={{
          width: Dimensions.get("window").width * 0.95,
          borderRadius: 10,
          alignSelf: "center",
          elevation: 5,
          backgroundColor: "white",
          top: 23,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignSelf: "center",
            marginBottom: 15,
          }}
        >
          <Image
            source={require("../assets/Images/loundry5.png")}
            style={{ height: 120, width: 100, resizeMode: "center", top: 10 }}
          />
          <View style={{ left: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#A0A0A0",
                top: 32,
              }}
            >
              Rahat laundry shop
            </Text>

            <Text
              style={{
                width: Dimensions.get("window").width * 0.64,
                color: "#A0A0A0",
                fontSize: 16,
                top: 32,
              }}
            >
              new palacia ,indore,madhya pradesh,india
            </Text>
          </View>
        </View>
      </View>

      <Text style={{ fontSize: 21, top: 32, left: 15 }}>Payment method</Text>

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
          top: 40,
          elevation: 5,
        }}
      >
        <TouchableOpacity>
        <Entypo name="circle" size={23} style={{ top: 10, left: 10 }} />
        <Text style={{ left: 40, bottom: 15, fontSize: 18 }}>COD</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: Dimensions.get("window").height * 0.23,
          backgroundColor: "white",
          top: 94,
        }}
      >
        <MaterialIcons
          name="local-offer"
          size={32}
          style={{ color: "#147fdc", top: 10, left: 10 }}
        />
        <Text style={{ fontSize: 20, color: "#147fdc", left: 50, bottom: 23 }}>
          Have A PromoCode?
        </Text>
        <View
          style={{
            borderBottomWidth: 0.5,
            bottom: 10,
            borderBottomColor: "#A0A0A0",
          }}
        ></View>
        <Text style={{ fontSize: 16, color: "#A0A0A0", left: 10 }}>
          Sub Total
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#A0A0A0",
            alignSelf: "flex-end",
            bottom: 23,
            right: 10,
          }}
        >
          $ 14000.0
        </Text>
        <Text style={{ fontSize: 16, color: "#A0A0A0", bottom: 23, left: 10 }}>
          Tax
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#A0A0A0",
            alignSelf: "flex-end",
            bottom: 46,
            right: 10,
          }}
        >
          0
        </Text>
        <Text style={{ fontSize: 16, color: "#A0A0A0", bottom: 46, left: 10 }}>
          Discount
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#A0A0A0",
            alignSelf: "flex-end",
            bottom: 69,
            right: 10,
          }}
        >
          0
        </Text>
        <View
          style={{
            borderBottomWidth: 0.5,
            bottom: 60,
            borderBottomColor: "#A0A0A0",
          }}
        ></View>
        <Text style={{ fontSize: 16, color: "#147fdc", bottom: 50, left: 10 }}>
          Payable Amount
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#A0A0A0",
            alignSelf: "flex-end",
            bottom: 72,
            right: 10,
          }}
        >
          $ 14000.0
        </Text>
      </View>

      <View style={{ top: 10 }}>
        <Button1
          value={"Confirm Order"}
          onPress={() => navigation.navigate("Greetings")}
        />
      </View>
    </View>
  );
};
export default ConfirmOrder;
