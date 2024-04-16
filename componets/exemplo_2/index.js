import { View, Text } from 'react-native';
import styles from './styles';

import Mensagem from './mensagem';
 
function Exemplo2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem nome='Thiago' Sobrenome='Sampaio'/>
            <Mensagem nome='Tatiana' idade={150}/>
            <Mensagem nome='Vanessa'/>
            <Mensagem nome='Ester'/>
        </View>
    );
} 

export default Exemplo2;