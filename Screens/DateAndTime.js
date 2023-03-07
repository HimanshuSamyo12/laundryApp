import { React, useState } from "react";
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
  FontAwesome5,
} from "react-native-vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

const DateAndTime = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

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

      <Text style={{ fontSize: 21, top: 23, left: 20 }}>
        Pickup Date & Time
      </Text>

      <View
        style={{
          top: 32,
          backgroundColor: "white",
          width: "91%",
          alignSelf: "center",
          height: 130,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", left: 10, marginBottom: 13 }}>
          <TextInput
            placeholder="Enter Pickup Date"
            style={{
              padding: 1,
              width: "90%",
              paddingLeft: 10,
              borderRadius: 5,
              height: 40,
              backgroundColor: "#EEEEFF",
              fontSize: 16,
            }}
          />

          <TouchableOpacity
            style={{
              right: 40,
              width: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={showDatePicker}
          >
            <FontAwesome5
              name="calendar-alt"
              size={24}
              style={{ color: "black" }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", left: 10 }}>
          <TextInput
            placeholder="Enter Pickup Time"
            style={{
              padding: 1,
              width: "90%",
              paddingLeft: 10,
              borderRadius: 5,
              height: 40,
              backgroundColor: "#EEEEFF",
              fontSize: 16,
            }}
          />

          <TouchableOpacity
            style={{
              right: 40,
              width: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={showDatePicker}
          >
            <FontAwesome5
              name="calendar-alt"
              size={24}
              style={{ color: "black" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ fontSize: 21, top: 40, left: 20 }}>
        Delivery Date & Time
      </Text>

      <View
        style={{
          top: 55,
          backgroundColor: "white",
          width: "91%",
          alignSelf: "center",
          height: 130,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", left: 10, marginBottom: 13 }}>
          <TextInput
            placeholder="Enter Delivery Date"
            style={{
              padding: 1,
              width: "90%",
              paddingLeft: 10,
              borderRadius: 5,
              height: 40,
              backgroundColor: "#EEEEFF",
              fontSize: 16,
            }}
          />

          <TouchableOpacity
            style={{
              right: 40,
              width: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={showDatePicker}
          >
            <FontAwesome5
              name="calendar-alt"
              size={24}
              style={{ color: "black" }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", left: 10 }}>
          <TextInput
            placeholder="Enter Delivery Time"
            style={{
              padding: 1,
              width: "90%",
              paddingLeft: 10,
              borderRadius: 5,
              height: 40,
              backgroundColor: "#EEEEFF",
              fontSize: 16,
            }}
          />

          <TouchableOpacity
            style={{
              right: 40,
              width: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={showDatePicker}
          >
            <FontAwesome5
              name="calendar-alt"
              size={24}
              style={{ color: "black" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={{ top: 190 }}>
        <Button1
          value={"Add Date & Time"}
          onPress={() => navigation.navigate("ConfirmOrder")}
        />
      </View>
    </View>
  );
};
export default DateAndTime;
