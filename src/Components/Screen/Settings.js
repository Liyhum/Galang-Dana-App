import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Mail from "react-native-vector-icons/MaterialIcons";
import { Styles } from "../../Style/settingStyle";
import { Fumi } from "react-native-textinput-effects";
import firebase from "../../Config/Firebase/firebaseconfig";

const Settings = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => {
        console.log("res", res);
        alert("success", res);
      })
      .catch((err) => console.log("err", err), alert("failed", err));
  };
  return (
    <View>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={Styles.iconTop}
          >
            <FontAwesome5 size={20} color="#3EA898" name="arrow-left" />
          </TouchableOpacity>
        </View>
        <View style={Styles.viewImg}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../../assets/images/padlock.png")}
          />
          <Text style={Styles.textTitle}>Change Your Password? </Text>
          <Text style={Styles.textTitle2}>
            To change your password, you need to enter your registered email
            address. We will send the recovery code to your email{" "}
          </Text>
        </View>
        <View style={Styles.viewMargin}>
          <Fumi
            style={Styles.input}
            label={"Email"}
            iconClass={Mail}
            iconName={"email"}
            iconColor={"#3EA898"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity onPress={() => handleSubmit()} style={Styles.btn}>
            <Text style={Styles.textLogin}>Send Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Settings;
