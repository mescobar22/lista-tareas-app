import {Text, View, StyleSheet} from "react-native";

export const Tasks = () => {
    return (
        <View style={styles.position}>
            <Text style={styles.text}>Tarea 1</Text>
            <Text style={styles.text}>Tarea 2</Text>
            <Text style={styles.text}>Tarea 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    position: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 2,
        margin: 30,
        borderWidth: 1,          
        borderColor: "#2196F3",
        backgroundColor: '#BBDEFB'
    },
    text: {
        fontSize: 20,
        color: "black"
    }
});