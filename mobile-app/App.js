import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Home from "./src/screens/Home";
import TabSelected from "./src/screens/TabSelected";
import Onboard1 from "./src/screens/Onboard1";
import Splash from "./src/screens/Splash";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: Home
  },
  TabSelected: {
    screen: TabSelected
  },
  Onboard1: {
    screen: Onboard1
  },
  Splash: {
    screen: Splash
  },
  Untitled: {
    screen: Untitled
  },
  Untitled1: {
    screen: Untitled1
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: {
      screen: Home
    },
    TabSelected: {
      screen: TabSelected
    },
    Onboard1: {
      screen: Onboard1
    },
    Splash: {
      screen: Splash
    },
    Untitled: {
      screen: Untitled
    },
    Untitled1: {
      screen: Untitled1
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Regular": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Light": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProText-Regular": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Medium": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProText-Medium": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProText-Bold": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "MaterialCommunityIcons": require("./src/MaterialCommunityIcons.ttf") /*Fallback Font*/,
      "Phosphate-Solid": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
