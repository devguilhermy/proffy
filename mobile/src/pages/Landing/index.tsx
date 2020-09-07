import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import teachIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

import { AxiosError, AxiosResponse } from "axios";

function Landing() {
    const navigation = useNavigation();

    function handleNavigate(route: string) {
        if (route === "Previous") {
            navigation.goBack();
        } else {
            navigation.navigate(route);
        }
    }

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get("/connections")
            .then((response: AxiosResponse) => {
                setTotalConnections(response.data.total);
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Bem-vindo ao Proffy! {"\n"}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={() => handleNavigate("Study")}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudarr</Text>
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
                <Image source={heartIcon} /> Total de{" "}
                {totalConnections} conexões realizadas
            </Text>
        </View>
    );
}

export default Landing;
