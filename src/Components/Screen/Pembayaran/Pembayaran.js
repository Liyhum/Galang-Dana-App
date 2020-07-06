import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Styles } from "../../../Style/pembayaranStyle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

const Pembayaran = ({ navigation }) => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ height: 300, backgroundColor: "#3EA898" }}>
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
            marginTop: "30%",
            margin: 20,
          }}
        >
          Pembayaran
        </Text>
      </View>
      <View
        style={{
          height: 400,
          position: "relative",
          backgroundColor: "#F6F8FA",
          width: "91%",
          margin: 20,
          marginTop: "-20%",
          borderRadius: 20,
          elevation: 1,
        }}
      >
        <Text></Text>
        <View style={{ margin: 30 }}>
          <Fumi
            label={"Nama Anda"}
            iconClass={FontAwesomeIcon}
            iconName={"user"}
            iconColor={"#3EA898"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ position: "relative" }}
          />
        </View>
        <View style={{ margin: 30, marginTop: "-5%" }}>
          <Fumi
            label={"Nomor Ovo Anda"}
            iconClass={FontAwesome5}
            iconName={"wallet"}
            iconColor={"#3EA898"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ position: "relative" }}
          />
        </View>
        <View style={{ margin: 30, marginTop: "-5%" }}>
          <Fumi
            label={"Jumlah"}
            iconClass={FontAwesome5}
            iconName={"money-bill-alt"}
            iconColor={"#3EA898"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ position: "relative" }}
          />
        </View>
        <View style={{ margin: 30, marginTop: "-5%" }}>
          <Fumi
            label={"Rekening Tujuan"}
            iconClass={FontAwesome}
            iconName={"bank"}
            iconColor={"#3EA898"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ position: "relative" }}
          />
        </View>
      </View>

      <View style={{ marginTop: "20%", margin: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#3EA898",
            width: "100%",
            padding: "4%",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: "OpenSans_600SemiBold",
            }}
          >
            Kirim Donasi
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Pembayaran;
