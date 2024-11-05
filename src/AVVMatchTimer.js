import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AVVText from './AVVText';
import { PreviewBackground } from '../utils/PreviewBackground';
import brDate from '../utils/Time';

const AVVMatchTimer = ({
    style,
    isoString,
    period='FIRST_HALF',
    typography='body',
    textColor='white',
    onTimeUpdate
}) => {
    const initialTime = getTimeDifference(isoString)
    const [seconds, setSeconds] = useState(initialTime[0]);
    const [minutes, setMinutes] = useState(initialTime[1]);
    const formatTwoDigits = (num) => String(num).padStart(2, '0');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(getTimeDifference(isoString)[0])
            setMinutes(getTimeDifference(isoString)[1])
            if (onTimeUpdate) {
                onTimeUpdate({ minutes, seconds: seconds + 1 });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [onTimeUpdate, minutes, seconds]);

    return (
        <View style={[ {flexDirection: 'row'}, style]}>
            { period === "FIRST_HALF"
                ? <AVVText style={{ color: textColor }} typography={typography}>1⁰  </AVVText>
                : <AVVText style={{ color: textColor }} typography={typography}>2⁰  </AVVText>
            }
            <AVVText
                style={{ color: textColor }}
                typography={typography}
            >
                {formatTwoDigits(minutes)}:{formatTwoDigits(seconds)}
            </AVVText>
        </View>
    );
};

export default AVVMatchTimer;

function getTimeDifference(isoString) {
    const initialTime = new Date(isoString)
    const currTime = brDate()
    const difference = currTime - initialTime
    const differenceInSeconds = Math.floor(difference / 1000)
    const initialMinutes = Math.floor(differenceInSeconds / 60)
    const initialSeconds = differenceInSeconds % 60
    return [initialSeconds, initialMinutes]
}

export function AVVMatchTimer_Preview() {
    return(
        <PreviewBackground>
            <AVVMatchTimer textColor={'red'} isoString={brDate().toISOString()} />
            <AVVMatchTimer isoString={brDate().toISOString()} />
            <AVVMatchTimer textColor={'red'} isoString={brDate().toISOString()} period='SECOND_HALF'/>
            <AVVMatchTimer isoString={brDate().toISOString()} period='SECOND_HALF'/>
        </PreviewBackground>
    )
}