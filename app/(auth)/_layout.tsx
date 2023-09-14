import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth, useUser, } from '@clerk/clerk-expo';
import HabitTab from '../../components/HabitTabPic'
import EvoTabPic from '../../components/EvoTabPic'
import { Feather } from '@expo/vector-icons';
import { Platform, StyleSheet, View } from 'react-native';
import { EvoContext } from '../../context/EvoContext';
import { useState } from 'react';
import EvoList from '../../data/EvoList';
import { useOpenDatabase } from '../../hooks/useOpenDatabase';


export const LogoutButton = () => {
    const { signOut } = useAuth();
    const { user } = useUser();
    console.log(user?.emailAddresses)
    const db = useOpenDatabase(`${user?.emailAddresses}`)

    const doLogout = () => {
        signOut();
    };

    return (
        <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
            <Ionicons name="log-out-outline" size={24} color={'#fff'} />
        </Pressable>
    );
};

const TabsPage = () => {
    const { isSignedIn } = useAuth();
    const [id, setId] = useState<string | number[] | undefined>(EvoList[0].id)

    function changeEvo(evoId: string | number[]) {
        if (evoId === undefined) {
            return;
        }
        setId(prev => evoId)
    }

    return (
        <EvoContext.Provider value={{ id, changeEvo }}>
            <Tabs
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#6c47ff',
                    },
                    headerTintColor: '#fff',
                    headerShown: false,
                    tabBarStyle: [{ borderTopLeftRadius: 20, borderTopRightRadius: 20 },
                    Platform.OS === 'android' && styles.androidShadow,
                    Platform.OS === 'ios' && styles.iosShadow
                    ],
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#081C154D',
                    // tabBarActiveBackgroundColor: 'blue',
                }}>
                <Tabs.Screen
                    name="HomeScreen"
                    options={{
                        headerTitle: 'Home',
                        tabBarIcon: ({ color, size, focused }) =>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' }}>
                                <HabitTab color={color} />
                                {focused && <View style={{ width: 60, height: 5, backgroundColor: "#000", borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', bottom: 0 }} />}
                            </View>,
                        tabBarLabel: 'Home',
                    }}
                    redirect={!isSignedIn}
                />
                <Tabs.Screen
                    name="EvoScreen"
                    options={{
                        headerTitle: 'Evo',
                        tabBarIcon: ({ color, size, focused }) =>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' }}>
                                <Ionicons name="paw-sharp" size={24} color={color} />
                                {focused && <View style={{ width: 60, height: 5, backgroundColor: "#000", borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', bottom: 0 }} />}
                            </View>,
                        tabBarLabel: 'Evo',
                    }}
                    redirect={!isSignedIn}
                />
                <Tabs.Screen
                    name="AnalyticsScreen"
                    options={{
                        headerTitle: 'Analytics',
                        tabBarIcon: ({ color, size, focused }) =>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' }}>
                                <Ionicons name="stats-chart" size={24} color={color} />
                                {focused && <View style={{ width: 60, height: 5, backgroundColor: "#000", borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', bottom: 0 }} />}
                            </View>,

                        tabBarLabel: 'Analytics',
                    }}
                    redirect={!isSignedIn}
                />
                <Tabs.Screen
                    name="ProfileScreen"
                    options={{
                        headerTitle: 'My Profile',
                        tabBarIcon: ({ color, size, focused }) =>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' }}>
                                < Feather name="user" size={24} color={color} />
                                {focused && <View style={{ width: 60, height: 5, backgroundColor: "#000", borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', bottom: 0 }} />}
                            </View>,

                        tabBarLabel: 'My Profile',
                        headerRight: () => <LogoutButton />,
                    }}
                    redirect={!isSignedIn}
                />
            </Tabs>
        </EvoContext.Provider >
    );
};

export default TabsPage;

const styles = StyleSheet.create({
    iosShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
    },
    androidShadow: {
        elevation: 20, // Add elevation for Android
    },
})