import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity } from 'react-native'
import EvoList from '../data/EvoList'
import { FlatList } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import Evo1 from '../assets/images/evo-pic3.png'
import { useEffect, useState } from 'react'

interface EvokinListProps {
    width: number;
}

const EvokinList = (props: EvokinListProps) => {

    const { width } = props;
    const [selectedEvo, setSelectedEvo] = useState(0)
    const [evoUsed, setEvoUsed] = useState(0)


    function handleEvoSelect(index: number) {
        setSelectedEvo(prev => index)
    }

    const renderItem = ({ item, index }: { item: typeof EvoList[0], index: number }) => {
        return (
            <TouchableOpacity
                onPress={() => handleEvoSelect(index)}
                style={[styles.indEvoContainer,
                Platform.OS === 'android' && styles.androidShadow,
                Platform.OS === 'ios' && styles.iosShadow,
                { width: 110 * width / 390, height: 110 * width / 390, }, index + 1 % 3 === 0
                    ? {
                        marginRight: 8,
                    } : {
                        marginLeft: 8
                    },
                selectedEvo === index ? styles.selectedEvoStyling : false,
                evoUsed === index ? styles.evoUsedStyling : false
                ]}>
                <Image
                    style={[styles.image]}
                    source={Evo1}
                    contentFit="contain"
                />
            </TouchableOpacity>
        )
    }

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
        alignItems: 'center'
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