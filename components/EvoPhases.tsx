import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const EvoPhases = () => {
    return (
        <View style={styles.container}>
            <View style={styles.phaseContainer}>
                <View style={styles.phaseCircle}>
                    <Text style={styles.phaseCircleText}>1</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={styles.phaseCircle}>
                    <Text style={styles.phaseCircleText}>2</Text>
                </View>
                <View style={styles.phaseRectangle} />
                <View style={styles.phaseCircle}>
                    <Text style={styles.phaseCircleText}>3</Text>
                </View>
                <View style={[styles.phaseRectangle, { backgroundColor: '#fff' }]} />
                <View style={styles.phaseCircleLocked}>
                    <MaterialIcons name="lock-outline" size={24} color="#00000026" />
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
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
        height: 40,
        width: 40,
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
        width: 100,
    },
    buttonText: {
        fontFamily: 'Quicksand',
        fontWeight: "400",
        fontSize: 14,
    }
})