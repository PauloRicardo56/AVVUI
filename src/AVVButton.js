import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { PreviewBackground } from '../utils/PreviewBackground';
import { AVVText } from './AVVText';

const AVVButton = ({ title, style, onPress }) => {
    return(
        <TouchableOpacity
            style={[
                s.button,
                style === 'success' && s.success, 
                style === 'neutral' && s.neutral, 
                style === 'failure' && s.failure,
                style === 'info' && s.info,
                style === 'disabled' && s.disabled,
            ]}
            onPress={onPress}
            disabled={style === 'disabled'}
        >
            {/* <AVVText typography={'button'} style={style === 'disabled' && s.buttonTextDisabled}>
                {title}
            </AVVText> */}
        </TouchableOpacity>
    )
}

export default AVVButton

const s = StyleSheet.create({
    button: {
        borderRadius: 6,
        width: 156,
        height: 50,
        justifyContent: 'center'
    },

    success: {
        backgroundColor: '#386A30',
    },
    
    neutral: {
        backgroundColor: '#242424',
    },

    failure: {
        backgroundColor: '#6A3230',
    },

    info: {
        backgroundColor: '#30476A',
    },

    disabled: {
        backgroundColor: '#696969',
    },
    
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },

    buttonTextDisabled: {
        color: '#565656',
    },
})

export const AVVButton_Preview = () => {
    return (
        <PreviewBackground>
            <AVVButton style={'success'} title={"Title"} />
            <AVVButton style={'info'} title={"Title"} />
            <AVVButton style={'neutral'} title={"Title"} />
            <AVVButton style={'failure'} title={"Title"} />
            <AVVButton style={'disabled'} title={"Title"} />
        </PreviewBackground>
    )
}