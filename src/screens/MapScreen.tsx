import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Report: undefined;
  Alerts: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

const MapScreen = ({ navigation }: Props) => {
  const [visible, setVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const initialRegion = {
    latitude: -12.9704,  // Salvador, BA
    longitude: -38.5124,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Dados mockados de ocorrências
  const incidents = [
    {
      id: 1,
      coordinate: {
        latitude: -12.9704,
        longitude: -38.5124,
      },
      title: 'Assalto',
      description: 'Ocorrência registrada às 15:30',
      type: 'robbery',
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onLongPress={(e) => {
          setSelectedLocation(e.nativeEvent.coordinate);
          setVisible(true);
        }}
      >
        {incidents.map((incident) => (
          <Marker
            key={incident.id}
            coordinate={incident.coordinate}
            pinColor={incident.type === 'robbery' ? 'red' : 'yellow'}
          >
            <Callout>
              <View>
                <Text>{incident.title}</Text>
                <Text>{incident.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Registrar Nova Ocorrência</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Tipo de Ocorrência"
              placeholder="Ex: Assalto, Furto..."
            />
            <TextInput
              label="Descrição"
              multiline
              numberOfLines={3}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancelar</Button>
            <Button onPress={() => {
              // Aqui vai a lógica para salvar a ocorrência
              setVisible(false);
            }}>Registrar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('Report')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MapScreen;
