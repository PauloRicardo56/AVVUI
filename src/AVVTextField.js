import { View, StyleSheet, TextInput } from 'react-native';
import { PreviewBackground } from '../utils/PreviewBackground';
import { Typography } from '../utils/Typography';
import { AVVText } from './AVVText';

const AVVTextField = ({title, subtitle, placeholder, value}) => {
    return(
        <View style={s.container}>
            { title != null
                ? <AVVText style={s.title} typography={'caption'}> {title} </AVVText>
                : <></>
            }

            <TextInput
                style={s.input}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#464646"}
                cursorColor={'white'}
            />

            { subtitle != null
                ? <AVVText style={s.subtitle} typography={'annotation'}> {subtitle} </AVVText>
                : <></>
            }
            
        </View>
    )
}

export default AVVTextField

const s = StyleSheet.create({
    container: {
        width: '100%'
    },

    title: {
        paddingBottom: 6,
        paddingLeft: 6,
    },

    input: {
        borderRadius: 6,
        backgroundColor: '#1B1B1B',
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight,
    },

    subtitle: {
        color: '#656565',
        paddingTop: 6,
        paddingLeft: 6,
    }
})

export const AVVTextField_Preview = () => {
    var someValue

    return(
        <PreviewBackground gap={50} paddingHorizontal={20}>

            <AVVTextField title={'Title'} subtitle={'Subtitle'} value={someValue}></AVVTextField>
            <AVVTextField title={'Title'} value={someValue}></AVVTextField>
            <AVVTextField subtitle={'Subtitle'} value={someValue}></AVVTextField>
            <AVVTextField value={someValue} placeholder={"Placeholder"}></AVVTextField>

        </PreviewBackground>
    )
}