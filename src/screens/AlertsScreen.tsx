import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Switch, List } from 'react-native-paper';

const AlertsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [locationRadius, setLocationRadius] = React.useState(true);

  // Dados mockados de alertas
  const alerts = [
    {
      id: 1,
      title: 'Alerta de Segurança',
      description: 'Aumento de ocorrências na região do Campo Grande',
      date: '10/01/2025',
      severity: 'high',
    },
    {
      id: 2,
      title: 'Dica de Segurança',
      description: 'Evite caminhar sozinho em áreas pouco movimentadas',
      date: '10/01/2025',
      severity: 'medium',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.settingsCard}>
        <Card.Content>
          <Title>Configurações de Alerta</Title>
          
          <List.Item
            title="Notificações Push"
            description="Receba alertas em tempo real"
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            )}
          />

          <List.Item
            title="Monitorar Localização"
            description="Alertas baseados na sua localização"
            right={() => (
              <Switch
                value={locationRadius}
                onValueChange={setLocationRadius}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Title style={styles.title}>Alertas Recentes</Title>

      {alerts.map((alert) => (
        <Card
          key={alert.id}
          style={[
            styles.alertCard,
            alert.severity === 'high' && styles.highSeverity,
          ]}
        >
          <Card.Content>
            <Title>{alert.title}</Title>
            <Paragraph>{alert.description}</Paragraph>
            <Paragraph style={styles.date}>{alert.date}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  settingsCard: {
    marginBottom: 16,
  },
  title: {
    marginVertical: 16,
  },
  alertCard: {
    marginBottom: 8,
  },
  highSeverity: {
    borderLeftWidth: 4,
    borderLeftColor: '#ff0000',
  },
  date: {
    color: '#666',
    fontSize: 12,
    marginTop: 8,
  },
});

export default AlertsScreen;
