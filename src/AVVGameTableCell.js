import { StyleSheet, View } from "react-native"
import { formatMonthDay, formatWeekDay } from "../utils/DateFormatter"
import { formatVASCO } from "../utils/StringFormatter"
import AVVTableCell from "./AVVTableCell"
import AVVText from "./AVVText"

const AVVGameTableCell = ({
    match,
    isSelectionEnabled=false,
    isSelected=false,
    onPress=() => {}
}) => {
    return (
        <AVVTableCell
            style={s.cell}
            isSelectionEnabled={isSelectionEnabled}
            isSelected={isSelected}
            onPress={onPress}
            hideSeparator={true}
        >
            <View style={s.container}>
                <View style={s.date}>
                    <AVVText typography={'annotation'}> {formatWeekDay(match.date)} </AVVText>
                    <AVVText typography={'annotation'}> {formatMonthDay(match.date)} </AVVText>
                </View>

                <View style={s.teams}>
                    <AVVText typography={'body'}> {formatVASCO(match.home.team)} </AVVText>
                    <AVVText typography={'body'}> {formatVASCO(match.away.team)} </AVVText>
                </View>

                <View style={s.score}>
                    <AVVText typography={'bodybold'}> {match.home.score} </AVVText>
                    <AVVText typography={'bodybold'}> {match.away.score} </AVVText>
                </View>
                
                <AVVText style={s.status} typography={'annotation'}> {matchStatus(match.status)} </AVVText>
            </View>
        </AVVTableCell>
    )
}

export default AVVGameTableCell

function matchStatus(status) {
    if (status == 'FINAL_TIME') {
        return 'Enc.'
    }
}

const s = StyleSheet.create({
    cell: {
        height: 64,
    },

    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    date: {
        alignItems: 'center',
        paddingHorizontal: 16
    },

    teams: {
        flex: 3
    },

    status: {
        width: 70,
        textAlign: 'center',
    }
})