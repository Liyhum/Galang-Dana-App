import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import styles from "../../Style/drawerStyle";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { State, Dispatch } from "../../../App";

export const DrawerContent = ({ navigation, props }) => {
  const dipatch = React.useContext(Dispatch);
  const HandleLogout = () => {
    dipatch({ type: "logout" });
    AsyncStorage.removeItem("uid");
    navigation.closeDrawer();
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.viewDrawer}>
        <View style={styles.viewSetting}>
          <Text style={styles.textSetting}>Settings</Text>
        </View>
        <View style={[styles.viewUser, styles.View]}>
          <View style={styles.circle}>
            <FontAwesome name="user" color={"#e6f2ed"} size={60} />
          </View>
          <View style={styles.viewNama}>
            <Text style={styles.nama}>Muhammad Muhyillail</Text>
          </View>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textProfile}>Profile</Text>
        </View>
        <DrawerItem
          icon={({ color, size }) => (
            <View>
              <FontAwesome name="edit" color={"#e6f2ed"} size={size} />
            </View>
          )}
          onPress={() => navigation.navigate("Akun")}
          label="Edit Profile"
          labelStyle={styles.TextLogout2}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <View>
              <Ionicons name="ios-key" color={"#e6f2ed"} size={size} />
            </View>
          )}
          onPress={() => navigation.navigate("Setting")}
          label="Change Password"
          labelStyle={styles.TextLogout3}
        />
        <View style={styles.viewText2}>
          <Text style={styles.textProfile}>Exit</Text>
        </View>
        <View style={styles.viewLogout}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="exit-to-app"
                color={"#e6f2ed"}
                size={size}
              />
            )}
            label="Logout"
            labelStyle={styles.TextLogout}
            onPress={() => HandleLogout()}
          />
        </View>
      </View>
      <View
        style={{
          height: "8%",
          backgroundColor: "#3EA898",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#9aede1",
            fontFamily: "OpenSans_400Regular_Italic",
          }}
        >
          Copyright Samid
        </Text>
      </View>
    </View>
  );
};
