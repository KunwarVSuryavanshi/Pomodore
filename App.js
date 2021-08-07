import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from 'react-native-i18n';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{I18n.t('greeting')}</Text>;
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


I18n.fallbacks = true;
 
I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  fr: {
    greeting: 'Bonjour!',
  },
  de: {
    greeting: 'Halo!',
  },
  ja: {
    greeting: 'こんにちは！'
  },
  hu: {
    greeting: 'Üdv!'
  },
  hi: {
    greeting: 'नमस्ते!'
  }
};
