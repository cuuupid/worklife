import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class LogoLinkedIn extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.linkedinIcon}>
          <Svg
            viewBox="0 0 24.00 24.00"
            preserveAspectRatio="none"
            style={styles.clip2}
          >
            <Defs>
              <ClipPath id="clipPath5">
                <Path strokeWidth={0} fill="transparent" isClosed d="" />
              </ClipPath>
            </Defs>
            <Path
              strokeWidth={0}
              fill="transparent"
              isClosed
              d=""
              clipPath="url(#clipPath5)"
            />
            <Path
              strokeWidth={0}
              fill="rgba(251,251,251,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
              clipPath="url(#clipPath5)"
            />
          </Svg>
          <Svg
            viewBox="0 0 24.00 24.00"
            preserveAspectRatio="none"
            style={styles.fill1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(251,251,251,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            />
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
  linkedinIcon: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  clip2: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "-0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
