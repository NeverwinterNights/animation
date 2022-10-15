import React from 'react';
import {AntDesign} from "@expo/vector-icons"

type BackIconPropsType = {
    onPress: () => void
}

export const BackIcon = ({onPress}: BackIconPropsType) => {
    return (
        <AntDesign
            name="arrowleft"
            size={24}
            color={"#333"}
            style={{padding:12}}
            onPress={onPress}
        />
    );
};

