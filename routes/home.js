import "react-native-gesture-handler";
import * as React from "react";
import Home from "../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Diet from "../screens/diet";
import BMI from "../screens/bmi";
import Foods from "../screens/foods";
import About from "../screens/about";

const homeStack = createDrawerNavigator();

const homeRoute = () => {
  return (
    <homeStack.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: "#fff",
        elevation: 5,
        width: 222,
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#3DCC85",
        inactiveTintColor: "#3DCC85",
      }}
      drawerType="front"
    >
      <homeStack.Screen name="Home" component={Home} />
      <homeStack.Screen name="Diet" component={Diet} />
      <homeStack.Screen name="BMI" component={BMI} />
      <homeStack.Screen name="Foods" component={Foods} />
      <homeStack.Screen name="About" component={About} />
    </homeStack.Navigator>
  );
};

export default homeRoute;