import { StyleSheet, View } from 'react-native';

export const PreviewBackground = ({ children, gap = 26, paddingHorizontal = 0 }) => {
    const s = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f0f',
            gap: gap,
            paddingHorizontal: paddingHorizontal
        }
    })

    return (
        <View style={s.container}>
            {children}
        </View>
    )
}