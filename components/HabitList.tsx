import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, FlatList, SectionList } from 'react-native';

import Notebook from '../assets/images/book.svg'
import Heart from '../assets/images/heart.svg'
import WaterGlass from '../assets/images/glass-water.svg'
import Planner from '../assets/images/notebook.svg'
import { Platform } from 'react-native';
import ProgressCircle from './ProgressCircle';
import { useState } from 'react';
import Habits from '../data/habits';


interface Habit {
    id: string | number[];
    name: string;
    completed: boolean;
    progress: number;
    subtitle: string;
    category: string;
}

interface HabitListProps {
    username: string;
    screenWidth: number;
}

const HabitList: React.FC<HabitListProps> = (props) => {

    const { username, screenWidth } = props;

    const strokeWidth = 4;
    const circleSize = 40;
    const radius = 17;
    const circumference = radius * 2 * Math.PI;
    const duration = 300;

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

    const renderItem = ({ item }: { item: typeof Habits[0] }) => (

        <View style={[styles.indHabitContainer,
        Platform.OS === 'android' && styles.androidShadow,
        Platform.OS === 'ios' && styles.iosShadow,
        item.progress === 100 ? { opacity: .40 } : {}
        ]}>
            {getIcon(item.category)}
            <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <ProgressCircle
                habitId={item.id}
                strokeWidth={strokeWidth}
                circleSize={circleSize}
                radius={radius}
                circumference={circumference}
                duration={duration}
                habit={item}
            />
        </View>

    );

    return (
        <View style={styles.habitsContainer}>
            <Text style={styles.username}>Good Morning, {username}! 🎉</Text>
            <FlatList
                data={Habits}
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
    progressSvg: {
        position: 'absolute'
    }
})
