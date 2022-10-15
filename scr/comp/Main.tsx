import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from "../navigation/types";
import {Four} from "./Four";
import {Five} from "./five/Five";

type MainPropsType = {

}

export const Main = ({}:MainPropsType) => {
    const navigation = useAppNavigation()

    return (
       <View style={styles.container}>
           <Text>Main</Text>
           <Button title="One" onPress={() => navigation.navigate("One")}/>
           <Button title="Two" onPress={() => navigation.navigate("Two")}/>
           <Button title="Three" onPress={() => navigation.navigate("Three")}/>
           <Button title="Four" onPress={() => navigation.navigate("Four")}/>
           <Button title="Five" onPress={() => navigation.navigate("Five")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
