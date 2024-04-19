import { View, Text } from "react-native";
import styles from './styles.js';

export default function atividade_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
               Atividade_2

               <Mensagem nome='Thiago' Sobrenome='Sampaio'/>
                <Mensagem nome='Tatiana' idade={150}/>
                <Mensagem nome='Vanessa'/>
                <Mensagem nome='Ester'/>
            </Text>

            
        </View> 
    );
}