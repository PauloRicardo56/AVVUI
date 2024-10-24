import { StyleSheet, View, TouchableOpacity } from "react-native";
import { PreviewBackground } from "../utils/PreviewBackground";
import { useState, useCallback } from "react";
import { AVVText } from "./AVVText";

var containerIsTouchable = false;

const AVVScore = ({ home, away, isTouchable = false, onSelectionChange }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const handlePress = useCallback((index) => {
        setSelectedIndex(index);
        if (onSelectionChange) {
            onSelectionChange(index)
        }
    }, []);
    
    return (
        <View style={s.container}>
            <SingleScore
                team={home.team} 
                score={home.score} 
                isSelected={selectedIndex === 0} 
                onPress={() => handlePress(0)}
            />
            
            {/* <SingleScore 
                team={away.team} 
                score={away.score} 
                isSelected={selectedIndex === 1} 
                onPress={() => handlePress(1)} 
            /> */}

        </View>
    );
}

const SingleScore = ({team, score, isSelected, onPress}) => {
    const scoreStyle = [
        s.scoreContainer,
        containerIsTouchable && isSelected && s.scoreContainerSelected
    ]

    return (
        <TouchableOpacity 
            // style={scoreStyle}
            // disabled={!containerIsTouchable}
            // onPress={onPress}
        >
            <AVVText style={s.teamTitle} typography={'h4'}> {team} </AVVText>
            <AVVText typography={'h1'}> {score} </AVVText>
        </TouchableOpacity>
    );
}

export default AVVScore
export { SingleScore }
export { AVVText }

const s = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    scoreContainer: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: '#0f0f0f'
    },

    scoreContainerSelected: {
        borderRadius: 6,
        backgroundColor: '#474747'
    },

    teamTitle: {
        textAlign: 'center',
        width: '86%',
    }
})

export const AVVScore_Preview = () => {
    const mock = {
        home: {
            team: 'VASCO',
            score: 6
        },
        away: {
            team: 'Internacional',
            score: 2,
        }
    }

    const selectedTeam = (index) => {
        console.log(index)
    }

    return (
        <PreviewBackground>
            <AVVScore home={mock.home} away={mock.away} />
            <AVVScore home={mock.home} away={mock.away} isTouchable={true} onSelectionChange={selectedTeam} />
        </PreviewBackground>
    )
}