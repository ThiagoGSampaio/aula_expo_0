import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './componets/exemplo_1';
import Exemplo2 from './componets/exemplo_2';
import Exemplo_3 from './componets/exemplo_3';

import Atividade_1 from './componets/atividade_1';
import Atividade_2 from './componets/atividade_2';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f04d4d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
