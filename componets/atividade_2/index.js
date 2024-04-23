import { View, Text } from "react-native";
import styles from './styles.js';

import Mensagem from './mensagem';

function Atividade_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Preços Dos Sucos</Text>
            
            <Mensagem suco='Suco Maçã' preco='1,50'/>
            <Mensagem suco='Suco Uva' preco='3,00'/>
            <Mensagem suco='Suco Laranja' preco='2,50'/>
            <Mensagem suco='Suco Limão' preco='3,99'/>
            
        </View> 
    );
};

export default Atividade_2;