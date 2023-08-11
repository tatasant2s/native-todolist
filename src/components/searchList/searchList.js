import { useContext, useState } from "react"
import { StyleSheet, View, TextInput } from "react-native"
import { Feather } from "react-native-vector-icons"
import { AuthContext } from "../../contexts/auth"

export const SearchList = () => {
  const { setSearch } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.viewBox}>
        <Feather name="search" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Pesquisar uma Tarefa"
          onChangeText={setSearch}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  viewBox: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginTop: 25,
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "#3CB371",
    borderRadius: 20,
    padding: 5,
  },

  textInput: {
    width: "85%",
    marginLeft: 15,
    fontFamily: "PaytoneOne_400Regular",
  },

  icon: {
    padding: 5,
  },
})
