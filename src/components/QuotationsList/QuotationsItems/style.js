import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent:{
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    contextLeft:{
        width: "36%",
        alignItems: "flex-start",

    },
    boxLogo:{
        flexDirection: "row",
        alignItems: "center"
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2
    },
    dayCotation:{
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 5,
        color: "#ffffff"
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end",
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#ffffff"
    }
})

export default styles