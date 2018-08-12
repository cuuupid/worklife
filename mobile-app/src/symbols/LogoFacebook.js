import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class LogoFacebook extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 11.95 24.00"
          preserveAspectRatio="none"
          style={styles.fill11}
        >
          <Path strokeWidth={0} fill="rgba(251,251,251,1)" isClosed d="" />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  fill11: {
    position: "absolute",
    height: "100.00%",
    width: "49.79%",
    top: "0.00%",
    left: "25.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
