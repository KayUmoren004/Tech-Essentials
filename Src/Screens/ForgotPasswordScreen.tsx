import { Linking } from 'expo';
import { Formik } from 'formik';
import React from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import Container from '../Components/Container';
import Footer from '../Components/Footer';
import * as Yup from "yup";
import TextInput from '../Components/Forms/TextInput';

interface ForgotPasswordScreenProps {
    navigation: any;
}

const sheight = 48

const ForgotPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

const ForgotPasswordScreen = ({navigation}: ForgotPasswordScreenProps) => {
    const footer = (
        <Footer
          title="Didn't work?"
          action="Try another way"
          onPress={() => Linking.openURL("mailto:umorenkay@gmail.com")}
        />
      );
    return (
        <Container {...{footer}}>
           <View style={{padding: 35, justifyContent:"center", flex:1}}>
           <Text
          style={{
            color: "#121212",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            //marginBottom: 25,
          }}
        >
          Forgot password?
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
          Enter the email address associated with your account
        </Text>
           <Formik
          initialValues={{ email: "", password: "", remember: true }}
          onSubmit={(values) => console.log(values)}
          validationSchema={ForgotPasswordSchema}
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
                  returnKeyType="done"
                  returnKeyLabel="done"
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>

              <TouchableOpacity onPress={() => handleSubmit} style={{justifyContent:"center", alignItems:"center"}}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 24,
                    backgroundColor: "#121212",
                    height: sheight,
                    width: "70%",
                    alignContent:"center"
                    //marginHorizontal: 32,
                    //marginVertical: 0,
                  }}
                >
                  <Text style={{ color: "#f1ec60", textAlign: "center" }}>
                    Reset password
                  </Text>
                </View>
              </TouchableOpacity>
              </View>
          )}
          </Formik>
           </View>
        </Container>
    )
}

export default ForgotPasswordScreen
