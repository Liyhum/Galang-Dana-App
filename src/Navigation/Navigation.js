import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Login from "../Components/Screen/Login/Login";
import Register from "../Components/Screen/Register/Register";
import Home from "../Components/Screen/Home/Home";
import Wallet from "../Components/Screen/Wallet";
import Akun from "../Components/Screen/Akun";
import ForgotPassword from "../Components/Screen/ForgotPassword/ForgotPassword";
import Setting from "../Components/Screen/Settings";
import { DrawerContent } from "../Components/Screen/ContentDrawer";
import { FontAwesome, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AsyncStorage, View, Text } from "react-native";
import { State, Dispatch } from "../../App";
import Animated from "react-native-reanimated";
import Artikel from "../Components/Screen/Artikel/Artikel";
import Donasi from "../Components/Screen/Donasi/Donasi";
import Pembayaran from "../Components/Screen/Pembayaran/Pembayaran";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Bottom = createMaterialBottomTabNavigator();

function DrawerNav({ navigation }) {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const screenScale = { transfrom: [{ scale }] };
  return (
    <Drawer.Navigator
      initialRouteName="RightDrawer"
      drawerPosition="right"
      drawerContent={(props) => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}
      drawerType="back"
    >
      <Drawer.Screen name="Drawer" component={NavigationBottom} />
      <Drawer.Screen name="Akun" component={Akun} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Donasi" component={Donasi} />
      <Drawer.Screen
        name="Pembayaran"
        options={{ headerShown: false }}
        component={Pembayaran}
      />
      <Drawer.Screen
        name="Artikel"
        component={Artikel}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function onDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Akun" component={Akun} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}
function NaviStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#e6f2ed",
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#3EA898",
            alignSelf: "center",
            marginLeft: "14%",
          },
          headerLeft: () => (
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  color: "#3EA898",
                  // fontFamily: "OpenSans_600SemiBold",
                }}
              >
                <Fontisto name="wallet" size={10} color="#3EA898" /> Saldo anda
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: "blue",
                  // fontFamily: "OpenSans_600SemiBold",
                }}
              >
                {" "}
                Rp. 316.000
              </Text>
            </View>
          ),
          headerTitle: null,
          headerRight: () => (
            <FontAwesome
              name="gear"
              size={30}
              color="#3EA898"
              style={{
                marginRight: 10,
              }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen name="Wallet" component={Wallet} />
    </Stack.Navigator>
  );
}
function NaviStack2({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerStyle: {
            backgroundColor: "#e6f2ed",
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#3EA898",
            alignSelf: "center",
            marginLeft: "14%",
          },
          headerRight: () => (
            <FontAwesome
              name="gear"
              size={30}
              color="#3EA898"
              style={{
                marginRight: 10,
              }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen name="Drawer" component={DrawerNav} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#b3ddcc",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}
function NavigationBottom({ style }) {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#009e86" }}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "#e6f2ed",
          elevation: 0,
          borderColor: "#3EA898",
          shadowOffset: 0,
        },
        labelStyle: {
          color: "#3EA898",
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={NaviStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={"white"} size={20} />
          ),
        }}
      />
      <Bottom.Screen
        name="Wallet"
        component={NaviStack2}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="wallet" color={"white"} size={20} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
function AuthLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  const [isLoading, setLoading] = React.useState(true);
  const [uid2, setUid] = React.useState("");
  const state = React.useContext(State);
  const dispatch = React.useContext(Dispatch);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(!setLoading);
      console.log(uid2, "Sukses");
    }, 500);
    AsyncStorage.getItem("uid").then((val) => {
      setUid(val);
    });
  }, []);

  return (
    <NavigationContainer>
      {state.uid ? <DrawerNav /> : uid2 ? <DrawerNav /> : <AuthLogin />}
    </NavigationContainer>
  );
}

export default Navigation;
