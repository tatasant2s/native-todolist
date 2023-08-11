import "react-native-gesture-handler"
import { StatusBar } from "react-native"
import { Routes } from "./src/routes"
import AuthProvider from "./src/contexts/auth"

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar />
    </>
  )
}
