import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";

import styles from "./styles";

function Landing() {
    const navigation = useNavigation();

    function handleNavigate(route: string) {
        navigation.navigate(route);
    }

    return (
        <View style={styles.container}>
            <Header title="Proffys disponíveis" subtitle="Nenhum"></Header>
        </View>
    );
}

export default Landing;
