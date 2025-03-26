import { ActivityIndicator } from "react-native";

const AVVPrefetchView = ({ style, activityColor, isLoading, view }) => {
    return(
        <>
            { isLoading ? (
                <ActivityIndicator 
                    style={[{ backgroundColor: '#F5F5F5', flex: 1 }, style]}
                    size="large"
                    color={activityColor}
                />
            ) : (
                view
            )}
        </>
    )
}

export default AVVPrefetchView