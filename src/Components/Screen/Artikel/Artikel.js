import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { Styles } from "../../../Style/artikelStyle";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { HomeContext } from "../../../Context/HomeContext";
import Data from "./Data.json";

const Artikel = ({ navigation }) => {
  const [homeIdContext, setHomeIdContext] = React.useContext(HomeContext);

  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View>
          {Data[`Data${homeIdContext}`].map((res) => (
            <Image
              style={{ width: "100%", height: 300 }}
              source={{
                uri: res.img,
              }}
            />
          ))}

          <View style={Styles.viewOpacity}></View>
          <FontAwesome5
            name={"arrow-left"}
            size={20}
            color="white"
            style={Styles.iconArrow}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View>
          <View style={Styles.viewTextDonate}>
            {Data[`Data${homeIdContext}`].map((res) => (
              <Text style={Styles.textTitle}>{res.title}</Text>
            ))}

            <Text style={Styles.textNumDonate}>
              <Text style={Styles.text1}> Rp.0</Text> from
              {Data[`Data${homeIdContext}`].map((res) => (
                <Text style={Styles.text2}> {res.dana}</Text>
              ))}
            </Text>
            <Progress.Bar
              style={Styles.progress}
              color="green"
              progress={0}
              width={200}
            />
            <Text style={Styles.textNumDonate}>
              <Text style={{ fontSize: 20 }}>0</Text> donasi{" "}
              <Text style={{ fontSize: 20 }}>100</Text> hari lagi
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Donasi")}
              style={Styles.btnDonate}
            >
              <Text style={Styles.textBtnDonate}>Donate Now</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.viewTextDonate}>
            <Text
              style={{
                marginBottom: "2%",
                fontSize: 20,
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              Cerita
            </Text>
            {Data[`Data${homeIdContext}`].map((res) => (
              <Text
                style={{ fontFamily: "OpenSans_400Regular", color: "#4A5566" }}
              >
                {res.text}
              </Text>
            ))}
            {Data[`Data${homeIdContext}`].map((res) => (
              <Image
                style={{
                  width: "100%",
                  height: 200,
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
                source={{
                  uri: res.img2,
                }}
                resizeMode={"cover"}
              />
            ))}
            {Data[`Data${homeIdContext}`].map((res) => (
              <Text
                style={{ fontFamily: "OpenSans_400Regular", color: "#4A5566" }}
              >
                {res.text2}
              </Text>
            ))}
          </View>
          <View style={Styles.viewTextDonate}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                marginBottom: "2%",
                fontSize: 20,
              }}
            >
              Donasi (0)
            </Text>

            <Text
              style={{
                textAlign: "center",
                margin: 30,
                color: "#4A5566",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              {" "}
              Tidak ada yang donasi
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Artikel;
