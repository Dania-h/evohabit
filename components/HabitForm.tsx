import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const HabitForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.formWrapper}>
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text>Frequency</Text>
      <View style={styles.frequencyWrapper}>
        <TouchableOpacity style={styles.frequencyButton}>
          <Text>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frequencyButton}>
          <Text>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frequencyButton}>
          <Text>Every x days</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingVertical: 24
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  frequencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  frequencyButton: {
    paddingVertical: 8,
    width: 98, 
    borderWidth: 1,
    borderColor: '#4F9D69',
    alignItems: 'center'
  },
});

export default HabitForm;
