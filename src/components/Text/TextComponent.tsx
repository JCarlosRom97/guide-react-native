import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

// Definimos los tipos de variantes permitidas
type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'caption';

interface TextComponentProps {
  title: string | number;
  variant?: TextVariant; // Propiedad opcional para elegir el tamaño
  style?: StyleProp<TextStyle>; // Usamos el tipo correcto de React Native
}

export const TextComponent = ({ title, variant = 'p', style }: TextComponentProps) => {
  return (
    <Text
      style={[styles.base, styles[variant], style]}
      accessibilityRole={variant === 'p' ? 'text' : 'header'}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: "#c0bfbf",
    textAlign: "center",
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 8,
  },
  h3: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  h4: {
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 8,
  },
  p: {
    fontSize: 16,
    padding: 10,
  },
  caption: {
    fontSize: 12,
    color: '#888',
  }
});