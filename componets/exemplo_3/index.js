import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function Exemplo_3() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Pressable
                onPress={() => alert('Auto Desturição em 10s')}
                style={({pressed}) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtBotao}>Clique Aqui</Text>
            </Pressable>
        </View>
    )
}