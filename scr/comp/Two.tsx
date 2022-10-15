import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import posed from "react-native-pose";
import {useAppNavigation} from "../navigation/types";
import {Grid} from "./Grid";
import {ITEMS_PER_ROW, POSITION, TOTAL_ITEMS} from "../constance/constance";


type TwoPropsType = {}

// type GridType = {
//     key: number,
//     position: string
// }

// const GridItem = posed.View({
//     RIGHT: {rotate: "45deg"},
//     LEFT: {rotate: "-45deg"}
// });

const {width, height} = Dimensions.get("screen");


export const RATIO = height / width;

export const SIZE = width / ITEMS_PER_ROW;
export const ROWS = Math.round((RATIO * height) / SIZE);




export const Two = ({}: TwoPropsType) => {
    const getRandomPosition = (arr = POSITION) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }


    const constructGrid = () => {
        return [...Array(TOTAL_ITEMS).keys()].map((index) => ({
            key: index,
            position: getRandomPosition()
        }))
    }

    const navigation = useAppNavigation()
    // const [position, setPosition] = useState("RIGHT");
    const [items, setItems] = useState(constructGrid());

    let animationInterval: null | NodeJS.Timer = null;


    useEffect(() => {

        animationInterval = setInterval(() => {
            setItems(value => {
                return constructGrid()
            })
        }, 2000)

        return () => {
            if (animationInterval) {
                clearInterval(animationInterval)
            }
        }
    }, [])


    return (
        <View style={styles.container}>
            {/*<GridItem pose={position} style={styles.gridItem}>*/}
            {/*    <View style={styles.gridItemDiagonal}/>*/}
            {/*</GridItem>*/}
            <Grid items={items}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gold",
        flexDirection:"row",
        flexWrap:"wrap"

    },
});
