import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Close extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 20,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 21.56 21.56"
          preserveAspectRatio="none"
          style={styles.combinedShape}
        >
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke="rgba(108,114,124,1)"
            isClosed
            d="M1.00 1.00 L1.00 1.00 M1.00 1.00 L1.00 1.00 "
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
  combinedShape: {
    position: "absolute",
    height: "97.78%",
    width: "97.78%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
