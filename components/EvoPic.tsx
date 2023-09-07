import { StyleSheet, View, Dimensions } from "react-native"
import { Image } from 'expo-image'
import EvoHabitAnimal from '../assets/images/evo-pic3.png';
import { useEffect, useState } from "react";
import { useAssets } from 'expo-asset';
import EvoList from '../data/EvoList'

interface EvoPicProps {
    selectedEvoId: string | number[]
}

interface EvoType {
    id: string | number[];
    defaultName: string;
    evolutions: number;
    url: string;
}

const EvoPic = (props: EvoPicProps) => {

    const { selectedEvoId } = props;

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [evo, setEvo] = useState<EvoType | undefined>(undefined);

    const [assets, error] = useAssets(
        [require('../assets/images/evo-pic3.png'), require('../assets/images/evo-pic4.png'), require('../assets/images/evo-pic5.png'), require('../assets/images/evo-pic6.png'), require('../assets/images/evo-pic7.png'), require('../assets/images/evo-egg1.png'), require('../assets/images/evo-egg2.png')]
    );

    const findAssetByURL = (url: string) => {
        if (url && assets) {
            const regex = /images\/(.*?)\.png/g;
            const match = regex.exec(url);
            if (match && match[1]) {
                const extractedString = match[1];
                const foundAsset = assets.find((asset) => asset.name === extractedString);
                return foundAsset?.uri || null;
            }
        } else {
            return null;
        }
    };

    useEffect(() => {
        //handler to get device Height
        setHeight(Dimensions.get('window').height);
        //handler to get device Width
        setWidth(Dimensions.get('window').width);
    }, []);

    useEffect(() => {
        const foundEvo = EvoList.find((evo) => {
            return evo.id === selectedEvoId
        })
        setEvo(foundEvo)
    }, [selectedEvoId])

    return (
        <View style={styles.container}>
            <View style={{ width: width / 1.5, height: height / 4 }}>
                <Image
                    style={styles.image}
                    source={evo ? findAssetByURL(evo.url) : null}
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