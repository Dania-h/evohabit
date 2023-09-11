import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useEvoContext } from '../context/EvoContext';
import { Checkmark } from './icons';

interface EvoPhasesProps {
    width: number,
    handleSetUsedEvo: () => void;
    selectedEvoId: string | number[] | undefined;
}

const EvoPhases = (props: EvoPhasesProps) => {

    const { width, handleSetUsedEvo, selectedEvoId } = props;
    const evoInfo = useEvoContext();

    function getRatio(pixelWidth: number) {
        const figmaPixelWidth = 390;
        let resultWidth = (pixelWidth * width) / figmaPixelWidth;
        return resultWidth;
    }

    return (
        <View style={[styles.container, { marginHorizontal: 8 }]}>
            <View style={styles.phaseContainer}>
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40) }]}>
                    <Text style={styles.phaseCircleText}>1</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40) }]}>
                    <Text style={styles.phaseCircleText}>2</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40) }]}>
                    <Text style={styles.phaseCircleText}>3</Text>
                </View>
                <View style={[styles.phaseRectangle, { backgroundColor: '#fff' }]} />
                <View style={[styles.phaseCircleLocked, { height: getRatio(40), width: getRatio(40) }]}>
                    <MaterialIcons name="lock-outline" size={24} color="#00000026" />
                </View>
            </View>
            <TouchableOpacity
                style={[
                    { width: getRatio(100), flexDirection: 'row', maxWidth: getRatio(100) },
                    evoInfo.id === selectedEvoId ? styles.selectButtonActive : styles.button
                ]}
                onPress={() => handleSetUsedEvo()}
            >
                {
                    evoInfo.id === selectedEvoId ? <Checkmark width={`${getRatio(16)}`} height={`${getRatio(14)}`} /> : null
                }
                <Text style={evoInfo.id === selectedEvoId ? styles.selectButtonText : styles.buttonText}>Select</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EvoPhases

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 28,
    },
    phaseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    phaseCircle: {
        borderRadius: 999,
        backgroundColor: '#4F9D69',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phaseCircleText: {
        color: '#fff',
        fontFamily: 'Quicksand'
    },
    phaseCircleLocked: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phaseRectangle: {
        width: 18,
        height: 4,
        backgroundColor: "#4F9D69",
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Quicksand',
        fontWeight: "400",
        fontSize: 14,
    },
    selectButtonActive: {
        backgroundColor: "#4F9D69",
        borderRadius: 30,
        columnGap: 4,
        justifyContent: 'center',
        alignItems: 'center',

    },
    selectButtonText: {
        fontFamily: 'Quicksand',
        fontWeight: "400",
        fontSize: 14,
        color: "#fff",
    }
})