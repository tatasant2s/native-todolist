import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Feather } from "react-native-vector-icons"
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated"

export const Card = (props) => {
  return (
    <View style={styles.container}>
      <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}
        style={styles.card}
      >
        <TouchableOpacity>
          <View>
            <Text style={styles.text}>
              {props.id} -  {props.name}
            </Text>
          </View>
          <View style={styles.cardDelete}>
            <TouchableOpacity onPress={props.handleDelete}>
              <Feather
                name="trash-2"
                size={26}
                color="#3CB371"
                style={styles.delete}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },

  card: {
    width: "100%",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
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
