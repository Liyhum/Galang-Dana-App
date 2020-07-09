import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,AsyncStorage } from "react-native";
import Data from "./Data.json";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles } from "../../../Style/donasiStyle";
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
const Donasi = ({ navigation }) => {
  const [list, setList] = React.useState(false);
  const [data2, setData2] = React.useState([]);
  const [id, setId] = React.useState("");
  const [refresh,setRefresh] = React.useState(false)
  let fetchData = async () => {
    const value = JSON.parse(await AsyncStorage.getItem("users"));
    if (value != null) {
      setData2(value);
      setRefresh(false);
    }
  }
  const handleList = (res) => {
    if (res.id) {
      setList(!list);
      setId(res.id);
      console.log("list", list);
      setRefresh(true);
    }
  };
  React.useEffect(()=>{
    refreshs()
    fetchData()
  },[])
  const refreshs =()=>{
    fetchData().then(()=>{
      setRefresh(false)
    })
  }
  const all = [...data2];
  let jumlah = 0;
  all.forEach((item) => (jumlah += item.saldo));
  const angka =convertToRupiah(jumlah)
  return (
    <View>
      <View style={Styles.viewHeader}>
        <View style={Styles.viewTitlePembayaran}>
          <FontAwesome5
            style={{ position: "absolute" }}
            name="arrow-left"
            size={20}
            color="#3EA898"
            onPress={() => navigation.navigate("Artikel")}
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
                {res.title === "Saldo Anda" ? 
                <Text>
                  {res.title}
                  <Text> Rp.       
                  {angka}</Text>
                </Text>
                :
                res.title
              }
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
