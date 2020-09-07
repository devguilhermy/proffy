import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 40,
        backgroundColor: "#8257e5",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        marginBottom: 15,
    },
});

export default styles;
