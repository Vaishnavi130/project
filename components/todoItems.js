import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({item}) {
    
    return(
        <TouchableOpacity>
            <Text>{item.items}</Text>
        </TouchableOpacity>
    )

}

const Styles =StyleSheet.create({
    item:{
        padding:16,
    }
})