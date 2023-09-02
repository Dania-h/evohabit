import { View, Text, StyleSheet } from 'react-native'

interface DatesComponentProps {
    hasExp: number;
    needExp: number;
    expWidth: number;
}

const EvoInfo: React.FC<DatesComponentProps> = (props) => {
    const { hasExp, needExp, expWidth } = props;

    return (
        <View style={styles.evoNameContainer}>
            <View style={styles.evoNameExp}>
                <Text style={[styles.evoName]}>
                    Entei
                </Text>
                <Text style={[styles.subtitles,]}>
                    Exp {hasExp} / {needExp}
                </Text>
            </View>
            <View style={styles.expBar}>
                <View style={[styles.exp, { width: `${expWidth}%` }]} />
            </View>
        </View>
    )
}

export default EvoInfo

const styles = StyleSheet.create({
    evoNameContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,

    },
    evoNameExp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'baseline',
    },
    evoName: {
        fontWeight: '700',
        fontSize: 32,
        textAlign: 'left',
        fontFamily: 'Quicksand',
    },
    subtitles: {
        fontSize: 11,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    expBar: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 15,
        borderRadius: 30,
    },
    exp: {
        borderRadius: 30,
        height: 15,
        backgroundColor: '#4F9D69'
    },
})