import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import teachBackgroundImg from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";

export default function Teach() {
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
            <ImageBackground
                resizeMode="contain"
                style={styles.content}
                source={teachBackgroundImg}
            >
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.subtitle}>
                    Ainda não temos suporte para cadastro pelo app, você precisa usar a plataforma
                    web para continuar ...
                </Text>
            </ImageBackground>
            <RectButton onPress={() => handleNavigate("Previous")} style={styles.button}>
                <Text style={styles.buttonText}>Eu entendo</Text>
            </RectButton>
        </View>
    );
}
