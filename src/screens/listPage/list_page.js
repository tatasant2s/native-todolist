import { useContext } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"
import { Card } from "../../components/cardList/cardList"
import { AuthContext } from "../../contexts/auth"
import { ExcluirList } from "../../components/excluirList/excluirList"
import { SearchList } from "../../components/searchList/searchList"

export const ListPage = () => {
  const { list } = useContext(AuthContext)
  const { search } = useContext(AuthContext)

  function handleSearch(word) {
    if (search === "") {
      return word
    } else if (word.name.toLowerCase().includes(search.toLowerCase())) {
      return word
    }
  }

  return (
    <ScrollView>
      <View style={styles.listItem}>
        <SearchList />
        {list
          .filter((word) => handleSearch(word))
          .map((item, index) => (
            <Card key={index} id={item.id} name={item.name} />
          ))}
      </View>

      <View style={styles.viewList}>
        {list.length === 0 && (
          <Text style={styles.textItem}>
            Nenhuma tarefa, crie uma nova tarefa.
          </Text>
        )}
        {!!list.length > 0 && (
          <ExcluirList handleDeleteList={() => handleDeleteList()} />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
  },

  viewList: {
    alignItems: "center",
    marginBottom: 20,
  },

  textItem: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 17,
    marginTop: 30,
  },
})
