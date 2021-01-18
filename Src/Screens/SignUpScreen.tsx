import React, { useRef, useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";

import Container from "../Components/Views/Container";
import TextInput from "../Components/Forms/TextInput";
import Checkbox from "../Components/Forms/Checkbox";
import {FirebaseContext} from "../Components/Firebase/FirebaseContext"
import {UserContext} from "../Components/Firebase/UserContext"

import * as Yup from "yup";
import Footer from "../Components/Views/Footer";



const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext)
  const [_, setUser] = useContext(UserContext)

  const signUp = async () => {
    setLoading(true);

    const user = { userEmail, userPassword};

    try {
      const createdUser = await firebase.createUser(JSON.stringify(user))

      setUser({...createdUser, isLoggedIn: true})
    }catch (error) {
      console.log("Error @signUp: ", error)
    } finally {
      setLoading(false)
    }
  }
  const footer = (
    <Footer
      title="Already have an account?"
      action="Log In here!"
      onPress={() => navigation.navigate("LogIn")}
    />
  );
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);
  const email = useRef<typeof TextInput>(null);

  return (
    <Container {...{ footer }}>
      <View style={{ padding: 35 }}>
        <Text
          style={{
            color: "#121212",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            //marginBottom: 25,
          }}
        >
          Create Account
        </Text>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 25,
            color: "#121212",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "200",
            fontSize: 15,
          }}
        >
          Let us know what your email, and your password
        </Text>
        <Formik
          initialValues={{ email: "", password: "", passwordConfirmation: "" }}
          onSubmit={() => signUp()}
          validationSchema={SignUpSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
            setFieldValue,
          }) => (
            <View>
              <View style={{ marginBottom: 15 }}>
                <TextInput
                  ref={email}
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  onSubmitEditing={() => password.current?.focus()}
                />
              </View>
              <View style={{ marginBottom: 15 }}>
                <TextInput
                  ref={password}
                  icon="lock"
                  placeholder="Enter your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  secureTextEntry
                  returnKeyType="next"
                  returnKeyLabel="next"
                  keyboardAppearance="dark"
                  onSubmitEditing={() => passwordConfirmation.current?.focus()}
                />
              </View>
              <View style={{ marginBottom: 15 }}>
                <TextInput
                  ref={passwordConfirmation}
                  icon="lock"
                  placeholder="Confirm your Password"
                  onChangeText={handleChange("passwordConfirmation")}
                  onBlur={handleBlur("passwordConfirm")}
                  error={errors.passwordConfirmation}
                  touched={touched.passwordConfirmation}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  secureTextEntry
                  returnKeyType="go"
                  returnKeyLabel="go"
                  keyboardAppearance="dark"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>

              <TouchableOpacity onPress={handleSubmit}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 24,
                    backgroundColor: "#121212",
                    height: 48,
                    //marginHorizontal: 32,
                    //marginVertical: 0,
                  }}
                >
                  <Text style={{ color: "#f1ec60", textAlign: "center" }}>
                    Create your account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
