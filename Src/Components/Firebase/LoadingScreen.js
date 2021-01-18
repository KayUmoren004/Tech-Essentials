import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import Text from "./Text";
import { UserContext } from "./UserContext"
import { FirebaseContext} from "./FirebaseContext"

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        setTimeout(async () => {
         /* const user = firebase.getCurrentUser()

          if (user) {
            const userInfo = await firebase.getUserInfo(user.uid)

            setUser({
              isLoggedIn: true,
              Email: userInfo.email,
              uid:user.uid,
              name:userInfo.name,
              profilePhotoUrl:userInfo.profilePhotoUrl
            })
          } else {
            setUser((state) => ({...state, isLoggedIn: false}))
          } */
          setUser((state) => ({...state, isLoggedIn: false}))
        }, 500)
    }, []);

  return (
    <Container>
      <Text title color="#FFFFFF">
        Tech Essentials
      </Text>

      <LottieView
        source={require("../../Assets/loadingAnimation.json")}
        autoPlay
        loop
        style={{width:"100%"}}
        />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`;
