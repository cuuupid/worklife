import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import LogoGoogle from "./LogoGoogle";
import { View, Text, StyleSheet } from "react-native";

export default class ButtonIcon extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.buttonCopy5}>
          <Svg
            viewBox="0 0 327.00 52.00"
            preserveAspectRatio="none"
            style={styles.button220X444}
          >
            <Path strokeWidth={0} fill="rgba(75,116,255,1)" isClosed d="" />
          </Svg>
          <Text style={styles.text4}>LinkedIn</Text>
        </View>
        <LogoGoogle style={styles.linkedinIcon1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  buttonCopy5: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  button220X444: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text4: {
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
  },
  linkedinIcon1: {
    position: "absolute",
    top: "26.92%",
    left: "4.28%",
    height: "46.15%",
    width: "7.34%",
    backgroundColor: "transparent"
  }
});
