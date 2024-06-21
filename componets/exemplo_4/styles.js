import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#544433',
        borderRadius:20,
        width: '100%',
        alignItems: 'center',
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'white',
        
    },

    input:{
        fontSize: 25,
        width: '80%',
        color:'white',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        borderRadius: 20,
    },

    texto:{
        fontSize: 25,
        color: 'white',
        width: '80%',
        marginVertical: 10,
    },

});

export default styles;