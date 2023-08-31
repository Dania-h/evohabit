import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { RadialGradient } from 'react-native-gradients';
import { Image } from 'expo-image';
import EvoHabitAnimal from '../../assets/images/evo-pic.png';
import { useFonts } from 'expo-font';

const Home = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

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
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
          Exp 20/50
        </Text>
      </View>
      <Text style={styles.username}>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
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
    paddingLeft: 40,
    paddingRight: 40,
  },
  evoName: {
    fontWeight: '700',
    fontSize: 38,
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
    fontSize: 30,
    fontFamily: 'Quicksand',
  },
})

export default Home;