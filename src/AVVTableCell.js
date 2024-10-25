import { View, StyleSheet, TouchableOpacity } from "react-native";
import { PreviewBackground } from "../utils/PreviewBackground";
import { useCallback, useState } from "react";
import AVVText from "./AVVText";

const AVVTableCell = ({
    children,
    style,
    isSelected=false,
    isSelectionEnabled=false,
    hideSeparator=false,
    onPress=() => {},
    backgroundWhenSelected='#474747'
}) => {
    const handlePress = useCallback(() => {
        onPress
    }, [])
    const cellStyle = [
        s.container,
        style,
        isSelected && { backgroundColor: backgroundWhenSelected },
    ]

    return(
        <TouchableOpacity style={cellStyle}
            disabled={!isSelectionEnabled}
            onPress={handlePress}
        >
            {children}
            { hideSeparator
                ? <></>
                : <View style={s.separator} />
            }
        </TouchableOpacity>
    );
}

export default AVVTableCell

const s = StyleSheet.create({
    container: {
        width: '100%',
        // height: 40,
        borderRadius: 2,
        justifyContent: 'flex-end'
    },

    title: {
        paddingBottom: 8,
    },

    rightIndent: {
        textAlign: 'right',
        alignSelf: 'flex-end',
    },

    separator: {
        backgroundColor: "#222222",
        width: '100%',
        height: 1,
    },
})

export const AVVTableCell_Preview = () => {
    return(
        <PreviewBackground>
            <AVVTableCell title={"Text"} isSelectionEnabled={true} />
            <AVVTableCell title={"Text"} orientation="right" />
        </PreviewBackground>
    )
}