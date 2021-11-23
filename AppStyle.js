import { StyleSheet } from "react-native"

export default StyleSheet.create({
    header:{
        height: 50, width: 393, backgroundColor: 'gray', justifyContent: "center"
    },
    footer:{
        height: 50, width: 393, backgroundColor: 'lightcoral', justifyContent: "center"
    },
    text_big:{
        fontWeight: 'bold', fontSize: 25, color:'white', textAlign: 'left'
    },
    container:{
        flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:'white'
    },
    text_nim:{
        fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center'
    }
});