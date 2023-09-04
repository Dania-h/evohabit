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
import uuid from 'react-native-uuid';

const Home = () => {
  const insets = useSafeAreaInsets();

  const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasExp, setHasExp] = useState(20)
  const [needExp, setNeedExp] = useState(50)

  const { user } = useUser();

  const [habits, setHabits] = useState([
    {
      id: uuid.v4("string"),
      name: 'Study',
      completed: false,
      progress: 0,
      subtitle: "",
      category: "studies"
    },
    {
      id: uuid.v4("string"),
      name: 'Drink water',
      completed: false,
      progress: 75,
      subtitle: "8 glasses",
      category: "nutrition"
    },
    {
      id: uuid.v4("string"),
      name: 'Work Out',
      completed: true,
      progress: 100,
      subtitle: "",
      category: "health",
    },
    {
      id: uuid.v4("string"),
      name: 'Take Vitamins',
      completed: true,
      progress: 100,
      subtitle: "2 pills",
      category: "nutrition"
    },
  ])

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

  function handleProgressPress(itemId: string | number[]) {
    // console.log(itemId)
    setHabits(prevHabits => {
      const modifiedHabits = prevHabits.map((habit) => {
        if (habit.id === itemId) {
          habit.progress += 5
          console.log(habit.progress)
        }
        return habit
      })
      return modifiedHabits
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
        <RadialGradient x={width / 2} y={height / 6} rx={350} ry={350} colorList={colorList} />
      </View>
      <SafeAreaView style={[styles.safeArea, { paddingBottom: -safeAreaBottom }]}>
        <EvoPic height={height} width={width} />
        <EvoInfo hasExp={hasExp} needExp={needExp} screenWidth={width} />
        <DatesComponent />
        <HabitList username={user?.firstName ? user.firstName : ""} screenWidth={width} handleProgressPress={handleProgressPress} habits={habits} />
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