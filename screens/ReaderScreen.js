import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function ReaderScreen({ route }) {
  const { text = "" } = route.params || {};
  const [loading, setLoading] = useState(true);
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    // Simula carregamento do texto
    if (text) {
      setTimeout(() => {
        setConteudo(text);
        setLoading(false);
      }, 800); // meio segundo só para dar tempo de mostrar o spinner
    } else {
      setLoading(false);
    }
  }, [text]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bfff" />
        <Text style={{ color: "#fff", marginTop: 10 }}>
          Carregando texto...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>
          {conteudo.split(" ").map((word, index) => (
            <Text
              key={index}
              style={styles.word}
              onPress={() => console.log("Pressed word:", word)}
            >
              {word}{" "}
            </Text>
          ))}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f1624", padding: 20 },
  scroll: { flex: 1 },
  text: { color: "#fff", fontSize: 18, lineHeight: 28 },
  word: { color: "#8be9fd" },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1624",
  },
});
