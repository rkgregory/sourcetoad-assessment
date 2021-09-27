import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DisplayWindow = ({ display, fontSize }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.display, { fontSize: fontSize }]}>{display}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  display: {
    fontSize: 70,
    color: "white",
    textAlign: "right",
    fontFamily: "Helvetica",
    fontWeight: "300",
  },
});

export default DisplayWindow;
