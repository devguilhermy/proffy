import React from "react";

import styles from "./styles";
import { View, Image, Text } from "react-native";

import backImg from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    title: String;
    subtitle?: String;
}

function Header(props: HeaderProps) {
    const navigation = useNavigation();

    function handleNavigate(route: string) {
        if (route === "Previous") {
            navigation.goBack();
        } else {
            navigation.navigate(route);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={() => handleNavigate("Landing")}>
                    <Image source={backImg} resizeMode="contain"></Image>
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain"></Image>
            </View>
            <Text style={styles.title}>{props.title}</Text>
            {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
        </View>
    );
}

export default Header;
