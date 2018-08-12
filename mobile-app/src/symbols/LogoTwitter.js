import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class LogoTwitter extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 24.00 18.48"
          preserveAspectRatio="none"
          style={styles.twitterIcon}
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
  twitterIcon: {
    position: "absolute",
    height: "77.00%",
    width: "100.01%",
    top: "12.50%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
