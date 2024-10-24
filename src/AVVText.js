import { StyleSheet, Text } from "react-native"
import { Typography } from "../utils/Typography"
import { PreviewBackground } from "../utils/PreviewBackground"

const AVVText = ({ style, typography='body', children }) => {
    return (
        <Text style={[
            { color: 'white' },
            typography === 'h1' && s.h1,
            typography === 'h4' && s.h4,
            typography === 'h5' && s.h5,
            typography === 'bodybold' && s.bodybold,
            typography === 'body' && s.body,
            typography === 'caption' && s.caption,
            typography === 'annotation' && s.annotation,
            typography === 'button' && s.button,
            style,
        ]}>
            {children}
        </Text>
    )
}

export default AVVText

const s = StyleSheet.create({
    h1: {
        fontSize: Typography.h1.fontSize,
        fontWeight: Typography.h1.fontWeight
    },
    h4: {
        fontSize: Typography.h4.fontSize,
        fontWeight: Typography.h4.fontWeight
    },
    h5: {
        fontSize: Typography.h5.fontSize,
        fontWeight: Typography.h5.fontWeight
    },
    bodybold: {
        fontSize: Typography.bodybold.fontSize,
        fontWeight: Typography.bodybold.fontWeight
    },
    body: {
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight
    },
    caption: {
        fontSize: Typography.caption.fontSize,
        fontWeight: Typography.caption.fontWeight
    },
    annotation: {
        fontSize: Typography.annotation.fontSize,
        fontWeight: Typography.annotation.fontWeight
    },
    button: {
        fontSize: Typography.button.fontSize,
        fontWeight: Typography.button.fontWeight,
        textAlign: 'center',
    },
})

export const AVVText_Preview = () => {
    return (
        <PreviewBackground gap={12}>
            <AVVText typography={'h1'}> h1 </AVVText>
            <AVVText typography={'h4'}> h4 </AVVText>
            <AVVText typography={'h5'}> h5 </AVVText>
            <AVVText typography={'body'}> body </AVVText>
            <AVVText typography={'bodybold'}> bodybold </AVVText>
            <AVVText typography={'caption'}> caption </AVVText>
            <AVVText typography={'annotation'}> annotation </AVVText>
            <AVVText typography={'button'}> button </AVVText>
        </PreviewBackground>
    )
}