import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBar: {
    height: "10%",
    backgroundColor: "#3CB371",
    justifyContent: "center",
    alignItems: "center",
  },

  textNavBar: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 25,
  },

  boxInput: {
    marginTop: 150,
    alignItems: "center",
  },

  textInput: {
    width: "80%",
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#3CB371",
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 16,
  },

  viewTarefa: {
    marginTop: 15,
    alignItems: "center",
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

  listItem: {
    alignItems: "center",
  },

  bottonExc: {
    alignItems: "center",
    marginBottom: 30,
  },
})
