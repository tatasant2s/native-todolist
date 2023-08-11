import React, { useContext, useState } from "react"
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native"
import { useFonts, PaytoneOne_400Regular } from "@expo-google-fonts/paytone-one"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../../contexts/auth"
import { styles } from "./styles"

export const Home = () => {
  const [tarefa, setTarefa] = useState("")
  const { list, setList } = useContext(AuthContext)
  const [isEditable, setIsEditable] = useState(false)
  const navigation = useNavigation()

  function handleTarefa() {
    const newTarefa = {
      name: tarefa,
      id: list.length + 1,
    }

    console.log(newTarefa)
    if (handleComparetion(newTarefa)) {
      if (handleVazio(newTarefa)) {
        setTarefa("")
        tarefaInputText.clear()
      } else {
        setTarefa("")
        tarefaInputText.clear()
        setList((prevState) => [...prevState, newTarefa])
      }
    }
  }

  function handleComparetion(newTarefa) {
    if (list.findIndex((l) => l.name === newTarefa.name) === -1) {
      return true
    } else {
      alert("Já contém está tarefa na lista!")
      return false
    }
  }

  function handleVazio(newTarefa) {
    if (newTarefa.name === "") {
      alert("Campo vazio, preencha com uma nova tarefa!")
      return true
    } else {
      return false
    }
  }

  function handleUpdateState() {
    setIsEditable(!isEditable)
  }

  function openScreen() {
    navigation.navigate("ListPage", { paramKey: list })
  }

  let [fontsLoaded] = useFonts({
    // importar fonte
    PaytoneOne_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.textNavBar}> To Do List </Text>
        </View>

        <View style={styles.boxInput}>
          <TextInput
            enterKeyHint="enter"
            onChangeText={setTarefa}
            onContentSizeChange={handleUpdateState}
            ref={(nextTarefaInput) => (tarefaInputText = nextTarefaInput)}
            placeholder={
              isEditable ? "Insira uma Tarefa" : "Entrada Desabilitada"
            }
            style={styles.textInput}
          ></TextInput>
        </View>

        <View style={styles.viewTarefa}>
          <TouchableOpacity
            style={[
              styles.addTarefa,
              {
                backgroundColor: isEditable ? "#3CB371" : "#006400",
              },
            ]}
            disabled={!isEditable}
            onPress={handleTarefa}
          >
            <Text style={styles.textTarefa}> Criar Tarefa </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
