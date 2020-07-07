import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  viewArtikel: {
    flex: 1,
    flexDirection: "column",
  },
  viewTextTitle: {
    margin: 10,
  },
  textTitle: {
    fontSize: 25,
    fontFamily: "OpenSans_600SemiBold",
    color: "#4A5566",
  },
  progress: {
    width: "95%",
    margin: 10,
    marginLeft: "0%",
  },
  btnDonate: {
    backgroundColor: "#00AEEF",
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "3%",
  },
  textBtnDonate: {
    color: "white",
    fontFamily: "OpenSans_600SemiBold",
  },
  text1: {
    fontSize: 15,
    color: "green",
    fontFamily: "OpenSans_600SemiBold",
  },
  text2: {
    fontSize: 15,
    color: "red",
    fontFamily: "OpenSans_600SemiBold",
  },
  text3: {
    fontFamily: "OpenSans_400Regular",
    color: "#4A5566",
  },
  viewOpacity: {
    width: "100%",
    height: 300,
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.3,
  },
  viewTextDonate: {
    backgroundColor: "white",
    width: "95%",
    padding: "2%",
    margin: 10,
  },
  viewTextCerita: { backgroundColor: "white", width: "100%", padding: "2%" },
  iconArrow: {
    position: "absolute",
    margin: "10%",
    marginLeft: "3%",
  },
  textNumDonate: {
    fontSize: 10,
    fontFamily: "OpenSans_600SemiBold",
  },
  textCerita: {
    marginBottom: "2%",
    fontSize: 20,
    fontFamily: "OpenSans_600SemiBold",
  },
  img2: {
    width: "100%",
    height: 200,
    marginTop: "2%",
    marginBottom: "2%",
  },
  textDonasi: {
    fontFamily: "OpenSans_600SemiBold",
    marginBottom: "2%",
    fontSize: 20,
  },
  textNoDonasi: {
    textAlign: "center",
    margin: 30,
    color: "#4A5566",
    fontFamily: "OpenSans_600SemiBold",
  },
});
