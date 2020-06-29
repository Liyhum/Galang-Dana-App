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
    fontSize: 25,
    margin: "2%",
    marginLeft: "2%",
    color: "black",
    fontWeight: "bold",
  },
  textDonate: {
    fontSize: 10,
  },
  textDonate2: {
    textAlign: "center",
    color: "white",
  },
  btnDonate: {
    backgroundColor: "green",
    marginTop: "5%",
    padding: "2%",
    borderRadius: 5,
  },
});