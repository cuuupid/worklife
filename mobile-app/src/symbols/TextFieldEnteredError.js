import React, { Component } from "react";
import Password from "./Password";
import DividerRed from "./DividerRed";
import { View, Text, StyleSheet } from "react-native";

export default class TextFieldEnteredError extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Password style={styles.password1} />
        <DividerRed style={styles.dividerGrey2} />
        <Text style={styles.inputTitleCopy3}>Password</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  password1: {
    position: "absolute",
    top: "57.69%",
    left: "0.31%",
    height: "11.54%",
    width: "18.96%",
    backgroundColor: "transparent"
  },
  dividerGrey2: {
    position: "absolute",
    top: "98.08%",
    left: "0.00%",
    height: "1.92%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  inputTitleCopy3: {
    position: "absolute",
    top: -7,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Avenir-Book",
    lineHeight: 20,
    textAlign: undefined
  }
});
