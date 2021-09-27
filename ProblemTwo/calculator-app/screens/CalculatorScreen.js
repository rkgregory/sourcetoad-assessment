import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import Button from "../components/Button";
import OutputWindow from "../components/OutputWindow";

import formatNumber from "../utils/formatNumber";

const CalculatorScreen = () => {
  const [output, setOutput] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (value) => () => {
    const num = parseFloat(output);

    if (value === "AC") {
      setOutput("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value === "±") {
      setOutput((num * -1).toString());
      return;
    }

    if (value === "%") {
      setOutput((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value === ".") {
      if (output.includes(".")) {
        return;
      }

      setOutput(output + ".");
      return;
    }

    if (value === "+") {
      if (operator != null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(output));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(output));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(output));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(output));
        }
      } else {
        setMemory(parseFloat(output));
      }

      setOutput("0");
      setOperator("+");
      return;
    }

    if (value === "-") {
      if (operator != null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(output));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(output));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(output));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(output));
        }
      } else {
        setMemory(parseFloat(output));
      }
      setOutput("0");
      setOperator("-");
      return;
    }

    if (value === "×") {
      if (operator != null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(output));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(output));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(output));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(output));
        }
      } else {
        setMemory(parseFloat(output));
      }
      setOutput("0");
      setOperator("×");
      return;
    }

    if (value === "÷") {
      if (operator != null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(output));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(output));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(output));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(output));
        }
      } else {
        setMemory(parseFloat(output));
      }
      setOutput("0");
      setOperator("÷");
      return;
    }

    if (value === "=") {
      if (!operator) return;

      if (operator === "+") {
        setOutput((memory + parseFloat(output)).toString());
      } else if (operator === "-") {
        setOutput((memory - parseFloat(output)).toString());
      } else if (operator === "×") {
        setOutput((memory * parseFloat(output)).toString());
      } else if (operator === "÷") {
        setOutput((memory / parseFloat(output)).toString());
      }

      setMemory(null);
      setOperator(null);
      return;
    }

    if (output[output.length - 1] === ".") {
      setOutput(output + value);
    } else {
      setOutput(parseFloat(num + value).toString());
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.calcContainer}>
        <View style={styles.outputContainer}>
          <OutputWindow
            display={formatNumber(output)}
            fontSize={output.length > 8 ? 58 : 68}
          />
        </View>

        <View styles={styles.keypad}>
          <View style={styles.btnRow}>
            <Button
              onPress={handleButtonPress}
              value="AC"
              color="black"
              backgroundColor="#a5a5a5"
            />
            <Button
              onPress={handleButtonPress}
              value="±"
              color="black"
              backgroundColor="#a5a5a5"
            />
            <Button
              onPress={handleButtonPress}
              value="%"
              color="black"
              backgroundColor="#a5a5a5"
            />
            <Button onPress={handleButtonPress} value="÷" />
          </View>
          <View style={styles.btnRow}>
            <Button
              onPress={handleButtonPress}
              value="7"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="8"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="9"
              backgroundColor="#333333"
            />
            <Button onPress={handleButtonPress} value="×" />
          </View>
          <View style={styles.btnRow}>
            <Button
              onPress={handleButtonPress}
              value="4"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="5"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="6"
              backgroundColor="#333333"
            />
            <Button onPress={handleButtonPress} value="-" />
          </View>
          <View style={styles.btnRow}>
            <Button
              onPress={handleButtonPress}
              value="1"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="2"
              backgroundColor="#333333"
            />
            <Button
              onPress={handleButtonPress}
              value="3"
              backgroundColor="#333333"
            />
            <Button onPress={handleButtonPress} value="+" />
          </View>
          <View style={styles.btnRow}>
            <Button
              onPress={handleButtonPress}
              value="0"
              backgroundColor="#333333"
              style={{ flex: 2 }}
            />
            <Button
              onPress={handleButtonPress}
              value="."
              backgroundColor="#333333"
            />

            <Button onPress={handleButtonPress} value="=" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calcContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  keypad: {
    flex: 1,
  },
  outputContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default CalculatorScreen;
