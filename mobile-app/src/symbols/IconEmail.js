import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class IconEmail extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 24.00 19.22"
          preserveAspectRatio="none"
          style={styles.email}
        >
          <Path
            strokeWidth={0}
            fill="rgba(251,251,251,1)"
            isClosed
            d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
          />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  email: {
    position: "absolute",
    height: "80.09%",
    width: "100.00%",
    top: "8.33%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
