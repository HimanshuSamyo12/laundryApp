import { React, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import TopTabNavigatorSecond from "../TopTabSecond";

const LaundryComponent = (props) => {
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const addition = () => {
    setCounter(counter + 1);
  };

  const subtraction = () => {
    setCounter(counter - 1);
  };

  const value = () => {
    setTotal((counter + 1) * props.totalrates);
  };

  const minusValue = () => {
    setTotal((counter - 1) * props.totalsecond);
  };

  const netTotal = total;

  const TopTab = () => {
    <TopTabNavigatorSecond items={counter} />;
  };

  return (
    <View
      style={{
        marginBottom: 32,
        elevation: 5,
        backgroundColor: "white",
        width: Dimensions.get("window").width * 0.95,
        left: 10,
        height: 90,
      }}
    >
      <View style={{}}>
        <Image
          source={props.img}
          style={{
            width: 70,
            height: 70,
            left: 5,
            resizeMode: "stretch",
            top: 10,
          }}
        />
        <View style={{ left: 100 }}>
          <Text
            style={{
              fontSize: 17,
              color: "#A0A0A0",
              bottom: 41,
              right: 12,
              height: 29,
              width: Dimensions.get("window").width * 0.29,
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              height: 30,
              width: Dimensions.get("window").width * 0.15,
              fontSize: 20,
              color: "#A0A0A0",
              left: 95,
              bottom: 66,
            }}
          >
            ${props.rate}
          </Text>
          <Text
            style={{
              height: 30,
              width: Dimensions.get("window").width * 0.16,
              fontSize: 20,
              color: "#A0A0A0",
              left: 95,
              bottom: 66,
            }}
          >
            {props.total}${total}
          </Text>
        </View>
        <View style={{ bottom: 32 }}>
          <TouchableOpacity
            onPress={() => {
              if (counter > 0) subtraction();
              if (total > 0) minusValue();
              TopTab();
            }}
            style={{
              bottom: 82,
              right: 80,
              width: Dimensions.get("window").width * 0.09,
              alignSelf: "flex-end",
            }}
          >
            <AntDesign
              name="minuscircle"
              size={32}
              style={{ color: "#147fdc", alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              alignSelf: "flex-end",
              bottom: 115,
              right: 55,
            }}
          >
            {counter}
          </Text>
          <TouchableOpacity
            onPress={() => {
              addition();
              value();
              TopTab();
            }}
            style={{
              bottom: 82,
              right: 80,
              width: Dimensions.get("window").width * 0.09,
              alignSelf: "flex-end",
              bottom: 145,
              right: 10,
            }}
          >
            <AntDesign
              name="pluscircle"
              size={32}
              style={{ color: "#147fdc", alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LaundryComponent;
