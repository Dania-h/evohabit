import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import EvoPic from '../../components/EvoPic'
import EvoInfo from '../../components/EvoInfo'
import EvoPhases from '../../components/EvoPhases'
import EvokinList from '../../components/EvokinList'

const evoScreen = () => {

    const insets = useSafeAreaInsets();

    const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const [selectedEvo, setSelectedEvo] = useState(null)

    useEffect(() => {
        setHeight(Dimensions.get('window').height);
        setWidth(Dimensions.get('window').width);
    }, []);

    return (
        <View style={styles.container}>
            <BackgroundGradient />
            <SafeAreaView style={[styles.safeArea, { paddingBottom: -safeAreaBottom }]} />
            <EvoPic />
            <EvoInfo hasExp={0} needExp={50} screenWidth={width} />
            <EvoPhases />
            <EvokinList width={width} />
        </View>
    )
}

export default evoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    safeArea: {
        flex: 1,
        display: 'flex',
    },
})