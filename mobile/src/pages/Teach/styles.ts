import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257E5",
        justifyContent: "center",
        padding: 30,
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontFamily: "Lato_700Bold",
        fontSize: 32,
        lineHeight: 37,
        color: "#FFF",
        textAlign: "center",
    },
    subtitle: {
        marginTop: 25,
        fontFamily: "Lato_400Regular",
        fontSize: 20,
        lineHeight: 25,
        color: "#FFF",
        textAlign: "center",
    },

    button: {
        marginVertical: 40,
        height: 50,
        backgroundColor: "#04d361",
        padding: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        fontFamily: "Lato_700Bold",
        fontSize: 20,
        color: "#fff",
    },
});

export default styles;
