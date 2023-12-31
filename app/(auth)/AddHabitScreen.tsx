import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView } from "react-native";
import { BackArrow } from "../../components/icons";
import { useRouter } from "expo-router";
import HabitForm from "../../components/HabitForm";

const AddHabit = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Use 'padding' behavior for iOS
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => router.back()}
              accessible={true}
              accessibilityLabel="Go back"
            >
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.header}>Add Habit</Text>
          </View>
          <HabitForm />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCFFDB",
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 8,
    paddingBottom: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    paddingStart: 8
  }
});

export default AddHabit;
