import React, { useEffect, useState } from "react";
import {
  Font,
  AdMobBanner,
  setTestDeviceIDAsync,
  AdMobInterstitial,
} from "expo-ads-admob";
import {
  View,
  Text,
  Image,
  FlatList,
  YellowBox,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";
import styles from "../../Style/walletStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Data } from "../../Assets/tempData";
import { Modal } from "react-native-paper";
import Topup from "../../Components/Screen/TopUp";
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

const _renderItem = (item) => {
  const conver = convertToRupiah(item.saldo);
  const change = item.bulan;
  console.log(change, "GAS");
  console.ignoredYellowBox = ["Setting a timer"];

  return (
    <View style={[styles.history, { justifyContent: "space-between" }]}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.Money}>
        <Text style={styles.saldo}>
          Rp.
          {conver}
        </Text>
      </View>
    </View>
  );
};
const Wallet = ({ navigation }) => {
  console.ignoredYellowBox = ["Setting a timer"];
  const [value, setValue] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [data2, setData2] = useState([]);
  // function fetData (){
  //   if(refreshing == false) {
  //     setData(data)
  //     console.log(data2,"safasf")
  //     setRefreshing(true)
  //   }
  //   setRefreshing(false)
  // }

  const [data, setData] = useState(Data);
  const saldo = data;

  useEffect(() => {
    getData();
  }, [data]);

  let jumlah = 0;
  saldo.forEach((item) => (jumlah += item.saldo));
  const handle = () => {
    setRefreshing(true);
    navigation.navigate("Topup");
  };
  const getData = () => {
    setData(data);
    setRefreshing(false);
  };
  const refresh = () => {
    setRefreshing(false);
    getData();
  };
  const rupiah = convertToRupiah(jumlah);
  return (
    <View style={styles.viewHome}>
      <View style={{ height: "45%", backgroundColor: "#3EA898" }}>
        <View style={{ marginBottom: "10%" }}>
          <View style={styles.viewBalance}>
            <Text style={styles.textSaldo}>Saldo</Text>
            <Text style={styles.textRupiah}>Rp {rupiah}</Text>
          </View>

          <View style={[styles.viewSend, { justifyContent: "space-between" }]}>
            <TouchableWithoutFeedback onPress={() => handle()}>
              <View style={styles.Send2}>
                <Text style={styles.topup}>Top up</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.Send}>
              <Text style={styles.kirimDonasi}>Tarik Dana</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => _renderItem(item)}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        onRefresh={refresh}
        refreshing={refreshing}
      />
    </View>
  );
};
export default Wallet;
