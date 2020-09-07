import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, Alert } from "react-native";
import {
    useNavigation,
    useFocusEffect,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import Header from "../../components/Header";
import ClassItem, { ClassProps } from "../../components/ClassItem";
import api from "../../services/api";

import { AxiosError, AxiosResponse } from "axios";

function FavoriteList() {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState<ClassProps[]>([]);
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    function handleNavigate(route: string) {
        if (route === "Previous") {
            navigation.goBack();
        } else {
            navigation.navigate(route);
        }
    }

    function loadFavorites() {
        AsyncStorage.getItem("favorites")
            .then((response) => {
                if (response) {
                    console.log(JSON.parse(response));

                    const ids = JSON.parse(response);

                    if (favoriteIds !== ids) {
                        setFavoriteIds(ids);
                    }
                } else {
                    Alert.alert("No response");
                }
            })
            .catch((error) => console.log(error));
    }

    function getFavorites() {
        if (favoriteIds.length !== 0) {
            api.get("/classes/ids", {
                params: {
                    ids: favoriteIds,
                },
            })
                .then((response: AxiosResponse) => {
                    const { classes } = response.data;

                    if (classes !== favorites) {
                        setFavorites(classes);
                    }
                })
                .catch((error: AxiosError) => {
                    console.log(error);
                });
        }
    }

    useFocusEffect(() => {
        useCallback(() => {
            loadFavorites();
        }, []);
    });

    useEffect(() => {
        getFavorites();
    }, [favoriteIds]);

    return (
        <View style={styles.container}>
            <Header title="Meus proffys favoritos"></Header>
            <ScrollView
                style={{
                    marginTop: -40,
                    overflow: "hidden",
                }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((favoriteItem: ClassProps) => {
                    return (
                        // <Text key={favoriteItem}>{favoriteItem}</Text>
                        <ClassItem
                            key={favoriteItem.id}
                            classItem={favoriteItem}
                            favorite={true}
                        ></ClassItem>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default FavoriteList;
