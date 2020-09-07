import React, { useState, useEffect } from "react";
import {
    View,
    Image,
    Text,
    Linking,
    Alert,
    RefreshControl,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import api from "../../services/api";

// export interface TeacherProps {
//     id: number;
//     name: string;
//     avatar: string;
//     bio: string;
//     whatsapp: string;
//     subject: string;
//     description: string;
//     price: string;
// }

export interface ClassProps {
    id: number;
    subject: string;
    description: string;
    price: number;
    teacher_id: number;
    teacher: Array<{
        id: number;
        name: string;
        bio: string;
        whatsapp: string;
        avatar: string;
    }>;
    class_schedules: Array<{
        id: number;
        week_day: number;
        from: number;
        to: number;
        class_id: number;
    }>;
}

interface ClassItem {
    classItem: ClassProps;
    favorite: boolean;
}

function ClassItem({ classItem, favorite }: ClassItem) {
    const classTeacher = classItem.teacher[0];
    const [isFavorite, setIsFavorite] = useState(favorite);

    function addConnection() {
        api.post("/connections", {
            teacher_id: classTeacher.id,
        }).catch((error) => {
            Alert.alert(error);
        });
    }

    async function handleWhatsappLink() {
        addConnection();

        const url = `whatsapp://send?phone=${classTeacher.whatsapp}`;
        const canOpen = await Linking.canOpenURL(url);

        if (canOpen) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Não foi possível abrir o WhatsApp");
        }
    }

    // useEffect(() => {
    //     // AsyncStorage.removeItem("favorites");
    //     AsyncStorage.getItem("favorites").then((response) => {
    //         if (response) {
    //             setFavorites(JSON.parse(response));
    //         }
    //     });
    // }, []);

    // useEffect(() => {
    //     AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    //     // console.log(favorites);
    // }, [favorites]);

    // async function handleToggleFavorite() {
    //     let favList = [...favorites];
    //     let index = favList.indexOf(teacher.id);

    //     if (isFavorite) {
    //         if (index > -1) {
    //             favList.splice(index, 1);
    //         }
    //     } else {
    //         if (index > -1) {
    //             Alert.alert("Esse professor já está favoritado!");
    //         } else {
    //             favList.push(teacher.id);
    //         }
    //     }

    //     setFavorites(favList);
    //     setIsFavorite(!isFavorite);
    // }

    async function handleToggleFavorite() {
        let favoritesArray = [];

        const response = await AsyncStorage.getItem("favorites");

        if (response) {
            favoritesArray = JSON.parse(response);
        }
        // const favoriteIndex = favoritesArray.findIndex(
        //     (item: TeacherProps) => {
        //         item.id === teacher.id;
        //     }
        // );
        const favoriteIndex = favoritesArray.indexOf(classItem.id);

        if (isFavorite) {
            favoritesArray.splice(favoriteIndex, 1);
        } else {
            if (favoriteIndex > -1) {
                Alert.alert("Essa classe já está favoritada!");
            } else {
                favoritesArray.push(classItem.id);
            }
        }

        setIsFavorite(!isFavorite);
        AsyncStorage.setItem(
            "favorites",
            JSON.stringify(favoritesArray)
        );

        console.log(favoritesArray);

        // <RefreshControl refreshing={true}></RefreshControl>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: classTeacher.avatar,
                    }}
                ></Image>

                <View style={styles.info}>
                    <Text style={styles.teacherName}>
                        {classTeacher.name}
                    </Text>
                    <Text style={styles.subject}>
                        {classItem.subject}
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>{classTeacher.bio}</Text>
            <View style={styles.footer}>
                <View style={styles.price}>
                    <Text style={styles.priceLabel}>
                        Preço/hora {"   "}
                        <Text style={styles.priceNumber}>
                            R$ {classItem.price}
                        </Text>
                    </Text>
                </View>
                <View style={styles.actions}>
                    <RectButton
                        style={[
                            styles.favoriteButton,
                            isFavorite ? styles.unfavoriteButton : {},
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        {isFavorite ? (
                            <Ionicons
                                name={"ios-heart-dislike"}
                                style={styles.buttonIcon}
                            />
                        ) : (
                            <Ionicons
                                name="ios-heart"
                                style={styles.buttonIcon}
                            />
                        )}
                    </RectButton>
                    <RectButton
                        onPress={handleWhatsappLink}
                        style={styles.contactButton}
                    >
                        <Ionicons
                            name={"logo-whatsapp"}
                            style={styles.buttonIcon}
                        ></Ionicons>
                        <Text style={styles.buttonLabel}>
                            {"   "}Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default ClassItem;
