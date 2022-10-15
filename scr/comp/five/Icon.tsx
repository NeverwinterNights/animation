import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICON_SIZE} from "./theme";

type IconPropsType = {
    uri: string
}

export const Icon = ({uri}: IconPropsType) => {
    return (
        <View style={styles.container}>
            <Image source={{uri}} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:ICON_SIZE,
        height:ICON_SIZE,
        borderRadius:ICON_SIZE / 2,
        backgroundColor:"#ddd",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width:ICON_SIZE*0.6,
        height:ICON_SIZE*0.6,
        resizeMode:"contain"
    },
});
