import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import {
  useWindowDimensions,
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
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  // Responsive sizing
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

    if (email === "test.email@gmail.com" && password === "123456") {
      alert("Login Successful");
      navigation.replace("Home");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              {/* Main container with dark background */}
              <View style={[styles.container, { justifyContent: "center" }]}>
                <Text
                  style={[
                    styles.title,
                    { fontSize: titleFont, marginBottom: titleMarginBottom },
                  ]}
                >
                  Welcome Back
                </Text>

                {/* Email Field */}
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
                    placeholderTextColor="#8be9fd"
                    value={email}
                    onChangeText={setEmail}
                  />
                </Animatable.View>

                {/* Password Field */}
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

                {/* Login Button */}
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

                {/* Links */}
                <Animatable.View
                  animation="fadeInUp"
                  delay={600}
                  duration={1000}
                  style={{ alignItems: "center" }}
                >
                  <Text style={[styles.link, { marginBottom: linkMargin }]}>
                    Forgot password?
                  </Text>
                </Animatable.View>
                <Animatable.View
                  animation={"fadeInUp"}
                  delay={800}
                  duration={1000}
                  style={{ alignItems: "center" }}
                >
                  <Text style={[styles.signup, { fontSize: signupFont }]}>
                    Don't have an account?{" "}
                    <Text
                      style={[styles.signupBold, { fontSize: signupBoldFont }]}
                    >
                      Sign up
                    </Text>
                  </Text>
                </Animatable.View>
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
    backgroundColor: "#0f1624", // Dark background
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
    textAlign: "center",
  },
  signup: {
    color: "#fff",
    textAlign: "center",
  },
  signupBold: {
    fontWeight: "bold",
    color: "#fff",
  },
});
