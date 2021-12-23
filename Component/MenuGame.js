import React, { Component } from "react";
import { View, Text } from "react-native";

const MenuGame1 = () => {
    return (
        <Text>Game 1</Text>
    );
}

const MenuGame2 = () => {
    return (
        <Text>Game 2</Text>
    );
}

const MenuGame3 = () => {
    return (
        <Text>Game 3</Text>
    );
}

class MenuGame extends Component {
    render() {
        return(
            <View>
                <MenuGame1/>
                <MenuGame2/>
                <MenuGame3/>
            </View>
        );
    };
}

export default MenuGame;