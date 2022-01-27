import React from "react";
import { View, Text } from "react-native"
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headePrice}>
            <Text style={styles.CurrentPrice}>$ 54423.355</Text>
            <Text style={styles.textPrice}>Ultima cotação</Text>
        </View>
    )
}