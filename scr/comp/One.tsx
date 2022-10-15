import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Feather} from "@expo/vector-icons"
import {MotiView} from '@motify/components'
import {Easing} from "react-native-reanimated";

type OnePropsType = {}
const _color = "#6E01EF"
const _size = 100

export const One = ({}: OnePropsType) => {


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <View style={[styles.dot, styles.center]}>
                {[...Array(10).keys()].map((index) =>
                    <MotiView
                        from={{opacity: 0.5, scale: 1}}
                        animate={{opacity: 0, scale: 4}}
                        transition={{
                            type: "timing",
                            duration: 2000,
                            easing: Easing.out(Easing.ease),
                            delay: index * 400,
                            repeatReverse: false,
                            loop: true
                        }}
                        style={[StyleSheet.absoluteFillObject, styles.dot]} key={index}/>
                )}
                <Feather name="phone-outgoing" color={"#fff"} size={32}/>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    dot: {
        width: _size,
        height: _size,
        borderRadius: _size,
        backgroundColor: _color
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }

});


