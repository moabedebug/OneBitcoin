import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./style"

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        source={require("../../../img/bitcoin.png")}
                        style={styles.logoBitcoin}
                    />
                    <Text style={styles.dataCotation}>27/01/2022</Text>
                </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>$ 53331.052</Text>
                </View>
            </View>
        </View>
    )
}