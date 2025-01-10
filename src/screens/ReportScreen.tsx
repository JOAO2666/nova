import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Chip, HelperText } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Report: undefined;
  Alerts: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Report'>;

const ReportScreen = ({ navigation }: Props) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const incidentTypes = [
    'Assalto',
    'Furto',
    'Arrombamento',
    'Sequestro',
    'Outros',
  ];

  const handleSubmit = () => {
    // Aqui vai a lógica para enviar a ocorrência para o backend
    console.log({ type, description, location });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Registrar Nova Ocorrência</Title>

      <View style={styles.chipContainer}>
        {incidentTypes.map((incidentType) => (
          <Chip
            key={incidentType}
            selected={type === incidentType}
            onPress={() => setType(incidentType)}
            style={styles.chip}
          >
            {incidentType}
          </Chip>
        ))}
      </View>

      <TextInput
        label="Localização"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
        placeholder="Digite o endereço ou use sua localização atual"
      />

      <TextInput
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={styles.input}
        placeholder="Descreva o que aconteceu..."
      />

      <HelperText type="info">
        Suas informações serão tratadas com sigilo e compartilhadas apenas com as autoridades competentes.
      </HelperText>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        disabled={!type || !description || !location}
      >
        Registrar Ocorrência
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    marginBottom: 32,
  },
});

export default ReportScreen;
