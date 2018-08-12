import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class IconPhone extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.phone}>
          <Svg
            viewBox="0 0 24.00 24.00"
            preserveAspectRatio="none"
            style={styles.shape6}
          >
            <Path strokeWidth={0} fill="transparent" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 18.00 18.00"
            preserveAspectRatio="none"
            style={styles.phone1}
          >
            <Path strokeWidth={0} fill="rgba(255,255,255,1)" isClosed d="" />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  phone: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  shape6: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  phone1: {
    position: "absolute",
    height: "75.00%",
    width: "75.00%",
    top: "12.50%",
    left: "12.50%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
