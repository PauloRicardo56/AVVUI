import { StyleSheet, TouchableOpacity, View } from "react-native"
import { AVVText } from "./AVVText"
import { PreviewBackground } from "../utils/PreviewBackground"
import { useState, useCallback } from "react"

var containerIsTouchable = false

export const AVVScore = ({ home, away, isTouchable = false, onSelectionChange }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const handlePress = useCallback((index) => {
        setSelectedIndex(index);
        if (onSelectionChange) {
            onSelectionChange(index)
        }
    }, []);
    containerIsTouchable = isTouchable
    
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
    )
}

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