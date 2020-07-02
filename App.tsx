import React, { PureComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import { Photo } from "./src/screens/Photo";

const Stack = createStackNavigator();

export default class App extends PureComponent {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Photo" component={Photo} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

