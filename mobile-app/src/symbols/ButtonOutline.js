import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default class ButtonOutline extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 329.00 54.00"
          preserveAspectRatio="none"
          style={styles.button220X443}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(75,116,255,1)"
            isClosed
            d=""
          />
        </Svg>
        <Text style={styles.text3}>Get Started</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  button220X443: {
    position: "absolute",
    height: "101.92%",
    width: "100.31%",
    top: "-0.96%",
    left: "-0.15%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text3: {
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
