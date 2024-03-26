import { View, Text } from 'react-native';
import styles from './styles';

import Mensagem from './mensagem';
 
function Exemplo2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem/>
        </View>
    );
} 

export default Exemplo2;