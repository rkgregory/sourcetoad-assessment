import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({
  backgroundColor = "#fea00a",
  color = "white",
  onPress,
  style,
  value,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        { ...style },
      ]}
      onPress={onPress(value)}
    >
      <Text style={[styles.text, { color: color }]}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 86,
    width: 86,
    borderRadius: 43,
    margin: 5,
  },

  text: {
    fontSize: 30,
    fontWeight: "400",
    fontFamily: "Helvetica",
  },
});

export default Button;
