import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function DatesComponent() {

    let thisMoment = moment();

    const markedDatesArray = [
        {
            date: thisMoment,
            dots: [
                {
                    color: '#000000'
                }
            ]
        }
    ]

    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable={true}
                style={styles.calendar}
                showMonth={false}
                selectedDate={thisMoment}
                calendarHeaderStyle={{ display: 'none' }}
                iconStyle={{ display: 'none' }}
                innerStyle={styles.innerStyle}
                dayComponentHeight={80}
                minDayComponentSize={80}
                dayContainerStyle={styles.dayContainerStyle}
                dateNameStyle={{ fontSize: 11 }}
                dateNumberStyle={styles.dateNumberStyle}
                highlightDateContainerStyle={styles.dayContainerStyle}
                highlightDateNameStyle={[{ fontSize: 11 }]}
                highlightDateNumberStyle={[styles.dateNumberStyle, {backgroundColor: '#4F9D69', color: 'white'}]}
                markedDates={markedDatesArray}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'red',
        height: 80,
    },
    calendar: {
        // backgroundColor: 'green',
        height: '100%',
        padding: 0,
        margin: 0,
    },
    innerStyle: {
        // backgroundColor: 'yellow',
        gap: 0,
        padding: 0,
        margin: 0,
        // flex: 1
    },
    dayContainerStyle: {
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        // backgroundColor: 'red',
        width: 40,
    },
    dateNumberStyle: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 999,
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    todayDot: {
        height: 4,
        width: 4,
        borderRadius: 999,
    },
})
