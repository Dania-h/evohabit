import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import useGetRatio from "../hooks/useGetRatio";
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { ToggleCircle } from "./icons";
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const HabitForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const targetGoalOptions = ["At least", "Less than", "Exactly"]

  return (
    <View style={styles.formWrapper}>
      <ScrollView style={{ marginBottom: 16 }}>
        <Text>Name</Text>
        <TextInput placeholder="Enter a habit name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter additional details (optional)"
        />
        <Text>Frequency</Text>
        <View style={[styles.frequencyWrapper]}>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>Every x days</Text>
          </TouchableOpacity>
        </View>
        <Text>On these days:</Text>
        <View style={styles.dayButtonContainer}>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Tues</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Thurs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayButton}>
            <Text style={styles.dayButtonText}>Sun</Text>
          </TouchableOpacity>
        </View>
        <Text>Target Goal</Text>
        <View style={[styles.frequencyWrapper]}>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>Yes/No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>x Amount</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.frequencyButton, { width: useGetRatio(110) }]}>
            <Text style={styles.frequencyButtonText}>Timer</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SelectDropdown
            buttonStyle={[styles.selectDropdownGoal, { width: useGetRatio(110) }]}
            buttonTextStyle={styles.selectDropdownGoalText}
            dropdownStyle={styles.dropdownStyle}
            rowTextStyle={{ fontSize: 14, }}
            rowStyle={{ justifyContent: 'flex-start', padding: 0, margin: 0 }}
            selectedRowStyle={{ backgroundColor: '#4F9D69' }}
            data={targetGoalOptions}
            defaultButtonText="At least"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            renderDropdownIcon={() => <AntDesign name="caretdown" size={16} color="black" />}
          />
          <TextInput placeholder="Count..." style={[{ width: useGetRatio(110), paddingLeft: 8, borderBottomWidth: 1, borderBottomColor: '#000' },]} />
          <TextInput placeholder="Unit..." style={[{ width: useGetRatio(110), paddingLeft: 8, borderBottomWidth: 1, borderBottomColor: '#000' },]} />
        </View>
        <Text>Duration</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Start date:</Text>
          <Text>Today, August 14, 2023</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>End date:</Text>
          <TouchableOpacity style={{ backgroundColor: 'green', height: 24, width: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'flex-end' }}>
            <View style={{ marginRight: 2 }}>
              <ToggleCircle />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput style={{ borderBottomColor: '#000', borderBottomWidth: 1, padding: 0 }}>90</TextInput>
            <Text>days</Text>
          </View>
          <Text>Sunday, November 12, 2023</Text>
        </View>
        <Text>
          Reminder
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ borderRadius: 30, borderWidth: 1, width: useGetRatio(110), height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <FontAwesome5 name="bell" size={14} color="black" />
            <Text style={{ paddingLeft: 4 }}>4:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30, borderWidth: 1, width: useGetRatio(110), height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ width: '100%', backgroundColor: '#081C15', justifyContent:'center', alignItems: 'center', borderRadius: 30, }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: "600" }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  frequencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  frequencyButton: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 999,
  },
  frequencyButtonText: {
    fontSize: 14,
  },
  dayButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayButton: {
    backgroundColor: '#fff',
    borderRadius: 999,
    borderWidth: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayButtonText: {
    fontSize: 11,
  },
  selectDropdownGoal: {
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    padding: 0,
    margin: 0,
    height: 40,
  },
  selectDropdownGoalText: {
    fontSize: 14,
    marginLeft: -4
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderRadius: 16,
  }
});

export default HabitForm;
