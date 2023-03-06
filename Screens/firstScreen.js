import React from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ top: 113 }}>
        <Image
          source={require("../assets/Images/Logofirst.jpg")}
          style={{ width: "100%", height: 200, top: 100 }}
        />
        <Text
          style={{
            fontSize: 30,
            color: "#147fdc",
            top: 100,
            alignSelf: "center",
          }}
        >
          Select Language
        </Text>

        <View style={{ flexDirection: "row", top: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Carousel")}
            style={styles.TouchableContainer}
          >
            <Text style={{ fontSize: 20, alignSelf: "center", color: "white" }}>
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BottomTab")}
            style={styles.TouchableContainer1}
          >
            <Text style={{ fontSize: 20, alignSelf: "center", color: "white" }}>
              Hindi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  TouchableContainer1: {
    top: 120,
    height: 40,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.4,
    left: 50,
    borderRadius: 32,
    backgroundColor: "#147fdc",
  },
});

export default FirstScreen;
