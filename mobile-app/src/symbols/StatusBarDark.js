import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default class StatusBarDark extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.statusBarDark}>
          <Svg
            viewBox="0 0 375.00 20.00"
            preserveAspectRatio="none"
            style={styles.container}
          >
            <Path strokeWidth={0} fill="rgba(255,255,255,1)" isClosed d="" />
          </Svg>
          <Text style={styles.style}>100%</Text>
          <Svg
            viewBox="0 0 24.50 9.50"
            preserveAspectRatio="none"
            style={styles.battery}
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            />
          </Svg>
          <Svg
            viewBox="0 0 8.00 14.00"
            preserveAspectRatio="none"
            style={styles.bluetooth}
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
              fillOpacity={0.4}
              strokeOpacity={0.4}
            />
          </Svg>
          <Svg
            viewBox="0 0 12.00 9.00"
            preserveAspectRatio="none"
            style={styles.wifi}
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              isClosed
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            />
          </Svg>
          <Text style={styles.carrier}>Carrier</Text>
          <Text style={styles.time}>1:20 PM</Text>
          <Svg
            viewBox="0 0 33.50 5.50"
            preserveAspectRatio="none"
            style={styles.signal}
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
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
  statusBarDark: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  container: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  style: {
    position: "absolute",
    top: "12.50%",
    right: 33,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Regular",
    lineHeight: 16,
    textAlign: "right"
  },
  battery: {
    position: "absolute",
    height: 9.5,
    width: 24.5,
    top: "27.50%",
    right: 5.5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bluetooth: {
    position: "absolute",
    height: 14,
    width: 8,
    top: "15.00%",
    right: 70,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  wifi: {
    position: "absolute",
    height: 9,
    width: 12,
    top: "27.50%",
    left: 89,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  carrier: {
    position: "absolute",
    top: "12.50%",
    left: 44,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Regular",
    lineHeight: 16
  },
  time: {
    position: "absolute",
    top: "15.00%",
    left: "43.60%",
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "SFUIText-Semibold",
    lineHeight: 16,
    textAlign: "center"
  },
  signal: {
    position: "absolute",
    height: 5.5,
    width: 33.5,
    top: "37.50%",
    left: 6.5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
