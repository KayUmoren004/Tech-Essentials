import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";

import Container from "../Components/Views/Container";
import TextInput from "../Components/Forms/TextInput";
import Checkbox from "../Components/Forms/Checkbox";

import * as Yup from "yup";
import Footer from "../Components/Views/Footer";

interface User {
  email: string;
  password: string;
  loading: boolean;
  
}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LogInScreen = ({ navigation }: { navigation: any }) => {
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here!"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  const password = useRef<typeof TextInput>(null);

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
          Welcome back
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
          Use your credentials below and login to your account
        </Text>
        <Formik
          initialValues={{ email: "", password: "", remember: true }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
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
                onSubmitEditing={() => handleSubmit()}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <View
                  style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={{ color: "blue" }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleSubmit}>
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
                    Log into your account
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

export default LogInScreen;

const styles = StyleSheet.create({});
