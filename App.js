import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './screens/HomeScreen';

const BackgroundView = styled(LinearGradient)`
  padding-top: 52px;
`;

export default function App() {

  return (
    <BackgroundView
      colors={["#DEDBD2", "#B0C4B1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.1, 0.8]}
    >
      <HomeScreen />
      <StatusBar theme="auto" />
    </BackgroundView>
  );
}
