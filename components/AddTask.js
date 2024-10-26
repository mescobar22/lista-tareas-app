import {Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export const AddTask = () => {
    return (
        <View style={styles.position}>
            <Text style={styles.text}>Tarea</Text>
            <TextInput style={styles.input} placeholder="     Escribe tu tarea aquí... "></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>Añadir</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    position: {
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    input: {
        width: 180,
        backgroundColor: "#BBDEFB",
        borderWidth: 1,    
        borderColor: "#2196F3"
    },
    button: {
        borderWidth: 2,
        borderColor: "#1976D2",
        backgroundColor: "#2196F3",
        alignItems: "center",
        borderRadius: 5,
        width: 100
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black" 
    },
    text_button: {
        fontSize: 20,
        color: "white" 
    }
  });