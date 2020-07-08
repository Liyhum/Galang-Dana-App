import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Styles } from "../../../Style/pembayaranStyle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
import Data from "../Artikel/Data.json";
import { HomeContext } from "../../../Context/HomeContext";
import { acc } from "react-native-reanimated";
import { ActivityIndicator } from "react-native-paper";

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
const Pembayaran = ({ navigation }) => {
  const [homeIdContext, setHomeIdContext] = React.useContext(HomeContext);
  const [name, setName] = React.useState("");
  const [nomor, setNomor] = React.useState("");
  const [jumlah, setJumlah] = React.useState("");
  const [rekening, setRekening] = React.useState("safasf");
  const [accept, setAccept] = React.useState(false);
  const rekening2 = JSON.stringify(Math.random());
  const [refresh, setRefresh] = useState(false);
  const valid = [name, nomor, jumlah];
  const angkaMAng= convertToRupiah(jumlah)
  const [hay, setHay] = useState([]);

  
  const fetData= async()=>{
    const value = JSON.parse(await AsyncStorage.getItem('users'))
    if (value != null){
        setHay(value)
    }
}
  React.useEffect(() => {
    console.log(hay,"safs");
    fetData()
  }, []);
  const handleKirim = async () => {
    setAccept(true);
    if ((name.length <= 1, nomor.length <= 1, jumlah.length <= 1)) {
      alert("silahkan isi");
    } else {
      let kosong;
      Data[`Data${homeIdContext}`].map((res) => (kosong = res.donasi));
      kosong.push({
        id:new Date(),
        name: name,
        nomor: parseInt(nomor),
        jumlah: parseInt(jumlah),
      });
      setTimeout(()=>{
        setRefresh(true)
      },300)
      // console.log(datainpu);
      console.log(kosong);
      hay.push({
        id: new Date(),
        name: "Wallet Transfer",
        saldo: parseInt("-" + jumlah),
      });
      AsyncStorage.setItem("users", JSON.stringify(hay));
    }
    setTimeout(()=>{
      setName("");
      setNomor("");
      setJumlah("");
      setRefresh(false)
      navigation.navigate("Artikel")
    },2000)
  };
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
            onChangeText={(text) => setName(text)}
            value={name}
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
            keyboardType="number-pad"
            value={nomor}
            onChangeText={(text) => setNomor(text)}
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
            onChangeText={(text) => setJumlah(text)}
            keyboardType="number-pad"
            value={angkaMAng}
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
            value={rekening2}
          />
          <Text> </Text>
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
          onPress={() => handleKirim()}
        >
          {refresh === true ? 
          <ActivityIndicator
          color="white"
          />
          :  
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
        }
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Pembayaran;
