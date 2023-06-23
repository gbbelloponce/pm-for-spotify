import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Playlist Manager</Text>
      <Text style={styles.subtitle}>
        for <Text style={styles.spotify}>Spotify</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "600",
  },
  spotify: {
    color: "#5F5",
    fontWeight: "bold",
  },
})
