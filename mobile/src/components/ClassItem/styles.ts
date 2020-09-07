import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e6e6f0",
        marginBottom: 16,
        overflow: "hidden",
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        padding: 24,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#eee",
    },
    info: {
        marginLeft: 15,
    },
    teacherName: {
        fontFamily: "Lato_700Bold",
        fontSize: 20,
        color: "#32264d",
    },
    subject: {
        fontFamily: "Poppins_400Regular",
        color: "#6a6180",
        fontSize: 14,
        marginTop: 4,
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#6a6180",
    },
    footer: {
        backgroundColor: "#FAFAFC",
        borderTopWidth: 1,
        borderTopColor: "#e6e6f0",
        padding: 24,
        marginTop: 24,
        alignItems: "center",
    },
    price: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    priceLabel: {
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        color: "#6a6180",
    },
    priceNumber: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 18,
        color: "#8257e5",
    },
    actions: {
        marginTop: 24,
        flexDirection: "row",
    },
    favoriteButton: {
        height: 50,
        width: 50,
        padding: 15,
        marginRight: 8,
        backgroundColor: "#8257e5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    unfavoriteButton: {
        backgroundColor: "#e33d3d",
    },
    contactButton: {
        height: 50,
        flex: 1,
        padding: 15,
        backgroundColor: "#04D361",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    buttonIcon: {
        color: "#fff",
        fontSize: 20,
    },
    buttonLabel: {
        fontFamily: "Lato_700Bold",
        color: "#fff",
        fontSize: 18,
    },
});

export default styles;
