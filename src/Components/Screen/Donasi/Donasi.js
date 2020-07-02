import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Data from "./Data.json";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles } from "../../../Style/donasiStyle";

const Donasi = ({ navigation }) => {
  const [list, setList] = React.useState(false);
  const [id, setId] = React.useState("");

  const handleList = (res) => {
    if (res.id) {
      setList(!list);
      setId(res.id);
      console.log("list", list);
    }
  };

  return (
    <View>
      <View style={Styles.viewHeader}>
        <View style={Styles.viewTitlePembayaran}>
          <FontAwesome5
            style={{ position: "absolute" }}
            name="arrow-left"
            size={20}
            color="#3EA898"
            onPress={() => navigation.navigate("artikel")}
          />
          <Text style={Styles.textDonasi}>Donasi</Text>
          <Text style={Styles.textPembayaran}>Metode Pembayaran</Text>
        </View>
      </View>
      <View style={Styles.viewBodyList}>
        {Data.Data.map((res) => (
          <TouchableOpacity onPress={() => handleList(res)}>
            <View
              key={res.id}
              style={
                res.id === id && list === true
                  ? Styles.viewList2
                  : Styles.viewList
              }
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={{ uri: res.img }}
              />
              <Text
                style={{
                  marginLeft: "5%",
                  color: "#4A5566",
                  fontFamily: "OpenSans_600SemiBold",
                  marginTop: "2%",
                }}
              >
                {res.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            disabled={id && list === true ? false : true}
            style={id && list === true ? Styles.btnKonfir : Styles.btnKonfir2}
            onPress={() => navigation.navigate("Pembayaran")}
          >
            <View>
              <Text style={Styles.textKonfir}>Konfirmasi</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Donasi;
