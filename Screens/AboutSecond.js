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
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

const AboutSecond = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      <View style={styles.TextBox}>
        <Text style={styles.txt1}>About US</Text>
        <Text style={styles.txt2}>
          {" "}
          A laundry service is a service in a hotel that washes and irons
          clothes for guests.... the laundry service will wash,dry ,and iron
          your clothes. Our laundry service can clean and return a shirt in two
          hours.
        </Text>
        <Text style={styles.txt3}>Address</Text>
      </View>
      <View style={{ flex: 1, top: 32, margin: 10 }}>
        <MapView
          userInterfaceStyle="dark"
          showsUserLocation={true}
          showsMyLocationButton={true}
          followUserLocation={true}
          initialRegion={{
            latitude: 22.723706,
            longitude: 75.886446,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={{
            width: "100%",
            height: "64%",
          }}
        />
      </View>


      <View style={{flexDirection:'row',bottom:100,left:14}}> 
    <FontAwesome name='circle' size={32} style={{color:'green'}}/>
    <Text style={{top:5,left:5}}>Monday 01:00 - 23:59</Text>
</View>

<View style={{flexDirection:'row',bottom:100,left:14}}> 
    <FontAwesome name='circle' size={32} style={{color:'green'}}/>
    <Text style={{top:5,left:5}}>Tuesday 01:00 - 23:59</Text>
</View>

      <View style={styles.btn}>
        <Button1
          value={"SCHEDULE A PICKUP"}
          onPress={() => navigation.navigate("TopTabThird")}
        />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: "100%",
    backgroundColor: "white",
  },
  TextBox: {
    left: 10,
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
    top: 15,
  },
  txt2: {
    fontSize: 15,
    top: 23,
    color: "#A0A0A0",
  },
  txt3: {
    fontSize: 20,
    fontWeight: "bold",
    top: 32,
  },
  btn: {
    top: 400,
    position: "absolute",
    marginBotoom: 100,
  },
});

export default AboutSecond;
