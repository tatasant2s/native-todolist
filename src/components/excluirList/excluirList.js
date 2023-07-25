import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

export const ExcluirList = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.tchInput}
          onPress={props.handleDeleteList}
        >
          <Text style={styles.textList}> Excluir Lista </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tchInput: {
    width: 115,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    border: "#3CB371",
    borderRadius: 10,
    backgroundColor: "#3CB371",
    marginTop: 15,
  },

  textList: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
    color: "white",
  },
})
