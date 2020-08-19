import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257E5",
        justifyContent: "center",
        padding: 30,
    },

    banner: {
        width: "100%",
        resizeMode: "contain",
    },

    title: {
        color: "#fff",
        fontFamily: "Poppins_400Regular",
        fontSize: 30,
        lineHeight: 40,
        marginTop: 60,
    },

    titleBold: {
        fontFamily: "Poppins_600SemiBold",
    },

    buttonsContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    button: {
        height: 120,
        width: "48%",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 20,
    },

    buttonPrimary: {
        backgroundColor: "#9871f5",
    },

    buttonSecondary: {
        backgroundColor: "#04d361",
    },

    buttonText: {
        fontFamily: "Lato_700Bold",
        fontSize: 20,
        color: "#fff",
    },

    connections: {
        fontFamily: "Poppins_400Regular",
        color: "#d4c2ff",
        fontSize: 18,
        lineHeight: 30,
        maxWidth: "100%",
        marginTop: 40,
    },
});

export default styles;
