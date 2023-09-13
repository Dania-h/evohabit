import { View, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import DatesComponent from '../../components/DatesComponent';
import HabitList from '../../components/HabitList'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EvoInfo from '../../components/EvoInfo';
import EvoPic from '../../components/EvoPic';
import BackgroundGradient from '../../components/BackgroundGradient';
import { useEvoContext } from '../../context/EvoContext';
import AddButton from '../../components/AddButton';

const Home = () => {
  const insets = useSafeAreaInsets();

  const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasExp, setHasExp] = useState(20)
  const [needExp, setNeedExp] = useState(50)

  const { user } = useUser();
  const evoInfo = useEvoContext()

  // const { counter, setCounter } = useContext(AppContext)

  const [fontsLoaded, fontError] = useFonts({
    'Quicksand': require('../../assets/fonts/Quicksand.ttf'),
  });

  useEffect(() => {
    setHeight(Dimensions.get('window').height);
    setWidth(Dimensions.get('window').width);
    setSafeAreaBottom(insets.bottom)
  }, [insets]);

  if (!fontsLoaded && !fontError) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <BackgroundGradient />
      <SafeAreaView style={[styles.safeArea, { paddingBottom: -safeAreaBottom }]}>
        <EvoPic selectedEvoId={evoInfo.id} />
        <EvoInfo hasExp={hasExp} needExp={needExp} screenWidth={width} />
        <DatesComponent />
        <HabitList username={user?.firstName ? user.firstName : ""} screenWidth={width} />
        <AddButton/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
    display: 'flex',
  },
})

export default Home;