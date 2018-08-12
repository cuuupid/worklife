import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default class StatusBarLight extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.statusBarLight}>
          <Text style={styles.style1}>100%</Text>
          <Svg
            viewBox="0 0 24.50 9.50"
            preserveAspectRatio="none"
            style={styles.battery1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            />
          </Svg>
          <Svg
            viewBox="0 0 8.00 14.00"
            preserveAspectRatio="none"
            style={styles.bluetooth1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
              fillOpacity={0.4}
              strokeOpacity={0.4}
            />
          </Svg>
          <Svg
            viewBox="0 0 12.00 9.00"
            preserveAspectRatio="none"
            style={styles.wifi1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            />
          </Svg>
          <Text style={styles.carrier1}>Carrier</Text>
          <Text style={styles.time1}>1:20 PM</Text>
          <Svg
            viewBox="0 0 33.50 5.50"
            preserveAspectRatio="none"
            style={styles.signal1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
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
  statusBarLight: {
    position: "absolute",
    top: "10.00%",
    left: "1.60%",
    height: "85.00%",
    width: "97.07%"
  },
  style1: {
    position: "absolute",
    top: "2.94%",
    right: 28,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Regular",
    lineHeight: 16,
    textAlign: "right"
  },
  battery1: {
    position: "absolute",
    height: 9.5,
    width: 24.5,
    top: "20.59%",
    right: 0.5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bluetooth1: {
    position: "absolute",
    height: 14,
    width: 8,
    top: "5.88%",
    right: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  wifi1: {
    position: "absolute",
    height: 9,
    width: 12,
    top: "20.59%",
    left: 83,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  carrier1: {
    position: "absolute",
    top: "2.94%",
    left: 38,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Regular",
    lineHeight: 16
  },
  time1: {
    position: "absolute",
    top: "5.88%",
    left: "43.27%",
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Semibold",
    lineHeight: 16,
    textAlign: "center"
  },
  signal1: {
    position: "absolute",
    height: 5.5,
    width: 33.5,
    top: "32.35%",
    left: 0.5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
