import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { RadialGradient } from 'react-native-gradients';
import { Image } from 'expo-image';
import EvoHabitAnimal from '../../assets/images/evo-pic2.svg';
import { useFonts } from 'expo-font';
import DatesComponent from '../../components/DatesComponent';
import HabitList from '../../components/HabitList'

const Home = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasExp, setHasExp] = useState(20)
  const [needExp, setNeedExp] = useState(50)
  const [expWidthString, setExpWidthString] = useState(0);

  const { user } = useUser();

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

  let expWidth = {

  };

  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
        <RadialGradient x={width / 2} y={height / 6} rx={250} ry={250} colorList={colorList} />
      </View>
      <View style={{ width: width / 1.25, height: height / 2, flex: 0.5 }}>
        <Image
          style={styles.image}
          source={EvoHabitAnimal}
          /*         placeholder={blurhash} */
          contentFit="fill"
        />
      </View>
      <View style={styles.evoNameContainer}>
        <Text style={[styles.evoName]}>
          Entei
        </Text>
        <Text style={[styles.subtitles, styles.blackFont]}>
          Exp {hasExp} / {needExp}
        </Text>
        <View style={styles.expBar}>
          <View style={[styles.exp, { width: `${expWidthString}%` }]} />
        </View>
      </View>
      <DatesComponent />
      <View style={styles.habitsContainer}>
        <Text style={styles.username}>Good Morning, {user?.firstName}! 🎉</Text>
        <HabitList />
      </View>
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
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  imageContainer: {
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  evoNameContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  evoName: {
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'left',
    fontFamily: 'Quicksand',
  },
  subtitles: {
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  blackFont: {
    color: '#000',
  },
  username: {
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: '600',
    paddingLeft: 16,
  },
  expBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 15,
    borderRadius: 30,
  },
  exp: {
    borderRadius: 30,
    height: 15,
    backgroundColor: '#4F9D69'
  },
  habitsContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    marginTop: 16,
  },
  habitsUsername: {
  }
})

export default Home;