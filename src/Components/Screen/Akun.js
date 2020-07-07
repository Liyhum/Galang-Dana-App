import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput, 
} from "react-native";
import styles from "../../Style/akunStyle";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesomeIcon,
} from "@expo/vector-icons";
import {
  Fumi,
  Jiro,
  Madoka,
  Kaede,
  Hideo,
} from "react-native-textinput-effects";

const Akun = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [text, setText] = useState("Muhammad Muhyillail");
  const [text2, setText2] = useState("");
  const HandleSumbit = (text) => {
    console.log("iintext", text);
    setText(text);
    setText2(text2);
    setShow(!show);
  };
  const HandleSumbit2 = (text2) => {
    console.log("iintext", text2);
    setText2(text2);
    setShow2(!show2);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.viewHome}>
        <ScrollView style={styles.viewHome}>
          <View style={styles.viewAkun}>
            <View style={styles.viewHeader}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color="#e6f2ed"
                style={styles.icon}
                onPress={() => navigation.navigate("Home")}
              />
              <Text style={styles.headerText}>Setting</Text>
              <MaterialCommunityIcons
                name="menu"
                size={30}
                color="#e6f2ed"
                style={styles.icon}
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
            <View style={styles.avatar}>
              <View style={styles.circle}>
                <MaterialCommunityIcons
                  name="account"
                  size={70}
                  color="#e6f2ed"
                  style={{ 
                    elevation: 10,
                  }}
                />
              </View>
              <View>
                <Text style={styles.text}>{text}</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewEdit}>
            {show ? (
                <View style={styles.viewTextEdit}>
                  <Text
                    style={{
                      // bottom:'3%',
                      right: "1%",
                      color: "#3EA898",
                      top:'8%'
                    }}
                  >
                    Nama
                  </Text>
                  <View style={styles.Edit}>
                    <TextInput
                      placeholder="Nama"
                      numberOfLines={10}
                      value={text}
                      style={{ width: "80%" }}
                      onChangeText={(text) => setText(text)}
                    />
                    <FontAwesome
                      name="check"
                      size={25}
                      color="#3EA898"
                      style={{
                        alignSelf: "flex-end",
                        bottom: "10%",
                      }}
                      onPress={() => HandleSumbit(text)}
                    />
                  </View>
                </View>
            ) : (
                <View style={styles.viewTextEdit}>
                  <Text
                    style={{
                      bottom: "28%",
                      right: "1%",
                      color: "#3EA898",
                    }}
                  >
                    Nama
                  </Text>
                  <View style={styles.Edit}>
                    <Text
                      style={{
                        top: "1%",
                      }}
                    >
                      {text}
                    </Text>
                    <FontAwesome
                      name="pencil"
                      size={25}
                      color="#3EA898"
                      style={{
                        alignSelf: "flex-end",
                        // marginRight:'15%'
                      }}
                      onPress={() => setShow(!show)}
                    />
                  </View>
                </View>
            )}
            {show2 ? (
                <View style={styles.viewTextEdit}>
                  <Text
                    style={{
                      // bottom:'1%',
                      right: "1%",
                      color: "#3EA898",
                      top:'8%'
                    }}
                  >
                    Email
                  </Text>
                  <View style={styles.Edit}>
                    <TextInput
                      placeholder="Email"
                      numberOfLines={10}
                      value={text2}
                      style={{ width: "80%" }}
                      onChangeText={(text2) => setText2(text2)}
                      keyboardType="email-address"
                    />
                    <FontAwesome
                      name="check"
                      size={25}
                      color="#3EA898"
                      style={{
                        alignSelf: "flex-end",
                        bottom: "10%",
                        // right: "2%",
                      }}
                      onPress={() => HandleSumbit2(text2)}
                    />
                  </View>
                </View>
            ) : (
                <View style={styles.viewTextEdit}>
                  <Text
                    style={{
                      bottom: "28%",
                      right: "1%",
                      color: "#3EA898",
                    }}
                  >
                    Email
                  </Text>
                  <View style={styles.Edit}>
                    <Text
                      style={{
                        top: "1%",
                      }}
                    >
                      {text2}
                    </Text>
                    <FontAwesome
                      name="pencil"
                      size={25}
                      color="#3EA898"
                      style={{
                        alignSelf: "flex-end",
                        // marginRight:'15%'
                      }}
                      onPress={() => setShow2(!show2)}
                    />
                  </View>
                </View>
            )}
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Akun;
