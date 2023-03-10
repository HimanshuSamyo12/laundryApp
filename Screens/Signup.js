import { React, useState, useEffect } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import InputField from "../Components/InputComponent";
import Button1 from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import * as API from "../Api/Constant";

const SignupScreen = () => {
  const [dataone, setDataone] = useState();

  const handleSignupUser = async (values) => {
    try {
      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("name", values.name);
      formData.append("country_code", "91");
      formData.append("mobile", values.mobile);
      formData.append("password", values.password);
      formData.append("device_type", "ios");
      formData.append("device_token", "ljljl");

      const response = await fetch(API.SIGNUP, {
        method: "POST",

        body: formData,
      });
      const myData = await response.json();
      console.log("sign up check 123456789", myData);
      setDataone(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSignupUser();
  }, []);

  const navigation = useNavigation();

  const mob =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registerValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain Latin letters."
      )
      .required("Please enter your full name."),

    mobile: yup
      .string()
      .matches(mob, "Phone number is not valid")
      .required("Please enter your Phone no."),

    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter your email id."),

    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters.`)
      .required("Please enter your password"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={{
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        name: "",
      }}
      onSubmit={handleSignupUser}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        onSubmit,
        errors,
        isValid,
      }) => (
        <View style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
          <ScrollView>
            <Image
              source={require("../assets/Images/Signupimg.jpg")}
              style={{
                width: Dimensions.get("window").width * 1,
                height: Dimensions.get("window").height * 0.3,
                top: 32,
              }}
            />

            <Text style={{ fontSize: 20, alignSelf: "center", top: 32 }}>
              Sign Up
            </Text>

            <InputField
              height={64}
              t={64}
              txt1={"Full Name"}
              placeholder={"Full Name"}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={{ left: 15, color: "#147fdc", top: 45 }}>
                {errors.name}
              </Text>
            )}

            <InputField
              height={64}
              t={64}
              txt1={"Phone Number"}
              placeholder={"Phone Number"}
              onChangeText={handleChange("mobile")}
              onBlur={handleBlur("mobile")}
              value={values.mobile}
            />
            {touched.mobile && errors.mobile && (
              <Text style={{ left: 15, color: "#147fdc", top: 45 }}>
                {errors.mobile}
              </Text>
            )}

            <InputField
              height={64}
              t={64}
              txt1={"Email"}
              placeholder={"Email"}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ left: 15, color: "#147fdc", top: 45 }}>
                {errors.email}
              </Text>
            )}

            <InputField
              height={64}
              t={64}
              txt1={"Password"}
              placeholder={"Password"}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={{ left: 15, color: "#147fdc", top: 45 }}>
                {errors.password}
              </Text>
            )}

            <InputField
              height={73}
              t={64}
              txt1={"Confirm Password"}
              placeholder={"Confirm Password"}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={{ left: 15, color: "#147fdc", top: 45 }}>
                {errors.confirmPassword}
              </Text>
            )}

            <View style={{ bottom: 10 }}>
              <Button1
                value={"SIGN UP"}
                name={"chevron-right"}
                onPress={handleSubmit}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                top: 120,
                alignSelf: "center",
                marginBottom: 150,
              }}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#147fdc" }}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default SignupScreen;
