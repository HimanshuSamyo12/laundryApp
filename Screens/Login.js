import { React, useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import InputField from "../Components/InputComponent";
import Button1 from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import loginApi from "../Api/Constant";
import * as API from "../Api/Constant";
import * as GlobalVariables from "../Storage/globalData";
import { Value } from "react-native-reanimated";

const Login = () => {
  const [data, setData] = useState();
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const navigation = useNavigation();

  const loginData = async (values) => {
    try {
      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("device_type", "ios");
      formData.append("device_token", "dfsdfsdf56456sf");
      formData.append("user_id", "PQ315e");

      const response = await fetch(API.LOGIN, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
          Authorization: "device_token",
        },
        body: formData,
      });

      const myData = await response.json();
      myData;
      console.log("ios Test", myData);
      console.log("ios Test 121212121212121212121212", myData.data.user_id);
      const logRess =
        (Constants,
        {
          mobile:Constants.mobile,
          address:Constants.address,
          email: Constants.email,
          // password: Constants.password,
          user_id: Constants.user_id,
          device_type: Constants.device_type,
          name: Constants.name,
          // device_token: Constants.device_token,
        });

        console.log("ios Test 2323232323232323232323232323232323", logRess);
      if (logRess.user_id === myData.data.user_id) {
        console.log("ios testing check mobile", myData.data.user_id);
        console.log("ios testing check local storage", logRess.user_id);
        navigation.navigate("BottomTab");
      } else {
        console.log("ios testing check mobile", myData.data.user_id);
        console.log("ios testing check local storage", logRess.user_id);
        Alert.alert("ERROR");
      }

      const updatedmyData = myData.data;
      // const devty = updatedmyData.device_type;
      const email1 = updatedmyData.email;
      const mob=updatedmyData.mobile;
      const address=updatedmyData.address;
      // const password1 = updatedmyData.password;
      const name = updatedmyData.name;
      const uid = updatedmyData.user_id;
      const div = updatedmyData.device_token;

      // setGlobalVariableValue({
      //   key: "device_type",
      //   value: devty,
      // });

      // setGlobalVariableValue({
      //   key: "password",
      //   value: password1,
      // });

      setGlobalVariableValue({
        key: "name",
        value: name,
      });

      setGlobalVariableValue({
        key: "email",
        value: email1,
      });

      setGlobalVariableValue({
        key: "mobile",
        value: mob,
      });

      setGlobalVariableValue({
        key: "address",
        value: address,
      });
      setGlobalVariableValue({
        key: "user_id",
        value: uid,
      });
      // setGlobalVariableValue({
      //   key: "device_token",
      //   value: div,
      // });

      // console.log("logress", logRess);
      // // const loginResponseJson = logRess;
      // // const deviceToken = loginResponseJson.device_token;
      // // const userId = loginResponseJson.user_id;
      // // const message = loginResponseJson.message;

      // // console.log("1234567890", deviceToken);

      // setGlobalVariableValue({
      //   key: "ERROR_MESSAGE",
      //   value: message,
      // });

      // console.log("chek login data", data.email);
      // console.log("check", myData);
    } catch (error) {
      console.log(error);
    }
  };

  const logRes =
    // const responseData = () => {
    //   const ApiData = data;
    //   const email = ApiData.email;
    //   const password = ApiData.password;
    // };

    useEffect(() => {
      loginData();
    }, []);

  const BottomTab = () => {
    navigation.navigate("BottomTab");
  };

  const loginvalidation = yup.object().shape({
    email: yup.string().required("Please enter email id."),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} charcahet`)
      .required("Please enter password."),
  });

  const nav = () => {
    getuserData();
    navigation.navigate("BottomTab");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnChange={true}
      onSubmit={loginData}
      validationSchema={loginvalidation}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView>
          <Image
            source={require("../assets/Images/Login.jpg")}
            style={{
              width: Dimensions.get("window").width * 1,
              height: Dimensions.get("window").height * 0.4,
              top: 32,
            }}
          />

          <Text style={{ fontSize: 23, alignSelf: "center", top: 32 }}>
            Welcome Back
          </Text>

          <InputField
            height={50}
            t={95}
            txt1={"Email"}
            placeholder={"Email"}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text
              style={{
                top: Dimensions.get("window").height * 0.1,
                left: 15,
                color: "#147fdc",
              }}
            >
              {errors.email}
            </Text>
          )}

          <InputField
            height={64}
            t={95}
            txt1={"Password"}
            placeholder={"Password"}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text
              style={{
                top: Dimensions.get("window").height * 0.1,
                left: 15,
                color: "#147fdc",
              }}
            >
              {errors.password}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{
              top: 120,
              right: 23,
              width: Dimensions.get("window").width * 0.32,
              alignSelf: "flex-end",
            }}
          >
            <Text
              style={{
                color: "#147fdc",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View style={{ top: 64,marginBottom:32 }}>
            <Button1
              onPress={handleSubmit}
              value={"LOGIN"}
              name={"chevron-right"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              top: 210,
              alignSelf: "center",
              marginBottom: 230,
            }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignupScreen")}
            >
              <Text style={{ color: "#147fdc" }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Login;

// const setGlobalVariableValue = GlobalVariables.useSetValue();

// // const logged = () => {
// //     const result = getuserData();

// //     const email = result.email
// //     setGlobalVariableValue({
// //         key: 'email',
// //         value: email,
// //     });
// //     const Constants = GlobalVariables.useValues();
// //     console.log("EMAIL", Constants.email)
// // }
