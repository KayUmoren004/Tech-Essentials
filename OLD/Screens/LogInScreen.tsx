import React, { PureComponent } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface Props {
  navigation: any;
}

export class LogInScreen extends PureComponent<Props> {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={{ backgroundColor: "#121212" }}>
            <View style={styles.popup}>
              <View style={styles.header}>
                <Image
                  style={styles.Logo}
                  source={require("../assets/icon.png")}
                />
                <Text style={styles.Text}>
                  Welcome back, log in to continue...
                </Text>
              </View>

              <View style={styles.AuthView}>
                <View style={styles.Auth_Container}>
                  <Text style={styles.Auth_Text}>Email</Text>
                  <TextInput
                    style={styles.Auth_Field}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType="email-address"
                    onChangeText={(email) =>
                      this.setState({
                        email: email,
                      })
                    }
                    value={this.state.email}
                  />
                </View>

                <View style={styles.Auth_Container}>
                  <Text style={styles.Auth_Text}>Password</Text>
                  <TextInput
                    style={styles.Auth_Field}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) =>
                      this.setState({
                        password: password,
                      })
                    }
                    value={this.state.password}
                  />
                </View>
                <TouchableOpacity>
                  <View style={styles.Auth_Btn}>
                    <Text style={styles.Auth_Text}>Log In</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 16 }}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <View>
                    <Text style={{ textAlign: "center", fontSize: 13 }}>
                      New to Tech Essentials?{" "}
                      <Text style={{ fontWeight: "bold", color: "#656307" }}>
                        Sign Up Here
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    //height:"100%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    elevation: 10,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignSelf: "center",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  AuthView: {
    //alignItems:"flex-start"
  },
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // marginRight:10,
    marginBottom: 10,
  },
  Text: {
    fontWeight: "200",
    fontSize: 32,
    textAlign: "center",
  },
  Auth_Text: {
    color: "#222",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "300",
  },
  Auth_Container: {
    marginBottom: 32,
  },
  Auth_Field: {
    borderBottomColor: "#222",
    borderBottomWidth: 0.5,
    height: 48,
  },
  Auth_Btn: {
    alignItems: "center",
    marginTop: 0,
    marginRight: 32,
    marginLeft: 32,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#F1EC40",
    height: 48,
  },
});

export default LogInScreen;
