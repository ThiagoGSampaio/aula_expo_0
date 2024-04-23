import { View, Text } from 'react-native';
import styles from './styles';

export default function Mensagem ({suco = '', preco = ''}){
    return(
        <View style={styles.viewmensagem}>
                <Text style={styles.mensagem}>{`${suco} ${preco} `}</Text>
        </View>
    );
};