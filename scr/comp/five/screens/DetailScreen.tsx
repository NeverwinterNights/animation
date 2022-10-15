import React from 'react';
import {useRef} from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DATA} from "../data";
import {BackIcon} from "../BackIcon";
import {useAppNavigation} from "../../../navigation/types";
import {Icon} from "../Icon";
import {SPACING, width} from "../theme";

type DetailScreenPropsType = {}

export const DetailScreen = ({}: DetailScreenPropsType) => {
    const item = DATA[0]
    const ref = useRef(null);
    const selectedItemIndex = DATA.findIndex((el) => el.id === item.id)
    const navigation = useAppNavigation()

    return (
        <SafeAreaView style={{flex: 1}}>
            <BackIcon onPress={() => navigation.goBack()}/>
            <View style={{flexDirection: "row", flexWrap: "nowrap", marginVertical: 20}}>
                {DATA.map((item) =>
                    <TouchableOpacity style={{padding: SPACING}} key={item.id}>
                        <Icon uri={item.imageURI}/>
                    </TouchableOpacity>
                )}
            </View>
            <FlatList ref={ref}
                      horizontal
                      data={DATA}
                      keyExtractor={(item) => item.id}
                      pagingEnabled
                      initialScrollIndex={selectedItemIndex}
                      nestedScrollEnabled
                      getItemLayout={(data, index) => ({length: width, offset: width * index, index})}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) =>
                          <ScrollView showsVerticalScrollIndicator={false}  style={{
                              width: width - SPACING * 2,
                              margin: SPACING,
                              backgroundColor: "rgba(0,0,0,0.05)",
                              borderRadius: 16
                          }}>
                              <View style={{padding: SPACING}}>
                                  <Text style={{fontSize: 16}}>
                                      {Array(50).fill(`${item.title} inner text \n`)}
                                  </Text>
                              </View>
                          </ScrollView>
                      }/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {}
});
