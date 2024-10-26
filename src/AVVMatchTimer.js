import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AVVText from './AVVText';
import { PreviewBackground } from '../utils/PreviewBackground';

const AVVMatchTimer = ({ isoString, typography='body', textColor='white' }) => {
    const initialTime = new Date(isoString)
    const currTime = new Date()
    const difference = currTime - initialTime
    const differenceInSeconds = Math.floor(difference / 1000)
    const differenceInMinutes = Math.floor(differenceInSeconds / 60)
    const reminder = differenceInSeconds % 60
    const [seconds, setSeconds] = useState(reminder);
    const [minutes, setMinutes] = useState(differenceInMinutes);
    const [isRunning, setIsRunning] = useState(false);
    const formatTwoDigits = (num) => String(num).padStart(2, '0');

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => {
            setSeconds((prevSec) => prevSec + 1)
            if (seconds === 59) {
                setSeconds(0)
                setMinutes((prevMin) => prevMin + 1)
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning, seconds]);

    return (
        <View style={{ alignItems: 'center', padding: 20 }}>
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

export function AVVMatchTimer_Preview() {
    return(
        <PreviewBackground>
            <AVVMatchTimer textColor={'red'} isoString={'2024-10-26T21:45:00.131Z'} />
            <AVVMatchTimer isoString={'2024-10-26T21:45:00.131Z'} />
        </PreviewBackground>
    )
}