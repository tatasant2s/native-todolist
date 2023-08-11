import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBar: {
    height: 70,
    backgroundColor: "#3CB371",
    justifyContent: "center",
    alignItems: "center",
  },

  textNavBar: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 24,
  },

  boxInput: {
    alignItems: "center",
    marginTop: 230,
  },

  textInput: {
    width: "80%",
    height: 55,
    padding: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: "#3CB371",
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 16,
  },

  viewTarefa: {
    alignItems: "center",
    marginTop: 15,
  },

  addTarefa: {
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#3CB371",
    backgroundColor: "red",
  },

  textTarefa: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
    color: "white",
    padding: 10,
  },

  scroll: {
    marginTop: 50,
  },

  bottonExc: {
    alignItems: "center",
    marginBottom: 30,
  },
})
