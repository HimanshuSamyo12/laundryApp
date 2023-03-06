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
import { useNavigation } from "@react-navigation/native";
import * as API from "../Api/Constant";

const ForgotPassword = ({ navigation }) => {
  const [data, setData] = useState();

  const userData = async () => {
    try {
      let formData = new FormData();
      formData.append("email", "himanshu@samyotech.com");

      const response = await fetch(API.Forgotpass, {
        method: "POST",
        body: formData,
      });

      const res = await response.json();
      console.log("run", res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <View style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
      <Image
        source={require("../assets/Images/ForgotPassword.jpg")}
        style={{
          width: Dimensions.get("window").width * 1,
          height: Dimensions.get("window").height * 0.4,
          top: 32,
        }}
      />

      <Text style={{ fontSize: 21, alignSelf: "center", top: 32 }}>
        Forgot Password
      </Text>

      <Text style={{ fontSize: 17, alignSelf: "center", top: 32 }}>
        Enter The Email Address Associate With Your
      </Text>
      <Text style={{ fontSize: 17, alignSelf: "center", top: 30 }}>
        Account
      </Text>

      <InputField height={64} t={64} txt1={"Email"} placeholder={"Email"} />

      <View style={{ top: 32 }}>
        <Button1 value={"SEND"} />
      </View>
    </View>
  );
};

export default ForgotPassword;
