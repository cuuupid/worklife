import React, { Component } from "react";
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Path,
  Ellipse
} from "react-native-svg";
import Icon from "@builderx/icons";
import { View, Text, StyleSheet } from "react-native";

export default class TabSelected extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background} />
        <View style={styles.progressIndicator}>
          <View style={styles.background3} />
          <Text style={styles.dailyProgress}>Daily Progress</Text>
          <View style={styles.indicator}>
            <View style={styles.group3}>
              <Svg
                viewBox="0 0 139.00 138.00"
                preserveAspectRatio="none"
                style={styles.oval11}
              >
                <Defs>
                  <LinearGradient
                    id="gradient1"
                    gradientType="LinearGradient"
                    elipseLength={0}
                    from={{
                      x: "1.00",
                      y: "0.50"
                    }}
                    to={{
                      x: "0.00",
                      y: "0.82"
                    }}
                    style={styles.style}
                  >
                    <Stop stopColor="rgba(255,8,68,1)" offset={0} />
                    <Stop stopColor="rgba(255,105,105,1)" offset={1} />
                  </LinearGradient>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(250,120,102,1)"
                  isClosed={true}
                  d="M69.50 138.00 C31.12 138.00 0.00 107.10 0.00 69.00 C0.00 30.90 31.12 0.00 69.50 0.00 C107.88 0.00 139.00 30.90 139.00 69.00 C139.00 107.10 107.88 138.00 69.50 138.00 Z M69.50 123.84 C100.01 123.84 124.74 99.29 124.74 69.00 C124.74 38.71 100.01 14.16 69.50 14.16 C38.99 14.16 14.26 38.71 14.26 69.00 C14.26 99.29 38.99 123.84 69.50 123.84 Z"
                  fillOpacity={0.2}
                  strokeOpacity={0.2}
                />
              </Svg>
              <Svg
                viewBox="0 0 122.00 138.00"
                preserveAspectRatio="none"
                style={styles.shape}
              >
                <Defs>
                  <LinearGradient
                    id="gradient2"
                    gradientType="LinearGradient"
                    elipseLength={0}
                    from={{
                      x: "1.00",
                      y: "0.50"
                    }}
                    to={{
                      x: "0.00",
                      y: "0.82"
                    }}
                    style={styles.style}
                  >
                    <Stop stopColor="rgba(255,8,68,1)" offset={0} />
                    <Stop stopColor="rgba(255,105,105,1)" offset={1} />
                  </LinearGradient>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="url(#gradient2)"
                  isClosed={true}
                  d="M53.09 0.00 C48.86 0.00 45.53 3.30 45.69 7.38 C45.53 11.44 48.86 14.74 53.09 14.77 L54.49 14.77 C83.12 15.93 107.18 40.23 107.20 68.77 C107.18 98.49 82.29 123.26 52.63 123.23 C39.91 123.26 28.05 119.05 18.87 111.23 C18.69 111.45 12.72 105.97 12.40 105.69 C9.33 103.06 4.99 102.62 2.22 105.69 C-0.48 108.69 -0.82 112.81 1.76 115.85 C14.36 129.44 32.50 138.00 52.63 138.00 C90.94 138.00 122.00 107.10 122.00 69.23 C122.00 31.49 91.89 0.94 54.49 0.00 L53.09 0.00 Z"
                />
              </Svg>
            </View>
            <Text style={styles.style}>75%</Text>
          </View>
        </View>
        <View style={styles.barsNavigationBarIPhoneXLightLargeNavigationBar}>
          <View style={styles.background1} />
        </View>
        <View style={styles.barsNavigationBarLightLeftCombinationsBackButton}>
          <Text style={styles.label}>Walking + Running Distance</Text>
        </View>
        <View style={styles.time}>
          <View style={styles.rectangle} />
          <View style={styles.separator} />
          <Svg style={styles.ellipse} viewBox="0 0 100 100">
            <Ellipse rx={50} ry={50} cx={50} cy={50} fill="#dddddd" />
          </Svg>
          <View style={styles.groupCopy}>
            <Text style={styles.y}>Y</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <View style={styles.background2} />
          <View style={styles.hours}>
            <Text style={styles.style1}>3</Text>
            <Text style={styles.style2}>5</Text>
            <Text style={styles.style3}>7</Text>
            <Text style={styles.style4}>9</Text>
          </View>
          <Text style={styles.distance}>Total 0.78 km</Text>
          <Text style={styles.day}>Today</Text>
          <View style={styles.graph}>
            <View style={styles.x} />
            <View style={styles.y1} />
            <View style={styles.bar1} />
            <View style={styles.bar2} />
            <View style={styles.bar3} />
            <View style={styles.bar4} />
            <View style={styles.details}>
              <Svg
                viewBox="0 0 83.00 53.98"
                preserveAspectRatio="none"
                style={styles.combinedShape}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(244,67,54,1)"
                  isClosed={true}
                  d="M0.00 0.00 L83.00 0.00 L83.00 39.68 L53.56 39.68 L36.26 50.93 L18.96 39.68 L0.00 39.68 L0.00 0.00 Z"
                />
              </Svg>
              <Text style={styles.style5}>0.24</Text>
              <View style={styles.rectangle11} />
              <View style={styles.group5}>
                <Text style={styles.may}>20 May</Text>
                <Text style={styles.pm}>8 - 9 pm</Text>
              </View>
            </View>
          </View>
        </View>
        <Icon name="ios-arrow-back" style={styles.icon} type="Ionicons" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  background: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.12%",
    width: "100.00%",
    backgroundColor: "rgba(236,240,241,1)"
  },
  progressIndicator: {
    position: "absolute",
    top: "67.73%",
    left: "0.00%",
    height: "32.27%",
    width: "100.00%"
  },
  background3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "rgba(255,255,255,1)"
  },
  dailyProgress: {
    position: "absolute",
    top: "6.11%",
    left: "30.67%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(250,120,102,1)",
    fontSize: 24,
    fontFamily: "SFProDisplay-Regular",
    letterSpacing: 0.16
  },
  indicator: {
    position: "absolute",
    top: "23.28%",
    left: "31.47%",
    height: "52.67%",
    width: "37.07%"
  },
  group3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  oval11: {
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
    top: "39.86%",
    left: "33.81%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(250,120,102,1)",
    fontSize: 24,
    fontFamily: "SFProDisplay-Regular",
    letterSpacing: 0.16
  },
  shape: {
    position: "absolute",
    height: "100.00%",
    width: "87.77%",
    top: "0.00%",
    left: "12.23%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  barsNavigationBarIPhoneXLightLargeNavigationBar: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "12.81%",
    width: "100.00%"
  },
  background1: {
    position: "absolute",
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0.5,
      width: 0
    }
  },
  barsNavigationBarLightLeftCombinationsBackButton: {
    position: "absolute",
    top: "8.19%",
    left: "6.53%",
    height: "2.59%",
    width: "63.73%"
  },
  label: {
    position: "absolute",
    top: "0%",
    left: 19,
    backgroundColor: "transparent",
    lineHeight: 22,
    color: "rgba(74,130,193,1)",
    fontSize: 20,
    letterSpacing: -0.41
  },
  time: {
    position: "absolute",
    top: "12.81%",
    left: "0.00%",
    height: "11.70%",
    width: "100.00%"
  },
  rectangle: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "rgba(255,255,255,1)"
  },
  separator: {
    position: "absolute",
    top: "98.95%",
    left: "0.00%",
    height: "1.05%",
    width: "100.00%",
    backgroundColor: "rgba(216,216,216,1)"
  },
  groupCopy: {
    position: "absolute",
    top: "16.84%",
    left: "82.40%",
    height: "52.63%",
    width: "13.33%"
  },
  y: {
    position: "absolute",
    top: "26%",
    left: "32%",
    backgroundColor: "transparent",
    color: "rgba(74,130,193,1)",
    fontSize: 24,
    letterSpacing: -0.58
  },
  chart: {
    position: "absolute",
    top: "24.38%",
    left: "0.00%",
    height: "40.52%",
    width: "100.00%"
  },
  background2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "rgba(255,255,255,1)"
  },
  hours: {
    position: "absolute",
    top: "90.88%",
    left: "32.80%",
    height: "4.26%",
    width: "20.53%"
  },
  style1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    opacity: 0.6,
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.35
  },
  style2: {
    position: "absolute",
    top: "0.00%",
    left: "29.87%",
    opacity: 0.6,
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.35
  },
  style3: {
    position: "absolute",
    top: "0.00%",
    left: "59.74%",
    opacity: 0.6,
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.35
  },
  style4: {
    position: "absolute",
    top: "0.00%",
    left: "89.61%",
    opacity: 0.6,
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.35
  },
  distance: {
    position: "absolute",
    top: "4.86%",
    left: "70.67%",
    backgroundColor: "transparent",
    color: "rgba(250,120,102,1)",
    fontSize: 14,
    fontFamily: "SFProText-Medium",
    letterSpacing: -0.41
  },
  day: {
    position: "absolute",
    top: "11.85%",
    left: "70.67%",
    opacity: 0.7,
    backgroundColor: "transparent",
    color: "rgba(250,120,102,1)",
    fontSize: 12,
    fontFamily: "SFProText-Medium",
    letterSpacing: -0.35
  },
  graph: {
    position: "absolute",
    top: "20.97%",
    left: "4.27%",
    height: "74.16%",
    width: "87.20%"
  },
  x: {
    position: "absolute",
    top: "93.03%",
    left: "0.00%",
    height: "0.41%",
    width: "100.00%",
    backgroundColor: "rgba(216,216,216,1)"
  },
  y1: {
    position: "absolute",
    top: "0.00%",
    left: "2.45%",
    height: "100.00%",
    width: "0.31%",
    backgroundColor: "rgba(216,216,216,1)"
  },
  bar1: {
    position: "absolute",
    top: "68.44%",
    left: "32.72%",
    height: "24.18%",
    width: "2.14%",
    borderRadius: 8,
    backgroundColor: "rgba(250,120,102,1)"
  },
  bar2: {
    position: "absolute",
    top: "45.08%",
    left: "39.76%",
    height: "47.54%",
    width: "2.14%",
    borderRadius: 8,
    backgroundColor: "rgba(250,120,102,1)"
  },
  bar3: {
    position: "absolute",
    top: "52.46%",
    left: "46.79%",
    height: "40.16%",
    width: "2.14%",
    borderRadius: 8,
    backgroundColor: "rgba(250,120,102,1)"
  },
  bar4: {
    position: "absolute",
    top: "29.51%",
    left: "53.82%",
    height: "63.11%",
    width: "2.14%",
    borderRadius: 8,
    backgroundColor: "rgba(250,120,102,1)"
  },
  details: {
    position: "absolute",
    top: "4.51%",
    left: "42.20%",
    height: "22.13%",
    width: "25.38%"
  },
  combinedShape: {
    position: "absolute",
    height: "99.97%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  style5: {
    position: "absolute",
    top: "22.22%",
    left: "63.86%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.42
  },
  rectangle11: {
    position: "absolute",
    top: "12.96%",
    left: "56.63%",
    height: "42.59%",
    width: "1.20%",
    opacity: 0.5,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group5: {
    position: "absolute",
    top: "9.26%",
    left: "6.02%",
    height: "50.00%",
    width: "44.58%"
  },
  may: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.56
  },
  pm: {
    position: "absolute",
    top: "55.56%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    fontFamily: "SFProText-Regular",
    letterSpacing: -0.56
  },
  icon: {
    top: 57,
    left: 16.5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(74,130,193,1)",
    fontSize: 40
  },
  ellipse: {
    top: 13,
    left: 24,
    width: 59,
    height: 59,
    position: "absolute"
  }
});
