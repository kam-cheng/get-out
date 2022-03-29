import MapView from "react-native-maps";
import {Text} from "react-native"

export default function MapBox () {
    return (
        <View style={styles.container}>
            <Text>Map goes here</Text>
        </View>>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 400,
        backgroundColor: "#ccc"
    }
})