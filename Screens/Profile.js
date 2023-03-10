import { React, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  EvilIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as GlobalVariables from "../Storage/globalData";
import Modal from "react-native-modal";

const Profile = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Constants = GlobalVariables.useValues();

  const logress =
    (Constants, { name: Constants.name, address: Constants.address });

  console.log("9999999999999999999999", logress.name);

  const name = logress.name;

  const list = [
    { icon: <AntDesign name="camerao" size={32} />, employee: "Camera" },
    { icon: <Entypo name="images" size={30} />, employee: "Gallery" },
    { icon: <Entypo name="circle-with-cross" size={32} />, employee: "cancle" },
  ];

  const Logout = () =>
    Alert.alert("Logout", "Logout ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);

  const cancleaccount = () =>
    Alert.alert("Cancle Account", "Coming Soon", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/Images/Blazer5.jpeg")}
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
          />
          <Image
            source={require("../assets/Images/profilemain.jpeg")}
            style={{
              width: 120,
              height: 120,
              alignSelf: "center",
              resizeMode: "stretch",
              bottom: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              height: 40,
              justifyContent: "center",
              width: 40,
              backgroundColor: "#909090",
              borderRadius: 100,
              alignSelf: "center",
              left: 60,
              bottom: 100,
            }}
          >
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesome
                name="camera"
                size={20}
                style={{ alignSelf: "center", color: "white" }}
              />
            </TouchableOpacity>
          </View>

          <Modal isVisible={isModalVisible}>
            <View
              style={{
                backgroundColor: "white",
                height: 230,
                borderRadius: 15,
                top: 290,
                alignSelf: "center",
                width: "110%",
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  right: 10,
                  top: 15,
                  height: 32,
                  width: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={toggleModal}
              >
                <Entypo
                  name="circle-with-cross"
                  size={23}
                  style={{ color: "#147fdc" }}
                />
              </TouchableOpacity>

              <Text style={{ left: 15, bottom: 10 }}>Please select image</Text>
              <FlatList
                data={list}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: 15,
                        left: 10,
                        top: 10,
                      }}
                    >
                      <View
                        style={{ backgroundColor: "#147fdc", borderRadius: 23 }}
                      >
                        <Text style={{ padding: 5, color: "white" }}>
                          {item.icon}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{ width: 190 }}
                        onPress={toggleModal}
                      >
                        <Text style={{ top: 10, left: 15, fontSize: 16 }}>
                          {item.employee}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </Modal>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
              bottom: 90,
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              height: 21,
              width: "95%",
              alignSelf: "center",
              fontSize: 14,
              bottom: 90,
            }}
          >
            {logress.address}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#dedede",
            height: 55,
            justifyContent: "center",
            bottom: 81,
          }}
        >
          <Text style={{ left: 20, fontSize: 20, color: "#A0A0A0" }}>
            Account
          </Text>
        </View>

        <View style={{ bottom: 23 }}>
          <View style={{ bottom: 40 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UpdateProfile")}
            >
              <EvilIcons
                name="user"
                size={40}
                style={{ color: "#A0A0A0", left: 10 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 40 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <SimpleLineIcons
                name="lock"
                size={26}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Change Password
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 45 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FirstScreen")}
            >
              <Entypo
                name="language"
                size={26}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Choose Language
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 49 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Booking")}>
              <MaterialCommunityIcons
                name="notebook-edit-outline"
                size={26}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                My Order
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 55 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Ionicons
                name="notifications-outline"
                size={30}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Notification
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 60 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <MaterialIcons
                name="chat"
                size={30}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Chat
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 64 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Support")}>
              <MaterialIcons
                name="support-agent"
                size={30}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Support
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 71 }}>
            <TouchableOpacity onPress={cancleaccount}>
              <AntDesign
                name="delete"
                size={30}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Cancle Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ bottom: 73 }}>
            <TouchableOpacity onPress={Logout}>
              <MaterialCommunityIcons
                name="logout"
                size={30}
                style={{ color: "#A0A0A0", left: 15 }}
              />
              <Text
                style={{ left: 60, bottom: 30, fontSize: 20, color: "#A0A0A0" }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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

export default Profile;
