import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Surface } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Report: undefined;
  Alerts: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.header}>
        <Title>Bem-vindo ao Não Vá Que É Barril</Title>
      </Surface>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Map')}
          style={styles.button}
        >
          Ver Mapa de Ocorrências
        </Button>

        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Report')}
          style={styles.button}
        >
          Registrar Nova Ocorrência
        </Button>

        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Alerts')}
          style={styles.button}
        >
          Meus Alertas
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    alignItems: 'center',
    elevation: 4,
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    marginVertical: 8,
  },
});

export default HomeScreen;
