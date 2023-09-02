import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { RadialGradient } from 'react-native-gradients';
import { Image } from 'expo-image';
import EvoHabitAnimal from '../../assets/images/evo-pic3.png';
import { useFonts } from 'expo-font';
import DatesComponent from '../../components/DatesComponent';
import HabitList from '../../components/HabitList'
import { SafeAreaView } from 'react-native-safe-area-context';
import EvoInfo from '../../components/EvoInfo';

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
        <RadialGradient x={width / 2} y={height / 6} rx={350} ry={350} colorList={colorList} />
      </View>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ width: width / 1.5, height: height / 2, flex: 1 }}>
          <Image
            style={styles.image}
            source={EvoHabitAnimal}
            /*         placeholder={blurhash} */
            contentFit="fill"
          />
        </View>
        <EvoInfo hasExp={hasExp} needExp={needExp} expWidth={expWidthString}/>
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
  },
  safeArea: {
    alignItems: 'center',
    flex: 1,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#ff0000'
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
  habitsUsername: {
  }
})

export default Home;