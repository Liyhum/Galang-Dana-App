import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { Styles } from "../../../Style/artikelStyle";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";

const Artikel = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    "OpenSans-Bold": require("../../../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{
              uri:
                "https://imgix.kitabisa.com/17d7e446-01b7-43ff-bc6d-c5d4f646a170.jpg?ar=16:9&w=664&auto=format,compress",
            }}
          />
          <View style={Styles.viewOpacity}></View>
          <FontAwesome5
            name={"arrow-left"}
            size={20}
            color="white"
            style={{ position: "absolute", margin: "10%", marginLeft: "3%" }}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View>
          <View style={Styles.viewTextDonate}>
            <Text style={Styles.textTitle}>
              Sedekah Jariyah 10.000 Qur'an untuk Koraban Bencana
            </Text>
            <Text style={{ fontFamily: "Inter_900Black" }}>Inter Black</Text>
            <Text style={{ fontSize: 10 }}>
              <Text style={Styles.text1}> Rp.0</Text> from
              <Text style={Styles.text2}> 180.000.000</Text>
            </Text>
            <Progress.Bar
              style={Styles.progress}
              color="green"
              progress={0}
              width={200}
            />
            <Text style={{ fontSize: 10 }}>
              <Text style={{ fontSize: 20 }}>0</Text> donasi{" "}
              <Text style={{ fontSize: 20 }}>100</Text> hari lagi
            </Text>
            <TouchableOpacity style={Styles.btnDonate}>
              <Text style={Styles.textBtnDonate}>Donate Now</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.viewTextDonate}>
            <Text
              style={{ marginBottom: "2%", fontWeight: "bold", fontSize: 20 }}
            >
              Cerita
            </Text>
            <Text>
              Berlokasi di Kecamatan Sukajaya, Kabupaten Bogor. Sebagian warga
              korban banjir besar di awal tahun 2020 lalu masih berusaha untuk
              bangkit dari bencana yang merusak sebagian besar rumah dan
              menghanyutkan harta benda itu.
            </Text>
            <Image
              style={{
                width: "100%",
                height: 200,
                marginTop: "2%",
                marginBottom: "2%",
              }}
              source={{
                uri:
                  "https://img.kitabisa.cc/size/1000/d833083a-fd4e-4ab2-b894-49ec21f5954b.jpg",
              }}
              resizeMode={"cover"}
            />
            <Text>
              Sebanyak 163 unit hunian semantara untuk warga Desa Sukamulih,
              Pasir Madang dan Cileuksa sudah terbangun. Syukur, sebagian kecil
              dari mereka sudah memiliki tempat untuk tinggal dan hidup seperti
              biasa bersama dengan keluarga. Adanya program Syiar Qur'an
              disambut antusias oleh warga yang ingin membaca Al-Qur'an atau
              Iqra. 700 paket Qur'an dan Iqro siap didistribusikan untuk mereka.
              "Pemberian Qur'an ini sangat membantu kami untuk ibadah. Di
              Kecamatan Sukajaya ini juga ada beberapa pesantren yang sangat
              membutuhkan mushaf Qur'an maupun Iqro." Ungkap Ustadz Bubun yang
              biasa mengajar ngaji anak anak.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Artikel;
