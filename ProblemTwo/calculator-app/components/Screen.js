import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
