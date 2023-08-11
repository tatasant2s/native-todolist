import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "react-native-vector-icons"
import { Home } from "../screens/home/home_page"
import { ListPage } from "../screens/listPage/list_page"
import { useNavigation } from "@react-navigation/native"

const { Screen, Navigator } = createBottomTabNavigator()

export function TabRoutes() {
  const navigation = useNavigation()

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3CB371",
        tabBarInactiveTintColor: "#093409",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela Principal",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="ListPage"
        component={ListPage}
        options={{
          title: "Tarefas",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "PaytoneOne_400Regular",
            fontSize: 24,
          },
          headerStyle: { backgroundColor: "#3CB371", height: 70 },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.arrowLeft}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" color="black" size={30} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  arrowLeft: {
    padding: 5,
  },
})
