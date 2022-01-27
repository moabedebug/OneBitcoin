import React from "react";
import { View, Text } from "react-native"
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headePrice}>
            <Text>$ 54423.355</Text>
            <Text>Ultima cotação</Text>
        </View>
    )
}