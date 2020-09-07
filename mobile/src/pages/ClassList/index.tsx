import React, { useState, useEffect, useCallback } from "react";
import {
    Text,
    View,
    ScrollView,
    TextInput,
    Alert,
    AsyncStorage,
} from "react-native";
import {
    useNavigation,
    useFocusEffect,
} from "@react-navigation/native";
import {
    BorderlessButton,
    RectButton,
} from "react-native-gesture-handler";

import api from "../../services/api";

import Header from "../../components/Header";
import ClassItem, { ClassProps } from "../../components/ClassItem";

import styles from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AxiosError, AxiosResponse } from "axios";

function ClassList() {
    const navigation = useNavigation();
    const [filtersVisibility, setFiltersVisibility] = useState(false);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    const [classList, setClassList] = useState<ClassProps[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function handleNavigate(route: string) {
        if (route === "Previous") {
            navigation.goBack();
        } else {
            navigation.navigate(route);
        }
    }

    function handleTogglingFilters() {
        setFiltersVisibility(!filtersVisibility);
    }

    async function loadFavoritesList() {
        const response = await AsyncStorage.getItem("favorites");
        if (response) {
            setFavorites(JSON.parse(response));
        }
    }

    async function loadClassList() {
        // api.get("/classes", {
        //     params: {
        //         subject: subject,
        //         week_day: week_day,
        //         time: time,
        //     },
        // })
        //     .then((response: AxiosResponse) => {
        //         if (response.data.classes.length == 0) {
        //             Alert.alert("Sem resultados");
        //         } else {
        //             setClassList(response.data.classes);
        //         }
        //     })
        //     .catch((error: AxiosError) => {
        //         console.log(error);
        //     });

        try {
            const response = await api.get("/classes", {
                params: {
                    subject: subject,
                    week_day: week_day,
                    time: time,
                },
            });

            if (response.data.classes.length === 0) {
                Alert.alert("Sem resultados");
            } else {
                setClassList(response.data.classes);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadFavoritesList();

        const currentClasses = [...classList];
        setClassList([]), setClassList(currentClasses);
    });

    function handleApplyFilters() {
        loadFavoritesList();
        loadClassList();

        setFiltersVisibility(false);
    }

    function handleRemoveFilters() {
        setSubject("");
        setWeekDay("");
        setTime("");

        setClassList([]);
    }

    return (
        <View style={styles.container}>
            <Header
                title="Proffys disponíveis"
                headerRight={
                    <BorderlessButton onPress={handleTogglingFilters}>
                        <MaterialCommunityIcons
                            name="filter"
                            size={25}
                            color="lightgreen"
                        ></MaterialCommunityIcons>
                    </BorderlessButton>
                }
            >
                {filtersVisibility && (
                    <View style={styles.filterForm}>
                        <Text style={styles.inputLabel}>Matéria</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Digite a matéria"
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                        ></TextInput>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.inputLabel}>
                                    Dia da semana
                                </Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Escolha o dia"
                                    value={week_day}
                                    onChangeText={(text) =>
                                        setWeekDay(text)
                                    }
                                ></TextInput>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.inputLabel}>
                                    Horário
                                </Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Escolha um horário"
                                    value={time}
                                    onChangeText={(text) =>
                                        setTime(text)
                                    }
                                ></TextInput>
                            </View>
                        </View>
                        <RectButton
                            style={styles.searchButton}
                            onPress={handleApplyFilters}
                        >
                            <Text style={styles.searchButtonLabel}>
                                {"   "}Filtrar
                            </Text>
                        </RectButton>
                        {(subject !== "" ||
                            week_day !== "" ||
                            time !== "") && (
                            <RectButton
                                style={styles.removeFiltersButton}
                                onPress={handleRemoveFilters}
                            >
                                <MaterialCommunityIcons
                                    name="filter-remove"
                                    size={24}
                                    color="#fff"
                                ></MaterialCommunityIcons>
                                <Text
                                    style={styles.searchButtonLabel}
                                >
                                    {"   "}Remover filtros
                                </Text>
                            </RectButton>
                        )}
                    </View>
                )}
            </Header>

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
                {classList.length > 0
                    ? classList.map((classItem: ClassProps) => {
                          return (
                              <ClassItem
                                  key={classItem.id}
                                  classItem={classItem}
                                  favorite={favorites.includes(
                                      classItem.id
                                  )}
                              />
                          );
                      })
                    : null}
            </ScrollView>
        </View>
    );
}

export default ClassList;
