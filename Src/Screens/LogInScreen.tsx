import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";

import Container from "../Components/Container";
import SocialLogin from "../Components/SocialLogin";
import TextInput from "../Components/Forms/TextInput";
import Checkbox from "../Components/Forms/Checkbox";

import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

/*const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );*/

//const passwordValidator = (password: string) => password.length >= 6;

const LogInScreen = () => {
  const footer = (
    <>
      <SocialLogin />
    </>
  );
  return (
    <Container {...{ footer }}>
      <View style={{ padding: 35 }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 25,
          }}
        >
          Welcome back
        </Text>
        <Text
          style={{
            marginBottom: 25,
            color: "#fff",
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
          {({ handleChange, handleBlur, handleSubmit, errors, touched, values, setFieldValue, }) => (
            <View>
              <View style={{ marginBottom: 15 }}>
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </View>
              <TextInput
                icon="lock"
                placeholder="Enter your Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox label="Remember me" checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
                <View
                  style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => true}>
                    <Text style={{ color: "skyblue" }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={handleSubmit}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 24,
                    backgroundColor: "#f1ec60",
                    height: 48,
                    marginHorizontal: 32,
                    marginVertical: 0,
                  }}
                >
                  <Text style={{ color: "#000", textAlign: "center" }}>
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
