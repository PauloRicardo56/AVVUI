import { FlatList, StyleSheet, View } from "react-native";
import { PreviewBackground } from "../utils/PreviewBackground";
import AVVTableCell from "./AVVTableCell";
import { useState, useCallback } from "react";
// import { AVVTitleTableCell } from "./AVVTitleTableCell";
import AVVGameTableCell from "./AVVGameTableCell";
import AVVTitleTableCell from "./AVVTitleTableCell";

const AVVTable = ({ style, data, avvCell=()=>{} }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <FlatList
            style={[s.container, style]}
            data={data}
            // TODO: figure way to clear selected index when reloading table, so the background will not appear (current implementation does not work.)
            onLayout={ () => { setSelectedIndex(-1); console.log(1234567894561230) } }
            renderItem={({ item, index }) => (
                <View key={index}>
                    {avvCell(
                        item,
                        index,
                        selectedIndex === index,
                        () => setSelectedIndex(index)
                    )}
                </View>
            )}
        />
    )
}

export default AVVTable

const s = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
    }
})

export const AVVTable_Preview = () => {
    const mock1 = [
        {
            name: 'Payet'
        },
        {
            name: 'Vaggeti'
        },
        {
            name: 'Leo Jardim'
        },
        {
            name: 'Pele'
        }
    ]

    const mock2 = [
        {
        "home": {
            "team": "S\u00e3o Paulo",
            "score": 3
        },
        "away": {
            "team": "Vasco da Gama",
            "score": 0
        },
        "date": "2024-10-16T00:00:00",
        "championship": "Campeonato Brasileiro",
        "goals": [
            {
            "period": "FIRST_HALF",
            "time": "9'",
            "player": "Luciano",
            "team": "HOME"
            },
            {
            "period": "SECOND_HALF",
            "time": "1'",
            "player": "Lucas Moura",
            "team": "HOME"
            },
            {
            "period": "SECOND_HALF",
            "time": "22'",
            "player": "Lucas Moura",
            "team": "HOME"
            }
        ],
        "status": "FINAL_TIME"
        },
        {
        "home": {
            "team": "Vasco da Gama",
            "score": 1
        },
        "away": {
            "team": "Juventude",
            "score": 1
        },
        "date": "2024-10-05T00:00:00",
        "championship": "Campeonato Brasileiro",
        "goals": [
            {
            "period": "FIRST_HALF",
            "time": "4'",
            "player": "Edson Guilherme Mendes dos Santos",
            "team": "AWAY"
            },
            {
            "period": "FIRST_HALF",
            "time": "11'",
            "player": "Dimitri Payet",
            "team": "HOME"
            }
        ],
        "status": "FINAL_TIME"
        },
        {
        "home": {
            "team": "Atl\u00e9tico-MG",
            "score": 2
        },
        "away": {
            "team": "Vasco da Gama",
            "score": 1
        },
        "date": "2024-10-02T00:00:00",
        "championship": "Copa do Brasil",
        "goals": [
            {
            "period": "FIRST_HALF",
            "time": "14'",
            "player": "Philippe Coutinho",
            "team": "AWAY"
            },
            {
            "period": "FIRST_HALF",
            "time": "38'",
            "player": "Guilherme Arana",
            "team": "HOME"
            },
            {
            "period": "FIRST_HALF",
            "time": "44'",
            "player": "Paulinho",
            "team": "HOME"
            }
        ],
        "status": "FINAL_TIME"
        }
    ]

    return (
        <PreviewBackground gap={0}>
            <AVVTable
                style={{ padding: 30 }}
                data={mock1}
                avvCell={(item) => <AVVTitleTableCell title={item.name} />}
            />

            <AVVTable
                style={{ padding: 30 }}
                data={mock1}
                avvCell={(item, index, isSelected, onPress) =>
                    <AVVTitleTableCell
                        title={item.name}
                        orientation='right'
                        isSelectionEnabled={true}
                        isSelected={isSelected}
                        onPress={onPress}
                    />
                }
            />

            <AVVTable
                style={{ padding: 0 }}
                data={mock2}
                avvCell={(item, index, isSelected, onPress) =>
                    <AVVGameTableCell
                        match={item}
                        // isSelectionEnabled={true}
                        // isSelected={isSelected}
                        // onPress={onPress}
                    />
                }
            />
        </PreviewBackground>
    )
}