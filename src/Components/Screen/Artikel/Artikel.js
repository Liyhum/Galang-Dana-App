import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  RefreshControl,
} from "react-native";
import { Styles } from "../../../Style/artikelStyle";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { HomeContext } from "../../../Context/HomeContext";
import Data from "./Data.json";
import { FlatList } from "react-native-gesture-handler";
function convertToRupiah(angka) {
  var rupiah = "";
  var angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("");
}
const Artikel = ({ navigation }) => {
  const [homeIdContext, setHomeIdContext] = React.useContext(HomeContext);
  const [se, setSe] = useState("");
  const [val, setValue] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const value = Data[`Data${homeIdContext}`].map((res) => res.donasi);

  const data = Data[`Data${homeIdContext}`];
  let fetchData = async () => {
    const data = await AsyncStorage.getItem("uid");
    if (data != null) {
      setSe(data);
    }
  };
  if (!data) data = Data[`Data${homeIdContext}`];
  React.useEffect(() => {
    ok.map((res) => {
      const angka2 = res.donasi;
      const all = [...angka2];
      all.forEach((v) => {
        angka += v.jumlah;
      });
      console.log(angka);
      setValue(angka);
    });

    fetchData();
  }, []);
  // const renderItems = (item) => {
  //   const name = item.donasi.map((res)=>res.name)
  //   const jumlah = item.donasi.map((res)=>res.jumlah)
  //   return (
  //     <View style={{
  //     }}>
  //       <Text>{name}</Text>
  //       <Text>{jumlah}</Text>
  //     </View>
  //   )
  // };
  const refresh = () => {
    setRefreshing(true);
    fetchData().then(() => {
      setRefreshing(false);
    });
  };
  const ok = [...data];
  const itung = ok.forEach((item) => (angka += item.donasi.jumlah));
  let angka = 0;
  const rupaih = convertToRupiah(val);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={refresh} refreshing={refreshing} />
      }
    >
      <View style={Styles.viewArtikel}>
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
            {data.map((res) => (
              <Text style={Styles.textTitle}>{res.title}</Text>
            ))}

            <Text style={Styles.textNumDonate}>
              {data.map((res) => (
                <Text style={Styles.text2}> {res.dana2}</Text>
              ))}
              from
              {data.map((res) => (
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
            <Text style={Styles.textCerita}>Cerita</Text>
            {data.map((res) => (
              <Text style={Styles.text3}>{res.text}</Text>
            ))}
            {data.map((res) => (
              <Image
                style={Styles.img2}
                source={{
                  uri: res.img2,
                }}
                resizeMode={"cover"}
              />
            ))}
            {data.map((res) => (
              <Text style={Styles.text3}>{res.text2}</Text>
            ))}
          </View>
          <View style={Styles.viewTextDonate}>
            {value.map((res) => (
              <Text style={Styles.textDonasi}>Donasi {res.length}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Artikel;
