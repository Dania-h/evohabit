import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import EvoList from '../data/EvoList'
import { FlatList } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import { useEffect, useState } from 'react'
import { useAssets } from 'expo-asset';
import { useEvoContext } from '../context/EvoContext'

interface EvokinListProps {
    width: number;
    handleEvoClick: (id: string | number[]) => void;
    selectedEvoId: string | number[] | undefined;
}

const EvokinList = (props: EvokinListProps) => {

    const evoInfo = useEvoContext();
    const { width, handleEvoClick } = props;
    const [clickedEvo, setClickedEvo] = useState<string | number[] | undefined>(undefined)
    const [activeEvo, setActiveEvo] = useState(evoInfo.id);

    const [assets, error] = useAssets(
        [require('../assets/images/evo-pic3.png'), require('../assets/images/evo-pic4.png'), require('../assets/images/evo-pic5.png'), require('../assets/images/evo-pic6.png'), require('../assets/images/evo-pic7.png'), require('../assets/images/evo-egg1.png'), require('../assets/images/evo-egg2.png')]
    );


    function handleEvoPress(index: number, id: string | number[]) {
        setClickedEvo(id);
        handleEvoClick(id);
    }

    useEffect(() => {
        console.log(activeEvo)
    }, [])

    const renderItem = ({ item, index }: { item: typeof EvoList[0], index: number }) => {
        const asset = assets && assets[index]; // Get the corresponding asset
        const imageSource = asset ? asset.uri : null; // Get the URI of the asset

        return (
            <TouchableOpacity
                onPress={() => handleEvoPress(index, item.id)}
                style={[
                    styles.indEvoContainer,
                    Platform.OS === 'android' && styles.androidShadow,
                    Platform.OS === 'ios' && styles.iosShadow,
                    {
                        width: 110 * width / 390,
                        height: 110 * width / 390,
                        padding: 8,
                    },
                    index + 1 % 3 === 0
                        ? {
                            marginRight: 8,
                        }
                        : {
                            marginLeft: 8,
                        },
                    clickedEvo === item.id ? styles.selectedEvoStyling : false,
                    item.id === evoInfo.id ? styles.evoUsedStyling : false,
                ]}
            >
                {imageSource ? (
                    <Image
                        style={styles.image}
                        source={{ uri: imageSource }} // Provide a default value of an empty string if imageSource is null
                        contentFit="scale-down"
                    />
                ) : null}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={EvoList}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.listContainer]}
                numColumns={3}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            />
        </View>
    )
}

export default EvokinList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 16,
        paddingBottom: 0,
        flex: 1,
    },
    listContainer: {
        width: '100%',
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'flex-start'
    },
    indEvoContainer: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    selectedEvoStyling: {
        backgroundColor: '#BCFFDB',
    },
    evoUsedStyling: {
        borderColor: '#4F9D69',
        borderWidth: 4,
    },
    iosShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    androidShadow: {
        elevation: 4, // Add elevation for Android
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
})