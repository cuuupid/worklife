import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default class ButtonInactive extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 327.00 52.00"
          preserveAspectRatio="none"
          style={styles.button220X442}
        >
          <Path strokeWidth={0} fill="rgba(198,203,212,1)" isClosed d="" />
        </Svg>
        <Text style={styles.text2}>Get Started</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  button220X442: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text2: {
    position: "absolute",
    top: "32.69%",
    left: "6.42%",
    height: "38.46%",
    width: "87.16%",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Book",
    lineHeight: 20,
    textAlign: "center"
  }
});
