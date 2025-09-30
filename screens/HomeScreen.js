import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Icon name="upload" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.uploadText}>Upload document</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recent Document</Text>
      <ScrollView style={styles.docList}>
        <View style={styles.docItem}>
          <Icon name="file-pdf-box" size={28} color="#ff5555" />
          <View style={{ flex: 1, marginLeft: 10 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1624",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
