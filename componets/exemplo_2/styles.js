import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2c0f0',
        height:'100%',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        /*justifyContent: 'center',*/
        padding: 8,
        
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
    },

    mensagem:{
        fontSize: 25,
        margin: 10,
    },

    viewmensagem:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
    },
});

export default styles;