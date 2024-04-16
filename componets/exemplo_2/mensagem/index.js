import { View, Text } from 'react-native';
import styles from '../styles';

export default function Mensagem ({nome, Sobrenome, idade}){
    return(
        <View style={styles.viewmensagem}>
                <Text style={styles.mensagem}>{`Olá ${nome} ${Sobrenome} ${idade}`}</Text>
        </View>
    );
};