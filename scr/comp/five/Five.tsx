import React from 'react';
import {StyleSheet} from 'react-native';
import {DetailScreen} from "./screens/DetailScreen";
import {enableScreens} from "react-native-screens";

import {ListScreen} from "./screens/ListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens()

const Stack = createSharedElementStackNavigator();
export const Five = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"ListScreen"} component={ListScreen}/>
                <Stack.Screen name={"DetailScreen"} component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }
});
