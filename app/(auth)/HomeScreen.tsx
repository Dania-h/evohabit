import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import DatesComponent from '../../components/DatesComponent';
import HabitList from '../../components/HabitList'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EvoInfo from '../../components/EvoInfo';
import EvoPic from '../../components/EvoPic';
import BackgroundGradient from '../../components/BackgroundGradient';

const Home = () => {
  const insets = useSafeAreaInsets();

  const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasExp, setHasExp] = useState(20)
  const [needExp, setNeedExp] = useState(50)

  const { user } = useUser();

  const [fontsLoaded, fontError] = useFonts({
    'Quicksand': require('../../assets/fonts/Quicksand.ttf'),
  });

  useEffect(() => {
    //handler to get device Height
    setHeight(Dimensions.get('window').height);
    //handler to get device Width
    setWidth(Dimensions.get('window').width);

    // const expString = getExpWidth.toString() + '%';
    // console.log(`${user?.firstName} line 34`)
  }, [hasExp, user]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <View style={styles.container}>
      <BackgroundGradient/>
      <SafeAreaView style={[styles.safeArea, { paddingBottom: -safeAreaBottom }]}>
        <EvoPic />
        <EvoInfo hasExp={hasExp} needExp={needExp} screenWidth={width} />
        <DatesComponent />
        <HabitList username={user?.firstName ? user.firstName : ""} screenWidth={width}  />
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