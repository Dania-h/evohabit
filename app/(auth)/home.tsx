import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { RadialGradient } from 'react-native-gradients';
import { useFonts } from 'expo-font';
import DatesComponent from '../../components/DatesComponent';
import HabitList from '../../components/HabitList'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EvoInfo from '../../components/EvoInfo';
import EvoPic from '../../components/EvoPic';

const Home = () => {
  const insets = useSafeAreaInsets();

  const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasExp, setHasExp] = useState(20)
  const [needExp, setNeedExp] = useState(50)
  const [expWidthString, setExpWidthString] = useState(0);

  const { user } = useUser();


  console.log(insets)

  const [fontsLoaded, fontError] = useFonts({
    'Quicksand': require('../../assets/fonts/Quicksand.ttf'),
  });

  console.log(fontsLoaded)

  useEffect(() => {
    //handler to get device Height
    setHeight(Dimensions.get('window').height);
    //handler to get device Width
    setWidth(Dimensions.get('window').width);
    const getExpWidth = (hasExp / needExp) * 100
    // const expString = getExpWidth.toString() + '%';
    setExpWidthString(getExpWidth);
    // console.log(`${user?.firstName} line 34`)
  }, [hasExp, user]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    <View style={styles.container}>
      <View style={styles.linearGradient}>
        <RadialGradient x={width / 2} y={height / 6} rx={350} ry={350} colorList={colorList} />
      </View>
      <SafeAreaView style={[styles.safeArea, { paddingBottom : -safeAreaBottom}]}>
        <EvoPic height={height} width={width} />
        <EvoInfo hasExp={hasExp} needExp={needExp} expWidth={expWidthString} />
        <DatesComponent />
        <HabitList username={user?.firstName ? user.firstName : ""} />
      </SafeAreaView>
    </View>
  );
};

const colorList = [
  { offset: '0%', color: '#FFF', opacity: '1' },
  { offset: '27.49%', color: '#BCFFDB', opacity: '1' },
  { offset: '85.21%', color: '#43BCCD', opacity: '1' }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
    display: 'flex',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
})

export default Home;