import React, { useEffect, useState } from "react";
// import {
//   Font,
//   AdMobBanner,
//   setTestDeviceIDAsync,
//   AdMobInterstitial,
// } from "expo-ads-admob";
import {
  View,
  Text,
  Image,
  FlatList,
  YellowBox,
  TouchableWithoutFeedback,
  AsyncStorage,
  RefreshControl,
} from "react-native";
import styles from "../../Style/walletStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Data } from "../../Assets/tempData";
import { Modal } from "react-native-paper";
import Topup from "../../Components/Screen/TopUp";
import axios from "axios";
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
  const [data, setData] = useState(Data);
  const saldo = data;
  const all = [...data2];
  let jumlah = 0;
  let fetchData = async () => {
    const value = JSON.parse(await AsyncStorage.getItem("users"));
    if (value != null) {
      setData2(value);
      // setRefreshing(false);
    }
    const array = [];
    const number = array.map((item) => item.saldo);
  };
  useEffect(() => {
    console.log(data2, "halo");
    if (refresh === true) {
      fetchData().then(() => {
        setRefreshing(false);
      });
    }
    fetchData()
    // AsyncStorage.removeItem('users')
    // console.log(jumlah,'ASsfaf')
  }, []);
  all.forEach((item) => (jumlah += item.saldo));
  const handle = () => {
    navigation.navigate("Choose");
  };
  const tarikDanaHandle = () => {
    navigation.navigate("TarikDana");
  };
  const refresh = () => {
    setRefreshing(true);
    fetchData().then(() => {
      setRefreshing(false);
    });
  };
  const rupiah = convertToRupiah(jumlah);
  return (
    <View style={styles.viewHome}>
      <View style={{ height: "45%", backgroundColor: "#3EA898" }}>
        <View style={{ marginBottom: "10%" }}>
          <View style={styles.viewBalance}>
            <Text style={styles.textSaldo}>Saldo</Text>
            {jumlah < 0 ? (
              <Text style={styles.textRupiah}>Rp. 0</Text>
            ) : (
              <Text style={styles.textRupiah}>Rp. {rupiah}</Text>
            )}
          </View>

          <View style={[styles.viewSend, { justifyContent: "space-between" }]}>
            <TouchableWithoutFeedback onPress={() => handle()}>
              <View style={styles.Send2}>
                <Text style={styles.topup}>Top up</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => tarikDanaHandle()}>
              <View style={styles.Send}>
                <Text style={styles.kirimDonasi}>Tarik Dana</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

      <FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => _renderItem(item)}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={refreshing} />
        }
      />
    </View>
  );
};
export default Wallet;

