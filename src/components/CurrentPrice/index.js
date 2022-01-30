import React from "react";
import { View, Text } from "react-native"

import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headePrice}>
            <Text style={styles.CurrentPrice}>Bitcoin</Text>
            <Text style={styles.textPrice}>Cotação</Text>
        </View>
    )
}