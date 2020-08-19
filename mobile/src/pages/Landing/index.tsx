import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import teachIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import { RectButton } from "react-native-gesture-handler";

function Landing() {
    const navigation = useNavigation();

    function handleNavigate(route: string) {
        navigation.navigate(route);
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Bem-vindo ao Proffy! {"\n"}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={() => handleNavigate("Study")}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton
                    onPress={() => handleNavigate("Teach")}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={teachIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.connections}>
                <Image source={heartIcon} /> Total de 3000 conexões realizadas
            </Text>
        </View>
    );
}

export default Landing;
