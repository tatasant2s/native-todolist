import React, { createContext, useState } from "react"

export const AuthContext = createContext([])

function AuthProvider({ children }) {
  const [list, setList] = useState([])
  const [search, setSearch] = useState("")

  function handleDelete(id) {
    const newList = list
      .filter((item, i) => i !== id - 1)
      .map((item, i) => {
        return { name: item.name, id: i + 1 }
      })

    console.log("Nova lista: ", newList)

    setList(newList)
  }

  function handleDeleteList(list) {
    setList((prevState) => prevState.filter((item, i) => i === list))
  }

  return (
    <AuthContext.Provider
      value={{
        list,
        setList,
        search,
        setSearch,
        handleDelete,
        handleDeleteList,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
