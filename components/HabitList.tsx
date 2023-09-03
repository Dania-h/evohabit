import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Checkmark from '../assets/images/checkmark.svg'
import Notebook from '../assets/images/book.svg'
import Heart from '../assets/images/heart.svg'
import WaterGlass from '../assets/images/glass-water.svg'
import Planner from '../assets/images/notebook.svg'
import { Platform } from 'react-native';

interface HabitListProps {
    username: string;
}

const HabitList: React.FC<HabitListProps> = (props) => {
    const { username } = props;

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
        {
            name: 'Take Vitamins',
            completed: true,
            progress: 100,
            subtitle: "2 pills",
            category: "nutrition"
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

    const renderItem = ({ item }: { item: typeof habits[0] }) => (
        <View style={[styles.indHabitContainer,
        Platform.OS === 'android' && styles.androidShadow,
        Platform.OS === 'ios' && styles.iosShadow
        ]}>
            {getIcon(item.category)}
            <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <View style={[styles.progress, item.progress === 100 ? { backgroundColor: '#4F9D69' } : { backgroundColor: '#00000026' }]}>
                {item.progress !== 100 ?
                    <View style={styles.progressWrapper}>
                        <Text>{item.progress}%</Text>
                    </View>
                    :
                    <Checkmark />
                }
            </View>
        </View>
    );

    return (
        <View style={styles.habitsContainer}>
            <Text style={styles.username}>Good Morning, {username}! 🎉</Text>
            <FlatList
                data={habits}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.container]}
            />
        </View>
    );
}

export default HabitList;

const styles = StyleSheet.create({
    habitsContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 16,
        paddingBottom: 0,
        flex: 1,
    },
    scrollviewContainer: {
    },
    container: {
        width: '100%',
        rowGap: 16,
        paddingBottom: 8,
        paddingTop: 8,
        paddingHorizontal: 8,
    },
    iosShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    androidShadow: {
        elevation: 4, // Add elevation for Android
    },
    indHabitContainer: {
        width: '100%',
        borderRadius: 30,
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#000',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff'
    },
    username: {
        fontSize: 20,
        fontFamily: 'Quicksand',
        fontWeight: '600',
        paddingLeft: 16,
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
