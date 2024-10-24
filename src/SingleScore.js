import { TouchableOpacity } from "react-native"
import { AVVText } from "./AVVText"

export const SingleScore = ({team, score, isSelected, onPress}) => {
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
            <AVVText style={s.teamTitle} typography={'h4'}> {team} </AVVText>
            <AVVText typography={'h1'}> {score} </AVVText>
        </TouchableOpacity>
    )
}