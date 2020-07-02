import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles } from "../../../Style/pembayaranStyle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Sae } from "react-native-textinput-effects";

const Pembayaran = ({ navigation }) => {
  return (
    <ScrollView style={{ height: "100%", backgroundColor: "yellow" }}>
      <View style={{ height: "50%", backgroundColor: "#3EA898" }}>
        <FontAwesome5
          name={"arrow-left"}
          size={20}
          color="white"
          style={Styles.iconArrow}
          onPress={() => navigation.navigate("Donasi")}
        />
        <Text
          style={{
            color: "white",
            fontSize: 35,
            fontFamily: "OpenSans_600SemiBold",
            marginTop: 35,
            margin: 20,
          }}
        >
          Pembayaran
        </Text>
      </View>
      <View
        style={{
          height: 200,
          position: "absolute",
          backgroundColor: "white",
          width: "91%",
          margin: 20,
          marginTop: "50%",
          borderRadius: 20,
        }}
      >
        <View style={{ margin: 20 }}>
          <Sae
            label={"Email Address"}
            iconClass={FontAwesomeIcon}
            iconName={"pencil"}
            iconColor={"#3EA898"}
            // active border height
            borderHeight={2}
            // TextInput props
            autoCapitalize={"none"}
            autoCorrect={false}
            style={{ position: "relative" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Pembayaran;
