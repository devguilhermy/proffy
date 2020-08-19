import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Header from "../../components/Header";

function FavoriteList() {
    const navigation = useNavigation();

    function handleNavigate(route: string) {
        navigation.navigate(route);
    }

    return (
        <View style={styles.container}>
            <Header title="Meus proffys favoritos"></Header>
        </View>
    );
}

export default FavoriteList;
