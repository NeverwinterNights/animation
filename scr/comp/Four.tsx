import React, {useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const Four = () => {
    // const value  = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
    const value = useState(new Animated.Value(0))[0];

    const buttonHandler = () => {
        // Animated.timing(value, {
        //     toValue: {x: 100, y: 500},
        //     duration: 1000,
        //     useNativeDriver: false
        // }).start()
        Animated.timing(value, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }


    return (
        <View style={styles.container}>
            {/*<Animated.View style={value.getLayout()}>*/}
            <Animated.View
                style={{width: 100, height: 100, borderRadius: 50, left:value, backgroundColor: "red"}}/>
            {/*</Animated.View>*/}
            {/*<Button onPress={buttonHandler} title="Change"/>*/}
            <TouchableOpacity onPress={buttonHandler}><Text>Change me</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {},
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
});
