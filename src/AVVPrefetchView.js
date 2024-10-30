import { ActivityIndicator } from "react-native";

const AVVPrefetchView = ({ isLoading, view }) => {
    return(
        <>
            { isLoading ? (
                <ActivityIndicator 
                    style={{ backgroundColor: '#0f0f0f', flex: 1 }}
                    size="large"
                    color='#fff'
                />
            ) : (
                view
            )}
        </>
    )
}

export default AVVPrefetchView