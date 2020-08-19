import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: "#8257e5",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "Lato_700Bold",
        color: "#fff",
        fontSize: 25,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 20,
    },
    subtitle: {
        fontFamily: "Lato_400Regular",
        fontSize: 18,
        color: "#fff",
    },
});

export default styles;
