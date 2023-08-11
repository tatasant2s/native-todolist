import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export const ExcluirList = ({ id }) => {
  const { handleDeleteList } = useContext(AuthContext)

  function handleExcluirList() {
    handleDeleteList(id)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonInput} onPress={handleExcluirList}>
        <Text style={styles.textList}> Excluir Lista </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonInput: {
    width: 115,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    border: "#3CB371",
    borderRadius: 20,
    backgroundColor: "#3CB371",
    marginTop: 15,
  },

  textList: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
    color: "white",
  },
})
