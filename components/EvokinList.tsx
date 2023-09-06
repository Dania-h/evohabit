import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'
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
    const [evoContainerSize, setEvoContainerSize] = useState(50);
    const [evoContainerPadding, setEvoContainerPadding] = useState(8)

    useEffect(() => {
        setEvoContainerSize(prev => {
            return (110 * width / 390)
        })
        setEvoContainerPadding(prev => {
            return (16 * width / 390)
        })
    }, [])

    const renderItem = ({ item, index }: { item: typeof EvoList[0], index: number }) => {
        return (
            <View style={[styles.indEvoContainer,
            Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            { width: evoContainerSize, height: evoContainerSize, }, index+1 % 3 === 0
                ? {
                    marginRight: evoContainerPadding,
                } : {
                    marginLeft: evoContainerPadding
                },
            ]}>
                <Image
                    style={[styles.image]}
                    source={Evo1}
                    contentFit="contain"
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={EvoList}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.listContainer, { paddingBottom: 10 }]}
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
        
    },
    indEvoContainer: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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