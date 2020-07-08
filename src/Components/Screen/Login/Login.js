import React, { useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ScrollView,
} from "react-native";
import { Fragment } from "react";
import { Fumi } from "react-native-textinput-effects";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Mail from "react-native-vector-icons/MaterialIcons";
import { Style } from "../../../Style/loginStyle";
import firebase from "../../../Config/Firebase/firebaseconfig";
import { State, Dispatch } from "../../../../App";
import { Entypo } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const state = useContext(State);
  const dispatch = useContext(Dispatch);
  const [loading, setLoading] = React.useState(false);
  const [showEye, setShowEye] = React.useState(false);

  const handleShowEye = () => {
    setShowEye(!showEye);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          setLoading(true),
            firebase
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then((res) => {
                AsyncStorage.setItem("uid", res.user.uid);
                setLoading(false);
                resetForm();
                console.log("Sukses", res);
                dispatch({ type: "login" });
              })
              .catch((err) => {
                Alert.alert("failed");
                setLoading(false);
                resetForm();
                console.log("ERROR", err);
              });
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().min(6).required(),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <View>
              <View style={Style.viewImg}>
                <Image
                  style={Style.img}
                  source={require("../../../Assets/logo.png")}
                />
                <Text style={Style.textTitle}>Galang Dana</Text>
                <Text style={Style.textCont}>Sign to continue </Text>
              </View>
              <View style={Style.viewMargin}>
                <Fumi
                  style={Style.input}
                  label={"Email"}
                  iconClass={Mail}
                  iconName={"email"}
                  iconColor={"#3EA898"}
                  iconSize={20}
                  iconWidth={40}
                  inputPadding={16}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Text style={Style.textFemail}>{errors.email}</Text>
                )}
                <Fumi
                  label={"Password"}
                  iconClass={FontAwesome5}
                  iconName={"lock"}
                  iconColor={"#3EA898"}
                  iconSize={20}
                  iconWidth={40}
                  inputPadding={16}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  secureTextEntry={showEye ? false : true}
                />
                {showEye ? (
                  <Entypo
                    onPress={() => handleShowEye()}
                    style={Style.iconEye}
                    name="eye"
                    size={25}
                    color="#C6C9CD"
                  />
                ) : (
                  <Entypo
                    onPress={() => handleShowEye()}
                    style={Style.iconEye}
                    name="eye-with-line"
                    size={25}
                    color="#C6C9CD"
                  />
                )}

                {touched.password && errors.password && (
                  <Text style={Style.textFPass}>{errors.password}</Text>
                )}
              </View>
              <View style={Style.viewMargin}>
                <Text
                  onPress={() => navigation.navigate("ForgotPassword")}
                  style={Style.textFPW}
                >
                  Forgot Password ?
                </Text>
                <View style={Style.viewBTN}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit}
                    style={!isValid ? Style.btn2 : Style.btn}
                  >
                    <Text style={Style.btnFont}>
                      {loading === false ? "Login" : "loading..."}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={Style.viewMargin2}>
                  <Text style={Style.textRegis2}>
                    {"Don't have account?" + " "}
                    <Text
                      onPress={() => navigation.navigate("Register")}
                      style={Style.textRegis}
                    >
                      create a new account
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </Fragment>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Login;
