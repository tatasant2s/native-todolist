import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Feather } from "react-native-vector-icons"
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export const Card = ({ id, name }) => {
  const { handleDelete } = useContext(AuthContext)

  function handleExcluir() {
    handleDelete(id)
  }

  return (
    <View style={styles.container}>
      <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}
        style={styles.card}
      >
        <TouchableOpacity>
          <Text style={styles.text}>
            {id} - {name}
          </Text>
          <View style={styles.cardDelete}>
            <TouchableOpacity onPress={handleExcluir}>
              <Feather name="trash-2" size={26} color="#3CB371" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },

  card: {
    width: "100%",
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: "#3CB371",
    padding: 10,
  },

  text: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 16,
    marginLeft: 5,
  },

  cardDelete: {
    position: "absolute",
    right: 0,
  },
})
