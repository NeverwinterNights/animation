import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


const PRODUCT_LIST = [
    {
        url: "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/h06-XF3rueo9-large.png",
        id: "s02h02e02c02",
        title: "TMA-2",
        subtitle: "DJ PRESET",
        description:
            "This configuration is based on the original TMA-1 DJ, which is the preferred choice of a range of acclaimed DJs.",
        price: "200€",
        bg: "#16CDC1"
    },
    {
        url: "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-ninja-tune-edi-0FXQZGBF-large.png",

        id: "s74h02e02c74",
        title: "TMA-2",
        subtitle: "ED BANGER EDITION",
        description:
            "This combination provides a very heavy and powerful bass. Recommended for bass lovers and those who like it loud. Limited edition of 300.",
        price: "240€",
        bg: "#bbb"
    },
    {
        url: "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/TMA-Wireless-XE_angl-0J3sIXZj-large.png",
        id: "s04h71e05c71",
        title: "TMA-2",
        subtitle: "YOUNG GURU PRESET",
        description:
            "This configuration provides open, vibrant sound with good bass and treble. Wide sound stage and medium isolation.",
        price: "260€",
        bg: "palevioletred"
    },
    {
        url: "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-xe-UP3JTmhZ-zoom.png",
        id: "s03h03e04c02",
        title: "TMA-2",
        subtitle: "STUDIO PRESET",
        description:
            "This configuration provides a warm sound and it is good for extended listening. Great bass and added energy in the lower mid range.",
        price: "225€",
        bg: "#629BF0"
    }
];

export const Three = () => {
    return (
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

      </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer:{

    },
    container: {
        flex: 1,

    }
});
