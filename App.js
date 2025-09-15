import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { width, height } = useWindowDimensions();
  const titleMarginBottom = Math.min(height * 0.05, 40);
  const titleFont = Math.min(width * 0.1, 32);
  const inputFont = Math.min(width * 0.045, 18);
  const buttonFont = Math.min(width * 0.05, 20);
  const signupFont = Math.min(width * 0.045, 16);
  const signupBoldFont = Math.min(width * 0.05, 18);
  const linkMargin = Math.min(height * 0.03, 30);
  const buttonPaddingV = Math.min(height * 0.02, 18);
  const buttonPaddingH = Math.min(width * 0.08, 30);
  const buttonMarginTop = Math.min(height * 0.015, 10);
  const buttonMarginBottom = Math.min(height * 0.025, 20);
  const inputPaddingH = Math.min(width * 0.05, 20);
  const inputPaddingV = Math.min(height * 0.015, 10);

  const handleLogin = () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }
    alert("Login Sucessful"); // Handle login logic here
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              <View
                style={[
                  styles.container,
                  { padding: Math.min(width * 0.05, 20) },
                ]}
              >
                <Text
                  style={[
                    styles.title,
                    {
                      fontSize: titleFont,
                      marginBottom: titleMarginBottom,
                    },
                  ]}
                >
                  Welcome Back
                </Text>
                <Animatable.View
                  animation="fadeInUp"
                  duration={1000}
                  style={[
                    styles.inputBox,
                    {
                      borderRadius: Math.min(width * 0.05, 20),
                      maxWidth: width * 0.9,
                      paddingHorizontal: inputPaddingH,
                      paddingVertical: inputPaddingV,
                    },
                  ]}
                >
                  <Icon
                    name="email-outline"
                    size={24}
                    color="#00bfff"
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                    style={[styles.input, { fontSize: inputFont }]}
                    placeholder="Email"
                    placeholderTextColor={"#8be9fd"}
                    value={email}
                    onChangeText={setEmail}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInUp"
                  delay={200}
                  duration={1000}
                  style={[
                    styles.inputBox,
                    {
                      borderRadius: Math.min(width * 0.05, 20),
                      maxWidth: width * 0.9,
                      paddingHorizontal: inputPaddingH,
                      paddingVertical: inputPaddingV,
                    },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Icon
                      name="lock-outline"
                      size={24}
                      color="#00bfff"
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      style={[styles.input, { flex: 1, fontSize: inputFont }]}
                      placeholder="Password"
                      placeholderTextColor="#8be9fd"
                      secureTextEntry={!passwordVisible}
                      value={password}
                      onChangeText={setPassword}
                    />
                  </View>

                  {/* Eye */}
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  >
                    <Icon
                      name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                      size={24}
                      color="#00bfff"
                    />
                  </TouchableOpacity>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInUp"
                  delay={400}
                  duration={1000}
                  style={{ alignItems: "center" }}
                >
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        borderRadius: Math.min(width * 0.05, 20),
                        paddingVertical: buttonPaddingV,
                        paddingHorizontal: buttonPaddingH,
                        marginTop: buttonMarginTop,
                        marginBottom: buttonMarginBottom,
                      },
                    ]}
                    onPress={handleLogin}
                  >
                    <Text style={[styles.buttonText, { fontSize: buttonFont }]}>
                      Log in
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>

                <Text style={[styles.link, { marginBottom: linkMargin }]}>
                  Forgot password?
                </Text>

                <Text style={[styles.signup, { fontSize: signupFont }]}>
                  Don't have an account?{" "}
                  <Text
                    style={[styles.signupBold, { fontSize: signupBoldFont }]}
                  >
                    Sign up
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1624",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  inputBox: {
    backgroundColor: "#1a2236",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#00bfff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#00bfff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  input: {
    flex: 1,
    color: "#fff",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#00bfff",
    alignItems: "center",
    shadowColor: "#00bfff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  link: {
    color: "#8be9fd",
  },
  signup: {
    color: "#fff",
  },
  signupBold: {
    fontWeight: "bold",
    color: "#fff",
  },
});
