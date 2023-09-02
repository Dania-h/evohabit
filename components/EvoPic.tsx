import { StyleSheet, View } from "react-native"
import { Image } from 'expo-image'
import EvoHabitAnimal from '../assets/images/evo-pic3.png';

interface EvoPicProps {
    width: number;
    height: number;
}

const EvoPic: React.FC<EvoPicProps> = (props) => {

    const { height, width } = props;

    return (
        <View style={styles.container}>
            <View style={{ width: width / 1.5, height: height / 4 }}>
                <Image
                    style={styles.image}
                    source={EvoHabitAnimal}
                    /*         placeholder={blurhash} */
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