import {StyleSheet} from 'react-native';
import {Two} from "./scr/comp/Two";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {One} from "./scr/comp/One";
import {Main} from './scr/comp/Main';
import {Three} from "./scr/comp/Three";
import {Four} from "./scr/comp/Four";
import {Five} from "./scr/comp/five/Five";

export default function App() {
    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name={"Main"} component={Main}/>
                    <Stack.Screen name={"One"} component={One}/>
                   <Stack.Screen name={"Two"} component={Two}/>
                    <Stack.Screen name={"Three"} component={Three}/>
                    <Stack.Screen name={"Four"} component={Four}/>
                    <Stack.Screen name={"Five"} component={Five} options={{headerShown:false}}/>

            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
