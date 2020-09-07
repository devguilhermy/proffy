import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./src/pages/Landing";
import { AppLoading } from "expo";

import { useFonts } from "@expo-google-fonts/lato";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

export default function App() {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    } else {
        return (
            <>
                <AppStack />
                <StatusBar style="inverse" />
            </>
        );
    }
}
