import React, { Component } from "react";
import { View, Text } from "react-native";
import MenuGame from "./MenuGame";

const MenuUtama1 = () => {
    return (
        <Text>Menu Utama 1</Text>
    );
}

const MenuUtama2 = () => {
    return (
        <Text>Menu Utama 2</Text>
    );
}

class MenuUtama extends Component {
    render() {
        return(
            <View>
                <MenuUtama1 />
                <MenuUtama2 />
            </View>
        );
    };
};

export default MenuUtama;
