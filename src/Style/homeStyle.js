import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  viewHome: {
    flex: 1,
    backgroundColor: "#e6f2ed",
  },
  carouselContainer: {
    height: 200,
  },

  carousel: {
    flex: 1,
  },
  viewCard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
  viewCard2: {
    width: "50%",
    borderRadius: 10,
  },
  viewText: {
    width: "95%",
    backgroundColor: "white",
    // height: "100%",
    marginBottom: "5%",
    padding: "5%",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },
  viewText2: {
    width: "95%",
    backgroundColor: "white",
    height: "100%",
    padding: "5%",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },
  text1: {
    fontSize: 20,
    // fontFamily: "OpenSans_600SemiBold",
    color: "#4A5566",
    margin: 10,
  },
  textDonate: {
    fontSize: 10,
    // fontFamily: "OpenSans_600SemiBold",
    marginTop: "2%",
  },
  textDonate2: {
    textAlign: "center",
    color: "white",
    // fontFamily: "OpenSans_600SemiBold",
  },
  btnDonate: {
    backgroundColor: "green",
    marginTop: "5%",
    padding: "2%",
    borderRadius: 5,
  },
  textTitle: {
    fontSize: 12,
    marginTop: "2%",
    marginBottom: "2%",
    // fontFamily: "OpenSans_600SemiBold",
  },
});
