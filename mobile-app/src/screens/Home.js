import React, { Component } from "react";
import IconHamburger from "../symbols/IconHamburger";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background} />
        <View style={styles.barsNavigationBarIPhoneXLightLargeNavigationBar}>
          <View style={styles.background1} />
          <Text style={styles.largeTitle}>Activity</Text>
          <Text style={styles.edit}>Edit</Text>
          <IconHamburger style={styles.iconHamburger} />
        </View>
        <View style={styles.distance}>
          <ImageBackground
            style={styles.rectangle3}
            source={require("../assets/Gradient_qrpPlZr.png")} /*gradient: {"activeIndex":1,"from":{"x":0.5,"y":0},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(74,130,193,1)","style":{}},{"offset":1,"stopColor":"rgba(74,130,193,1)","style":{}}],"style":{},"to":{"x":0.5,"y":1}}*/
          />
          <View style={styles.group2}>
            <Text style={styles.todayAt831Am}>Today at 8:31 AM</Text>
            <Text style={styles.km}>0.78 km</Text>
            <View style={styles.group2Copy}>
              <View style={styles.group}>
                <Svg
                  viewBox="0 0 22.55 43.76"
                  preserveAspectRatio="none"
                  style={styles.rectangle}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    isClosed={true}
                    d="M-0.44 0.00 L25.57 0.00 C25.57 15.37 21.57 11.67 21.57 19.95 C21.57 28.24 21.57 32.61 21.57 37.74 C21.57 45.35 2.69 45.40 1.66 39.85 C0.64 34.29 -0.44 21.41 -0.44 0.00 Z"
                  />
                </Svg>
                <Svg
                  viewBox="0 0 20.00 13.38"
                  preserveAspectRatio="none"
                  style={styles.rectangleCopy}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    isClosed={true}
                    d="M0.00 0.00 L20.00 0.00 C20.00 7.41 20.00 10.03 20.00 12.76 C20.00 14.13 14.98 12.81 10.00 12.76 C4.98 12.72 0.00 13.95 0.00 12.76 C0.00 10.39 0.00 7.70 0.00 0.00 Z"
                  />
                </Svg>
              </View>
              <View style={styles.groupCopy}>
                <Svg
                  viewBox="0 0 22.55 43.76"
                  preserveAspectRatio="none"
                  style={styles.rectangle1}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    isClosed={true}
                    d="M-0.44 0.00 L25.57 0.00 C25.57 15.37 21.57 11.67 21.57 19.95 C21.57 28.24 21.57 32.61 21.57 37.74 C21.57 45.35 2.69 45.40 1.66 39.85 C0.64 34.29 -0.44 21.41 -0.44 0.00 Z"
                  />
                </Svg>
                <Svg
                  viewBox="0 0 20.00 13.38"
                  preserveAspectRatio="none"
                  style={styles.rectangleCopy1}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    isClosed={true}
                    d="M0.00 0.00 L20.00 0.00 C20.00 7.41 20.00 10.03 20.00 12.76 C20.00 14.13 14.98 12.81 10.00 12.76 C4.98 12.72 0.00 13.95 0.00 12.76 C0.00 10.39 0.00 7.70 0.00 0.00 Z"
                  />
                </Svg>
              </View>
            </View>
            <Text style={styles.walkingRunningDi}>
              Walking + Running Distance
            </Text>
          </View>
        </View>
        <Center horizontal>
          <View style={styles.tab}>
            <View style={styles.rectangle4} />
            <Text style={styles.bpm}>72 - 104 bpm</Text>
            <Text style={styles.heartRate}>Heart Rate</Text>
          </View>
        </Center>
        <View style={styles.tab2}>
          <View style={styles.rectangle41} />
          <Text style={styles.min}>0 min</Text>
          <Text style={styles.sleep}>Sleep</Text>
        </View>
        <View style={styles.tab3}>
          <View style={styles.rectangle4Copy} />
          <Text style={styles.steps}>1,079 steps</Text>
          <Text style={styles.steps1}>Steps</Text>
        </View>
        <Text style={styles.day}>DAY</Text>
        <View style={styles.rectangle2} />
        <Text style={styles.week}>WEEK</Text>
        <Text style={styles.month}>MONTH</Text>
        <Text style={styles.year}>YEAR</Text>
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
  barsNavigationBarIPhoneXLightLargeNavigationBar: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "19.21%",
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
  largeTitle: {
    position: "absolute",
    top: 49,
    left: 156,
    backgroundColor: "transparent",
    lineHeight: 41,
    color: "rgba(74,130,193,1)",
    fontSize: 20,
    letterSpacing: 0.24
  },
  edit: {
    position: "absolute",
    top: "37.82%",
    left: "87.20%",
    backgroundColor: "transparent",
    color: "rgba(74,130,193,1)",
    fontSize: 18,
    letterSpacing: 0.37
  },
  iconHamburger: {
    position: "absolute",
    top: "33.97%",
    left: "4.27%",
    height: "20.51%",
    width: "12.80%",
    backgroundColor: "transparent"
  },
  distance: {
    position: "absolute",
    top: "20.81%",
    left: "4.27%",
    height: "35.22%",
    width: "91.47%"
  },
  rectangle3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 16,
    backgroundColor: "transparent"
  },
  group2: {
    position: "absolute",
    top: "11.19%",
    left: "17.49%",
    height: "77.62%",
    width: "65.01%"
  },
  todayAt831Am: {
    position: "absolute",
    top: "92.79%",
    left: "23.77%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "SFProText-Regular",
    letterSpacing: 0.17
  },
  km: {
    position: "absolute",
    top: "59.46%",
    left: "13.45%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 48,
    fontFamily: "SFProDisplay-Light",
    letterSpacing: 0.34
  },
  group2Copy: {
    position: "absolute",
    top: "16.67%",
    left: "36.77%",
    height: "35.59%",
    width: "26.46%"
  },
  group: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "74.68%",
    width: "38.98%"
  },
  rectangle: {
    position: "absolute",
    height: "74.17%",
    width: "98.04%",
    top: "-0.00%",
    left: "1.89%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangleCopy: {
    position: "absolute",
    height: "22.68%",
    width: "86.96%",
    top: "76.27%",
    left: "8.70%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        scaleY: -1
      }
    ]
  },
  groupCopy: {
    position: "absolute",
    top: "25.32%",
    left: "61.02%",
    height: "74.68%",
    width: "38.98%",
    transform: [
      {
        scaleX: -1
      }
    ]
  },
  rectangle1: {
    position: "absolute",
    height: "74.17%",
    width: "98.04%",
    top: "-0.00%",
    left: "1.89%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangleCopy1: {
    position: "absolute",
    height: "22.68%",
    width: "86.96%",
    top: "76.27%",
    left: "8.70%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        scaleY: -1
      }
    ]
  },
  walkingRunningDi: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    letterSpacing: 0.22
  },
  tab: {
    position: "absolute",
    top: "79.8%",
    height: "8.62%",
    width: 343
  },
  rectangle4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "rgba(200,109,215,1)"
  },
  bpm: {
    position: "absolute",
    top: "47.14%",
    left: "64.72%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Regular",
    letterSpacing: 0.22
  },
  heartRate: {
    position: "absolute",
    top: "22.86%",
    left: "4.66%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    letterSpacing: 0.22
  },
  tab2: {
    position: "absolute",
    top: "68.97%",
    left: "4.27%",
    height: "8.62%",
    width: "91.47%"
  },
  rectangle41: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "rgba(243,156,18,1)"
  },
  min: {
    position: "absolute",
    top: "47.14%",
    left: "83.09%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Regular",
    letterSpacing: 0.22
  },
  sleep: {
    position: "absolute",
    top: "22.86%",
    left: "4.66%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    letterSpacing: 0.22
  },
  tab3: {
    position: "absolute",
    top: "58.37%",
    left: "4.27%",
    height: "8.62%",
    width: "91.47%"
  },
  rectangle4Copy: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "rgba(46,204,113,1)"
  },
  steps: {
    position: "absolute",
    top: "47.14%",
    left: "69.68%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Regular",
    letterSpacing: 0.22
  },
  steps1: {
    position: "absolute",
    top: "22.86%",
    left: "4.66%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    letterSpacing: 0.22
  },
  day: {
    position: "absolute",
    top: "14.29%",
    left: "4.27%",
    backgroundColor: "transparent",
    color: "rgba(74,130,193,1)",
    fontSize: 20,
    letterSpacing: 0.32
  },
  rectangle2: {
    position: "absolute",
    top: "18.84%",
    left: "0.00%",
    height: "0.37%",
    width: "20.27%",
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  },
  week: {
    position: "absolute",
    top: "14.29%",
    left: "25.60%",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    letterSpacing: 0.32
  },
  month: {
    position: "absolute",
    top: "14.29%",
    left: "51.47%",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    letterSpacing: 0.32
  },
  year: {
    position: "absolute",
    top: "14.29%",
    left: "82.13%",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    letterSpacing: 0.32
  }
});
