import { StyleSheet } from "react-native"
import { AVVTableCell } from "./AVVTableCell"
import { AVVText } from "./AVVText"

export const AVVTitleTableCell = ({
    title,
    orientation='left',
    isSelectionEnabled=false,
    isSelected=false,
    onPress=() => {}
}) => {
    return (
        <AVVTableCell
            style={{ height: 40 }}
            isSelectionEnabled={isSelectionEnabled}
            isSelected={isSelected}
            onPress={onPress}
        >
            { orientation == "left"
                ? <AVVText style={s.title}> {title} </AVVText>
                : <AVVText style={[s.title, s.rightIndent]}> {title} </AVVText>
            }
        </AVVTableCell>
    )
}

export default AVVTitleTableCell

const s = StyleSheet.create({
    title: {
        paddingBottom: 8,
    },

    rightIndent: {
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
})