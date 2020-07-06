import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import styles from "../../Style/topupStyle";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Saldo } from "./dataHarga";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { set } from "lodash";
import { Data } from "../../Assets/tempData";
import { date, ref } from "yup";

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
const Topup = ({ navigation }) => {
  React.useEffect(() => {
    console.log(saldo, "=+++==+Data");
  });
  const [data, setData] = useState(Saldo);
  const [saldo, setSaldo] = useState(Data);
  const [value, setValue] = useState(0);
  const map = saldo.map((item) => item.saldo);
  const jumlah = convertToRupiah(value);
  const [refresh, setRefresh] = useState(false);
  const handleSubmit = (item2) => {
    setValue((item2 += value));
  };
  const handleSubmitDana = () => {
    const all = JSON.stringify(saldo);
    setTimeout(() => {
      setRefresh(true);
    }, 500);
    console.log(all);
    if (value <= 1) {
      alert("Masukan Jumlah saldo");
    } else {
      saldo.push({
        id: new Date(),
        name: "Wallet Transfer",
        saldo: value,
      });
    }
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
    setValue(0);
  };
  React.useEffect(() => {
    console.log(saldo, "Asfasfsaf");
  });
  const renderItems = (item) => {
    const item2 = item.value;
    const jumlah = convertToRupiah(item2);
    return (
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => handleSubmit(item2)}>
          <View style={styles.viewValue}>
            <Text style={{ fontSize: 15, color: "#0dbfa4" }}> {jumlah}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#e6f2ed", position: "relative" }}>
      <ScrollView>
        <View
          style={{
            height: 20,
            backgroundColor: "#3EA898",
          }}
        />
        <View style={styles.header}>
          <FontAwesome
            name="arrow-left"
            size={25}
            color="#e6f2ed"
            style={{
              marginLeft: "5%",
              // marginTop:'5%'
            }}
            onPress={() => navigation.navigate("Home")}
          />
          <Text style={styles.textTopup}>Top up</Text>
          <MaterialCommunityIcons
            name="menu"
            size={30}
            color="#e6f2ed"
            style={{
              marginRight: "5%",
              // marginTop:'5%'
            }}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View style={styles.viewContainer}></View>
        <View style={styles.ViewContent}>
          <Text style={styles.textCard}>Silahkan Pilih</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderItems(item)}
            // horizontal={true}
            numColumns={3}
          />
        </View>
        <View style={styles.viewAddHarga}>
          <TouchableOpacity
            disabled={value === 0 ? true : false}
            onPress={() => setValue(value - 500)}
          >
            <FontAwesome
              name="minus"
              size={20}
              color="#3EA898"
              style={{ padding: 20 }}
            />
          </TouchableOpacity>
          <View style={styles.Addharga}>
            <Text
              style={{
                fontSize: 20,
                color: "#3EA898",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              {" "}
              {jumlah}
            </Text>
          </View>

          <FontAwesome
            name="plus"
            size={20}
            color="#3EA898"
            style={{ padding: 20 }}
            onPress={() => setValue(value + 1000)}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => setValue(0)}
          style={{
            alignSelf: "center",
            marginVertical: "5%",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_600SemiBold",
              color: "#3EA898",
            }}
          >
            RESET
          </Text>
        </TouchableWithoutFeedback>

        <View style={styles.ButtonSubmit}>
          {refresh === true ? (
            <ActivityIndicator />
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                handleSubmitDana();
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "OpenSans_600SemiBold",
                    color: "#e6f2ed",
                  }}
                >
                  SUBMIT
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default Topup;
