import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import HabitTab from '../../components/HabitTabPic'
import EvoTabPic from '../../components/EvoTabPic'
import { Feather } from '@expo/vector-icons';
import { Platform, StyleSheet } from 'react-native';

export const LogoutButton = () => {
    const { signOut } = useAuth();

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

    return (
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
                ]
            }}>
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    headerTitle: 'Home',
                    tabBarIcon: ({ color, size }) => <HabitTab />,
                    tabBarLabel: 'Home',
                }}
                redirect={!isSignedIn}
            />
            <Tabs.Screen
                name="EvoScreen"
                options={{
                    headerTitle: 'Evo',
                    tabBarIcon: ({ color, size }) => <EvoTabPic />,
                    tabBarLabel: 'Evo',
                }}
                redirect={!isSignedIn}
            />
            <Tabs.Screen
                name="AnalyticsScreen"
                options={{
                    headerTitle: 'Analytics',
                    tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={24} color="gray" />,
                    tabBarLabel: 'Analytics',
                }}
                redirect={!isSignedIn}
            />
            <Tabs.Screen
                name="ProfileScreen"
                options={{
                    headerTitle: 'My Profile',
                    tabBarIcon: ({ color, size }) => <Feather name="user" size={24} color="gray" />,
                    tabBarLabel: 'My Profile',
                    headerRight: () => <LogoutButton />,
                }}
                redirect={!isSignedIn}
            />
        </Tabs>
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