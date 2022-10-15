import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import posed from "react-native-pose";
import { LINE_WIDTH } from '../constance/constance';
import { SIZE} from "./Two";


type GridType = {
    key: number,
    position: string
}
type GridPropsType = {
    items: GridType[]
}

const GridItem = posed.View({
    RIGHT: {rotate: "45deg"},
    LEFT: {rotate: "-45deg"}
});


export const Grid = ({items}: GridPropsType) => {
    return (
        <>
            {items.map((item) => (
                <GridItem key={item.key} pose={item.position} style={styles.gridItem}>
                    <View style={styles.gridItemDiagonal}/>
                </GridItem>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
    gridItem: {
        width: SIZE,
        height: SIZE,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gold",
    },
    gridItemDiagonal: {
        width: LINE_WIDTH,
        height: Math.sqrt(2) * SIZE,
        backgroundColor: "#333"
    },
});
