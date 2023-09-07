import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

interface EvoPhasesProps {
    width: number
}

const EvoPhases = (props: EvoPhasesProps) => {

    const { width } = props;

    function getRatio(pixelWidth: number) {
        const figmaPixelWidth = 390;
        let resultWidth = (pixelWidth * width) / figmaPixelWidth; 
        return resultWidth;
    }

    return (
        <View style={[styles.container, { marginHorizontal: 8 }]}>
            <View style={styles.phaseContainer}>
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40)}]}>
                    <Text style={styles.phaseCircleText}>1</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40)}]}>
                    <Text style={styles.phaseCircleText}>2</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={[styles.phaseCircle, { height: getRatio(40), width: getRatio(40)}]}>
                    <Text style={styles.phaseCircleText}>3</Text>
                </View>
                <View style={[styles.phaseRectangle, { backgroundColor: '#fff' }]} />
                <View style={[styles.phaseCircleLocked, { height: getRatio(40), width: getRatio(40)}]}>
                    <MaterialIcons name="lock-outline" size={24} color="#00000026" />
                </View>
            </View>
            <TouchableOpacity style={[styles.button, {width: getRatio(100)}]}>
                <Text style={styles.buttonText}>Select</Text>
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
    }
})