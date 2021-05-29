import React, { useState } from "react";
import { StatusBar } from "react-native";
import SocialLoginScreen from "./lib/SocialLoginScreen";

const App = () => {
  const [isLoginButtonSpinner, setIsLoginButtonSpinner] = useState(false);
  const [isSigninButtonSpinner, setIsSigninButtonSpinner] = useState(false);

  const [isFacebookSpinner, setIsFacebookSpinner] = useState(false);
  const [isDiscordSpinner, setIsDiscordSpinner] = useState(false);
  const [isGoogleSpinner, setIsGoogleSpinner] = useState(false);
  const [isTwitterSpinner, setIsTwitterSpinner] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" translucent hidden />
      <SocialLoginScreen
        onNewEmailChangeText={(newEmail) =>
          console.log("New email: ", newEmail)
        }
        onNewUsernameChangeText={(newUsername) =>
          console.log("New username: ", newUsername)
        }
        onNewPasswordChangeText={(newPassword) =>
          console.log("New password: ", newPassword)
        }
        onUserNameChangeText={(username) => console.log("Username: ", username)}
        onPasswordChangeText={(password) => console.log("Password: ", password)}
        onSignUpPress={() => {}}
        onLoginPress={() => {
          setIsLoginButtonSpinner(true);
          setTimeout(() => {
            setIsLoginButtonSpinner(false);
          }, 2000);
        }}
        onSigninPress={() => {
          setIsSigninButtonSpinner(true);
          setTimeout(() => {
            setIsSigninButtonSpinner(false);
          }, 2000);
        }}
        loginButtonSpinnerVisibility={isLoginButtonSpinner}
        signinButtonSpinnerVisibility={isSigninButtonSpinner}
        onForgotPasswordPress={() => {}}
        rightTopAssetImageSource={require("./assets/ramen.png")}
        leftBottomAssetImageSource={require("./assets/chef.png")}
        enableFacebookLogin
        onFacebookLoginPress={() => {
          setIsFacebookSpinner(true);
          setTimeout(() => {
            setIsFacebookSpinner(false);
          }, 2000);
        }}
        facebookSpinnerVisibility={isFacebookSpinner}
        discordSpinnerVisibility={isDiscordSpinner}
        twitterSpinnerVisibility={isTwitterSpinner}
        googleSpinnerVisibility={isGoogleSpinner}
        googleSpinnerColor={"#4267B2"}
        enableDiscordLogin
        onDiscordLoginPress={() => {
          setIsDiscordSpinner(true);
          setTimeout(() => {
            setIsDiscordSpinner(false);
          }, 2000);
        }}
        enableTwitterLogin
        onTwitterLoginPress={() => {
          setIsTwitterSpinner(true);
          setTimeout(() => {
            setIsTwitterSpinner(false);
          }, 2000);
        }}
        enableGoogleLogin
        onGoogleLoginPress={() => {
          setIsGoogleSpinner(true);
          setTimeout(() => {
            setIsGoogleSpinner(false);
          }, 2000);
        }}
        loginButtonTextStyle={{
          fontFamily: "Sansita-Bold",
        }}
        signUpTextStyle={{
          fontFamily: "Sansita-Regular",
        }}
        loginTextStyle={{
          fontFamily: "Athelas-Bold",
        }}
        forgotPasswordTextStyle={{
          fontFamily: "Sansita-Bold",
        }}
        signinTextStyle={{
          fontFamily: "Athelas-Bold",
        }}
      />
    </>
  );
};

export default App;
