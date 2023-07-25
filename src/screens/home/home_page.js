import React, { useState } from "react"
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { useFonts, PaytoneOne_400Regular } from "@expo-google-fonts/paytone-one"
import { styles } from "./styles"
import { Card } from "../../components/cardList/cardList"
import { ExcluirList } from "../../components/excluirList/excluirList"

export const Home = () => {
  const [tarefa, setTarefa] = useState("")
  const [list, setList] = useState([])
  const [isEditable, setIsEditable] = useState(false)

  function handleTarefa() {
    const newTarefa = {
      name: tarefa,
      id: list,
    }

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

  function handleDelete(index) {
    setList((prevState) => prevState.filter((item, i) => i !== index))
  }

  function handleDeleteList(index) {
    setList((prevState) => prevState.filter((item, i) => i === index))
  }

  function handleUpdateState() {
    setIsEditable(!isEditable)
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
            onChangeText={setTarefa}
            ref={(nextTarefaInput) => (tarefaInputText = nextTarefaInput)}
            placeholder={
              isEditable ? "Insira uma Tarefa" : "Entrada Desabilitada"
            }
            style={styles.textInput}
            onContentSizeChange={handleUpdateState}
          ></TextInput>
        </View>

        <View style={styles.viewTarefa}>
          <Pressable
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
          </Pressable>
        </View>

        <ScrollView style={styles.scroll}>
          <View style={styles.listItem}>
            {list.map((item, index) => (
              <Card
                key={item.id}
                id={index + 1}
                name={item.name}
                handleDelete={() => handleDelete(index)}
              />
            ))}
          </View>

          <View style={styles.bottonExc}>
            {!!list.length && (
              <ExcluirList handleDeleteList={() => handleDeleteList()} />
            )}
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}
