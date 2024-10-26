import {Text, View, StyleSheet} from "react-native";

export const Header = () => {
    return (
        <View style={styles.position}>
            <Text style={styles.text}>Lista de tareas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    position: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 60
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black", 
    },
});
  