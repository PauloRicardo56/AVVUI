import { StyleSheet, View, TouchableOpacity } from "react-native";
import { PreviewBackground } from "../utils/PreviewBackground";
import { useState, useCallback } from "react";
import AVVText from "./AVVText";

var containerIsTouchable = false;

const AVVScore = ({ 
    home={ team: "", score: 0 }, 
    away={ team: "", score: 0 }, 
    isTouchable = false, 
    onSelectionChange 
}) => {
    containerIsTouchable = isTouchable
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
            
            <SingleScore 
                team={away.team} 
                score={away.score} 
                isSelected={selectedIndex === 1} 
                onPress={() => handlePress(1)} 
            />

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
            style={scoreStyle}
            disabled={!containerIsTouchable}
            onPress={onPress}
        >
            <View style={[s.teamTitle]}>
                <AVVText style={{textAlign: 'center'}} typography={'h4'} numberOfLines={2}> {team} </AVVText>
            </View>
            <AVVText typography={'h1'} numberOfLines={2}> {score} </AVVText>
        </TouchableOpacity>
    );
}

export default AVVScore;
export { SingleScore };

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
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})

export const AVVScore_Preview = () => {
    const mock = {
        home: {
            team: 'Vasco da Gama',
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