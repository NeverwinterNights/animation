import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ITEM_WIDTH, SPACING, width} from "./theme";
import {SLIDER_DATA} from "./data";


export const MarketingSlider = () => {
    return (
        <FlatList
            data={SLIDER_DATA}
            keyExtractor={(item) => item.color}
            horizontal
            snapToInterval={ITEM_WIDTH + SPACING * 2}
            contentContainerStyle={{paddingRight: width - ITEM_WIDTH - SPACING * 2}}
            decelerationRate={"fast"}
            renderItem={({item}) => {
                return (
                    <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width:ITEM_WIDTH,
        height:ITEM_WIDTH*0.6,
        borderRadius:16,
        padding:SPACING
    },
    itemText: {},
});
