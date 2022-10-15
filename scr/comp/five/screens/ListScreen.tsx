import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MarketingSlider} from "../MarketingSlider";
import {DATA} from "../data";
import {Icon} from "../Icon";
import {SPACING} from "../theme";



export const ListScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MarketingSlider/>
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 20
            }}>
                {DATA.map((item) =>
                    <TouchableOpacity key={item.id} style={{padding: SPACING}} onPress={() => {
                    }}>
                        <Icon uri={item.imageURI}/>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

