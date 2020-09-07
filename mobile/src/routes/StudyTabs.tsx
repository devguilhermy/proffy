import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
const { Navigator, Screen } = createBottomTabNavigator();

import ClassList from "../pages/ClassList";
import FavoriteList from "../pages/FavoriteList";

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                iconStyle: {
                    flex: 0,
                    width: 35,
                    height: 30,
                },
                labelStyle: {
                    fontFamily: "Lato_700Bold",
                    fontSize: 17,
                    marginLeft: 16,
                },
                activeBackgroundColor: "#ebebf5",
                activeTintColor: "#32264d",
                inactiveBackgroundColor: "#fafafc",
                inactiveTintColor: "#c1bccc",
            }}
        >
            <Screen
                name="ClassList"
                component={ClassList}
                options={{
                    tabBarLabel: "Proffys",
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <FontAwesome5
                                name="chalkboard-teacher"
                                size={size}
                                color={focused ? "#8257e5" : color}
                            ></FontAwesome5>
                        );
                    },
                }}
            ></Screen>
            <Screen
                name="FavoriteList"
                component={FavoriteList}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <FontAwesome5
                                name="heart"
                                size={size}
                                color={focused ? "#8257e5" : color}
                            ></FontAwesome5>
                        );
                    },
                }}
            ></Screen>
        </Navigator>
    );
}

export default StudyTabs;
