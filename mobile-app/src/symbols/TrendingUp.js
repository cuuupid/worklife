import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class TrendingUp extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 24.00 14.00"
          preserveAspectRatio="none"
          style={styles.combinedShape1}
        >
          <Defs>
            <ClipPath id="clipPath3">
              <Path
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                isClosed={true}
                d="M13.50 9.09 L20.59 2.00 L17.00 2.00 C17.00 2.00 16.00 1.55 16.00 1.00 C16.00 0.45 17.00 0.00 17.00 0.00 L23.00 0.00 C23.00 0.00 23.12 0.12 23.12 0.12 C23.35 0.11 23.57 0.15 23.71 0.29 C23.85 0.43 23.89 0.65 23.88 0.88 C23.88 0.88 24.00 1.00 24.00 1.00 L24.00 7.00 C24.00 7.00 23.55 8.00 23.00 8.00 C22.45 8.00 22.00 7.00 22.00 7.00 L22.00 3.41 L14.21 11.21 L12.79 11.21 L8.50 6.91 L1.71 13.71 C1.71 13.71 0.68 14.10 0.29 13.71 C-0.10 13.32 0.29 12.29 0.29 12.29 L7.79 4.79 L9.21 4.79 L13.50 9.09 Z"
              />
            </ClipPath>
          </Defs>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            isClosed={true}
            d="M13.50 9.09 L20.59 2.00 L17.00 2.00 C17.00 2.00 16.00 1.55 16.00 1.00 C16.00 0.45 17.00 0.00 17.00 0.00 L23.00 0.00 C23.00 0.00 23.12 0.12 23.12 0.12 C23.35 0.11 23.57 0.15 23.71 0.29 C23.85 0.43 23.89 0.65 23.88 0.88 C23.88 0.88 24.00 1.00 24.00 1.00 L24.00 7.00 C24.00 7.00 23.55 8.00 23.00 8.00 C22.45 8.00 22.00 7.00 22.00 7.00 L22.00 3.41 L14.21 11.21 L12.79 11.21 L8.50 6.91 L1.71 13.71 C1.71 13.71 0.68 14.10 0.29 13.71 C-0.10 13.32 0.29 12.29 0.29 12.29 L7.79 4.79 L9.21 4.79 L13.50 9.09 Z"
            clipPath="url(#clipPath3)"
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
  combinedShape1: {
    position: "absolute",
    height: "58.33%",
    width: "100.00%",
    top: "20.83%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
