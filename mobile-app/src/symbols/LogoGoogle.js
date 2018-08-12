import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class LogoGoogle extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 23.50 24.00"
          preserveAspectRatio="none"
          style={styles.path28}
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
  path28: {
    position: "absolute",
    height: "100.00%",
    width: "97.92%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
