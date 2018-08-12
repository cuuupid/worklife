import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Cursor extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 1,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 3.00 26.00"
          preserveAspectRatio="none"
          style={styles.line1}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(51,51,51,1)"
            isClosed
            d=""
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
  line1: {
    position: "absolute",
    height: "104.17%",
    width: "200.00%",
    top: "-2.08%",
    left: "-50.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
