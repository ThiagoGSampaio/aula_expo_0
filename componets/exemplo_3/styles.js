import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8a6915',
        borderRadius:20,
        width: '100%',
        alignItems: 'center',
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#daa520',
        
    },

    botao:{
        //backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        width: '80%',
        alignItems: 'center',
        borderColor: '#daa520',
    },

    txtBotao:{
        fontSize: 25,
        color:'#daa520',
    },

    botaoPress:{
        backgroundColor: '#daa520',
    }, 

 
})

export default styles;