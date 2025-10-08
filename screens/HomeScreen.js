import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Button Upload */}
        <View style={styles.header}>
          <Text style={styles.title}>Language Learning</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={["#33ccff", "#003366"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBorder}
            >
              <View style={styles.innerButton}>
                <Icon
                  name="upload"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.uploadText}>Upload document</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Recent Document */}
        <Text style={styles.sectionTitle}>Recent Document</Text>
        <ScrollView style={styles.docList}>
          <View style={styles.docItem}>
            <Icon name="file-pdf-box" size={28} color="#ff5555" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.docName}>Sample.pdf</Text>
              <Text style={styles.docPreview}>
                Our solar system is made up of the Sun and the objects that
                orbit it...
              </Text>
            </View>
            <Text style={styles.docTime}>12 min</Text>
          </View>
        </ScrollView>

        <View style={styles.player}>
          <TouchableOpacity>
            <Icon name="skip-backward" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="play-circle" size={48} color="#00bfff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="skip-forward" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.playerTime}>0:45 / 12:03</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1624",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  gradientBorder: {
    padding: 2,
    borderRadius: 12,
    width: "86%",
    alignSelf: "center",
    shadowColor: "#00bfff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },

  innerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f1624",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  uploadText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },

  docList: {
    flex: 1,
  },

  docItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a2236",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  docName: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  docPreview: { color: "#8be9fd", fontSize: 14 },
  docTime: { color: "#888", fontSize: 12 },
  player: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  playerTime: {
    color: "#fff",
    fontSize: 14,
  },
});
