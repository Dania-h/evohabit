import { View, Text, StyleSheet, Dimensions } from 'react-native';
export default function DatesComponent() {

    const habits = [
        {
            name: 'Study',
            completed: false,
            progress: 0,
            subtitle: "",
            category: "studies"
        },
        {
            name: 'Drink water',
            completed: false,
            progress: 75,
            subtitle: "8 glasses",
            category: "nutrition"
        },
        {
            name: 'Work Out',
            completed: true,
            progress: 100,
            subtitle: "",
            category: "health",
        },
    ]

    return (
        <View style={styles.container}>
            {
                habits.map((habit, index) => {
                    return (
                        <View key={index} style={styles.habitContainer}>
                            <View style={styles.habitIcon}>
                            </View>
                            <View>
                                <Text>{habit.name}</Text>
                                <Text>{habit.subtitle}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 16,
    },
    habitContainer: {
        height: 50,
        width: '100%',
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
    },
    habitIcon: {
        height: 30,
        width: 30,
        borderRadius: 999,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        marginRight: 16,
    }
})
