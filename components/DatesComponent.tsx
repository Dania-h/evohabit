import { View, Text, StyleSheet, Dimensions } from 'react-native';


export default function DatesComponent() {

    const calendar = [
        {
            day: 'Mon',
            date: 14
        },
        {
            day: 'Tues',
            date: 15
        },
        {
            day: 'Wed',
            date: 16
        },
        {
            day: 'Thurs',
            date: 17
        },
        {
            day: 'Fri',
            date: 18
        },
        {
            day: 'Sat',
            date: 19
        },
    ]

    return (
        <View style={styles.container}>
            {calendar.map((day, index) => {
                return (
                    <View key={index} style={styles.bubbleContainer}>
                        <Text style={styles.bubbleDay}>
                            {day.day}
                        </Text>
                        <View style={[day.day === "Mon" ? { backgroundColor: '#4F9D69' } : { backgroundColor: '#fff' }, styles.bubble]}>
                            <Text style={styles.bubbleDate}>
                                {day.date}
                            </Text>
                            {day.date === 14 ? <View style={styles.todaysDate}></View> : false}
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    bubble: {
        borderRadius: 999,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    bubbleContainer: {
        alignItems: 'center',
        flex: 0,

    },
    bubbleDay: {
        fontSize: 11,
        fontWeight: '300',
        fontFamily: 'Quicksand'
    },
    bubbleDate: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Quicksand'
    },
    todaysDate: {
        height: 4,
        width: 4,
        backgroundColor: '#000',
        borderRadius: 999,
        position: 'absolute',
        bottom: 7
    },
    selectedDate: {
        backgroundColor: '#4F9D69'
    }
})
