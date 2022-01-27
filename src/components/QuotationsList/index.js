import React, { Fragment } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import styles from "./styles"

export default function QuatationsList(){
    return(
        <Fragment>
        <View>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textbuttonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textbuttonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textbuttonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textbuttonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textbuttonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        </Fragment>
    )
}