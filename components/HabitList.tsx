import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import Checkmark from '../assets/images/checkmark.svg'
import Svg, { Path } from "react-native-svg"
import Notebook from '../assets/images/book.svg'
import Heart from '../assets/images/heart.svg'
import WaterGlass from '../assets/images/glass-water.svg'
import Planner from '../assets/images/notebook.svg'


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

    function getIcon(category: string) {
        if (category === "health") {
            return (
                <View style={[styles.habitIcon, { backgroundColor: '#FF567E' }]}>

                    <Heart />
                </View>
            )
        }
        else if (category === "nutrition") {
            return (
                <View style={[styles.habitIcon, { backgroundColor: '#43BCCD' }]}>
                    <WaterGlass />
                </View>
            )
        }
        else if (category === "studies") {
            return (
                <View style={[styles.habitIcon, { backgroundColor: '#AB6BF8' }]}>
                    <Notebook />
                </View>
            )
        } else {
            return (
                <View style={[styles.habitIcon, { backgroundColor: '#BCFFDB' }]}>
                    <Planner />
                </View>
            )
        }
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                {
                    habits.map((habit, index) => {
                        return (
                            <View key={index} style={styles.habitContainer}>
                                {getIcon(habit.category)}
                                <View>
                                    <Text style={styles.name}>{habit.name}</Text>
                                    <Text style={styles.subtitle}>{habit.subtitle}</Text>
                                </View>
                                <View style={[styles.progress, habit.progress === 100 ? { backgroundColor: '#4F9D69' } : { backgroundColor: '#00000026' }]}>
                                    {habit.progress !== 100 ?
                                        <View style={styles.progressWrapper}>

                                            <Text>{habit.progress}%</Text>
                                        </View>
                                        :
                                        <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                            <Path d="M15.53 0.409987C15.819 0.683206 15.9877 1.06001 15.9989 1.45757C16.0102 1.85512 15.8631 2.24086 15.59 2.52999L7.09 11.53C6.95224 11.6756 6.78669 11.7921 6.60314 11.8726C6.41959 11.9532 6.22176 11.9961 6.02133 11.9989C5.82091 12.0017 5.62195 11.9643 5.43623 11.8889C5.2505 11.8135 5.08177 11.7017 4.94 11.56L0.439998 7.05999C0.175038 6.77564 0.0307918 6.39954 0.0376482 6.01094C0.0445047 5.62234 0.201929 5.25157 0.476755 4.97674C0.751581 4.70192 1.12235 4.54449 1.51095 4.53764C1.89956 4.53078 2.27565 4.67503 2.56 4.93999L5.97 8.34799L13.41 0.469987C13.6832 0.180982 14.06 0.0123103 14.4576 0.00105885C14.8551 -0.0101926 15.2409 0.136897 15.53 0.409987Z" fill="white" />
                                        </Svg>
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 16,
        paddingVertical: 16,
    },
    habitContainer: {
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
        height: 45,
        width: 45,
        borderRadius: 999,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
    },
    subtitle: {
        fontSize: 11,
        fontWeight: "300",
    },
    progress: {
        height: 40,
        width: 40,
        borderRadius: 999,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontWeight: '300',
    },
    progressWrapper: {
        backgroundColor: '#fff',
        width: '85%',
        height: '85%',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    }
})
