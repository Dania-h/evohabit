import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import EvoPic from '../../components/EvoPic'
import EvoInfo from '../../components/EvoInfo'
import EvoPhases from '../../components/EvoPhases'
import EvokinList from '../../components/EvokinList'
import { useEvoContext } from '../../context/EvoContext'


const evoScreen = () => {

    const evoInfo = useEvoContext()
    const insets = useSafeAreaInsets();

    const [safeAreaBottom, setSafeAreaBottom] = useState(insets.bottom);
    const [width, setWidth] = useState(0);

    const [usedEvo, setUsedEvo] = useState();
    const [selectedEvoId, setSelectedEvoId] = useState(evoInfo.id)


    function handleEvoSelect(id: string | number[]) {
        if (typeof id === "string") {
            setSelectedEvoId(id)
        }
    }

    function handleSetUsedEvo() {
        if(selectedEvoId === undefined) {
            return;
        }
        evoInfo.changeEvo(selectedEvoId)
    }

    useEffect(() => {
        setWidth(Dimensions.get('window').width);
    }, []);

    return (
        <View style={styles.container}>
            <BackgroundGradient />
            <SafeAreaView style={[styles.safeArea, { paddingBottom: -safeAreaBottom }]}>
                <EvoPic selectedEvoId={selectedEvoId} />
                <EvoInfo hasExp={0} needExp={50} screenWidth={width} />
                <EvoPhases width={width} handleSetUsedEvo={handleSetUsedEvo} />
                <EvokinList width={width} handleEvoSelect={handleEvoSelect} />
            </SafeAreaView>
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