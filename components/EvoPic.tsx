import { StyleSheet, View, Dimensions } from "react-native"
import { Image } from 'expo-image'
import EvoHabitAnimal from '../assets/images/evo-pic3.png';
import { useEffect, useState } from "react";

const EvoPic = () => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        //handler to get device Height
        setHeight(Dimensions.get('window').height);
        //handler to get device Width
        setWidth(Dimensions.get('window').width);

    }, []);

    return (
        <View style={styles.container}>
            <View style={{ width: width / 1.5, height: height / 4 }}>
                <Image
                    style={styles.image}
                    source={EvoHabitAnimal}
                    contentFit="fill"
                />
            </View>
        </View>
    )
}

export default EvoPic

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})