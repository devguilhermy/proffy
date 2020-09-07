import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7",
    },
    filterForm: {
        marginBottom: 30,
    },
    inputBlock: {
        width: "48%",
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputLabel: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        color: "#d4c2ff",
    },
    inputField: {
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 8,
        marginBottom: 12,
        padding: 10,
    },
    toggleFilters: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#D4C2FF",
        width: "85%",
        padding: 10,
    },
    toggleFiltersButton: {
        flexDirection: "row",
    },
    toggleFiltersLabel: {
        marginHorizontal: 15,
        fontFamily: "Lato_400Regular",
        fontSize: 18,
        color: "#fff",
    },
    searchButton: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: "#04D361",
        padding: 20,
        borderRadius: 8,
    },
    removeFiltersButton: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: "#e33d3d",
        padding: 20,
        borderRadius: 8,
    },
    searchButtonLabel: {
        fontSize: 16,
        fontFamily: "Lato_700Bold",
        color: "#fff",
    },
});

export default styles;
