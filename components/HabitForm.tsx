import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import useGetRatio from "../hooks/useGetRatio";
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { SolarNotebook, ToggleCircle } from "./icons";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const HabitForm = () => {

  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 30);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("")
  const [days, setDays] = useState<string[]>([]);
  const [targetGoal, setTargetGoal] = useState("")
  const [targetGoalType, setTargetGoalType] = useState("Less than")
  const [targetCount, setTargetCount] = useState("")
  const [targetUnit, setTargetUnit] = useState("")

  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(futureDate);
  const [habitStartTime, setHabitStartTime] = useState('');
  const [habitEndTime, setHabitEndTime] = useState('');
  const [endDaysApart, setEndDaysApart] = useState(30);

  const [reminders, setReminders] = useState<Date[]>([])
  const [newReminder, setNewReminder] = useState<Date>()
  const [showNewRemionder, setShowNewReminder] = useState(false)

  const targetGoalOptions = ["At least", "Less than", "Exactly"]

  function handleFrequencyClick(frequencyValue: string) {
    setFrequency(prev => frequencyValue)
  }

  function handleDayClick(dayClicked: string) {
    setDays(prev => {
      let filteredDays: string[] = [...prev];
      let foundDay = prev.find(day => day === dayClicked);
      if (foundDay === undefined) {
        filteredDays.push(dayClicked);
      } else {
        filteredDays = prev.filter(day => day !== dayClicked);
      }
      return filteredDays;
    });
  }

  function toggleDayStyling(dayClicked: string) {
    let foundDay = days.find((day) => day === dayClicked)
    return foundDay;
  }

  function handleTargetGoalClick(targetType: string) {
    setTargetGoal(prev => targetType)
  }

  const handleShowStartDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowStartDate(false);
    setStartDate(currentDate);
  };

  const handleShowEndDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowEndDate(false);
    setEndDate(currentDate);
  };

  const handleEndDaysApart = (daysApart: number) => {
    const currentDate = new Date();
    setEndDate(
      () => {
        currentDate.setDate(currentDate.getDate() + daysApart);
        return currentDate
      })
  }

  function handleSubmitForm() {
    console.log(name)
    console.log(description)
    console.log(frequency)
    console.log(days)
    console.log(targetGoal)
    console.log(targetCount)
    console.log(targetUnit)
    console.log(startDate)
    console.log(endDate)
  }

  return (
    <View style={styles.formWrapper}>
      <ScrollView style={{ marginBottom: 24 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>Name</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 40, height: 40, backgroundColor: '#BCFFDB', borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
            <SolarNotebook />
          </View>
          <TextInput placeholder="Enter a habit name" placeholderTextColor={'#00000080'} style={[styles.input, { marginLeft: 16, paddingLeft: 8 }]} value={name} onChangeText={setName} />
        </View>
        <TextInput
          style={[styles.input, { paddingLeft: 8 }]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter additional details (optional)"
          placeholderTextColor={'#00000080'}
        />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Frequency</Text>
        <View style={[styles.frequencyWrapper]}>
          <TouchableOpacity
            onPress={() => handleFrequencyClick('daily')}
            style={[styles.frequencyButton,
            { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            frequency === "daily" ? { backgroundColor: "#4F9D69" } : {},
            ]}>
            <Text style={[styles.frequencyButtonText,
            frequency === "daily" ? { color: '#fff' } : {}
            ]}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFrequencyClick('weekly')}
            style={[styles.frequencyButton, { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            frequency === "weekly" ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.frequencyButtonText,
            frequency === "weekly" ? { color: '#fff' } : {}
            ]}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFrequencyClick('x-days')}
            style={[styles.frequencyButton, { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            frequency === "x-days" ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.frequencyButtonText,
            frequency === "x-days" ? { color: '#fff' } : {}
            ]}>Every x days</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "400", marginBottom: 16 }}>On these days:</Text>
        <View style={styles.dayButtonContainer}>
          <TouchableOpacity
            onPress={() => handleDayClick('Mon')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Mon') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Mon') ? { color: "#fff" } : {}
            ]}>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Tues')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Tues') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Tues') ? { color: "#fff" } : {}
            ]}>Tues</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Wed')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Wed') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Wed') ? { color: "#fff" } : {}
            ]}>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Thurs')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Thurs') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Thurs') ? { color: "#fff" } : {}
            ]}>Thurs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Fri')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Fri') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Fri') ? { color: "#fff" } : {}
            ]}>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Sat')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Sat') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Sat') ? { color: "#fff" } : {}
            ]}>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDayClick('Sun')}
            style={[styles.dayButton, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            toggleDayStyling('Sun') ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.dayButtonText,
            toggleDayStyling('Sun') ? { color: "#fff" } : {}
            ]}>Sun</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Target Goal</Text>
        <View style={[styles.frequencyWrapper]}>
          <TouchableOpacity
            onPress={() => handleTargetGoalClick('Yes/No')}
            style={[styles.frequencyButton, { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            targetGoal === "Yes/No" ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.frequencyButtonText,
            targetGoal === "Yes/No" ? { color: "#fff" } : {}
            ]}>Yes/No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTargetGoalClick('x Amount')}
            style={[styles.frequencyButton, { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            targetGoal === "x Amount" ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.frequencyButtonText,
            targetGoal === "x Amount" ? { color: "#fff" } : {}
            ]}>x Amount</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTargetGoalClick('Timer')}
            style={[styles.frequencyButton, { width: useGetRatio(110) }, Platform.OS === 'android' && styles.androidShadow,
            Platform.OS === 'ios' && styles.iosShadow,
            targetGoal === "Timer" ? { backgroundColor: "#4F9D69" } : {}
            ]}>
            <Text style={[styles.frequencyButtonText,
            targetGoal === "Timer" ? { color: "#fff" } : {}
            ]}>Timer</Text>
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
            defaultValue={"At least"}
            onSelect={(selectedItem, index) => {
              setTargetGoalType(prev => selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            renderDropdownIcon={() => <AntDesign name="caretdown" size={16} color="black" />}
          />
          <TextInput placeholder="Count..." placeholderTextColor={'#00000080'} style={[{ width: useGetRatio(110), paddingLeft: 8, borderBottomWidth: 1, borderBottomColor: '#000' },
          !targetCount && { color: '#00000080' }
          ]}
            inputMode="numeric"
            value={targetCount}
            onChangeText={(text) => {
              setTargetCount(text);
            }}
          />
          <TextInput placeholder="Unit..." placeholderTextColor={'#00000080'} style={[{ width: useGetRatio(110), paddingLeft: 8, borderBottomWidth: 1, borderBottomColor: '#000' },]}
            value={`${targetUnit}`}
            onChangeText={(text) => setTargetUnit(prev => text)}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 16 }}>Duration</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, alignItems: 'center' }}>
          <Text>Start date:</Text>
          <TextInput
            value={
              startDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              })
            } placeholder='time' onChangeText={setHabitStartTime} onPressIn={(e) => { setShowStartDate(prev => !prev) }}
            onPressOut={(e) => Keyboard.dismiss()}
            style={{}} />
          {showStartDate &&
            <DateTimePicker
              value={startDate}
              mode={'date'}
              onChange={handleShowStartDate}
            />
          }
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <Text>End date:</Text>
          <TouchableOpacity style={{ backgroundColor: 'green', height: 24, width: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'flex-end' }}>
            <View style={{ marginRight: 2 }}>
              <ToggleCircle />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center', width: 40 }}>
              <TextInput
                inputMode={'numeric'}
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                onSubmitEditing={() => handleEndDaysApart(endDaysApart)}
                onBlur={() => handleEndDaysApart(endDaysApart)}
                value={`${endDaysApart}`}
                onChangeText={(text) => {
                  const numberValue = parseInt(text, 10); // Parse the input text as a number
                  if (!isNaN(numberValue)) {
                    // Check if the parsed value is a valid number
                    setEndDaysApart(numberValue); // Update the state with the parsed number
                  }
                }}
              >

              </TextInput>
            </View>
            <Text>days</Text>
          </View>
          <TextInput value={
            endDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: '2-digit',
              year: 'numeric',
            })
          } placeholder='time' onChangeText={setHabitEndTime} inputMode='numeric' onPressIn={(e) => setShowEndDate(prev => !prev)} onPressOut={(e) => Keyboard.dismiss()} style={{}} />
          {showEndDate &&
            <DateTimePicker
              value={endDate}
              mode={'date'}
              onChange={handleShowEndDate}
            />
          }
        </View>
        <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 16 }}>
          Reminder
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[{ borderRadius: 30, width: useGetRatio(110), height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff' },
          Platform.OS === 'android' && styles.androidShadow,
          Platform.OS === 'ios' && styles.iosShadow,
          ]}>
            <FontAwesome5 name="bell" size={14} color="black" />
            <Text style={{ paddingLeft: 4 }}>4:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ borderRadius: 30, width: useGetRatio(110), height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
          Platform.OS === 'android' && styles.androidShadow,
          Platform.OS === 'ios' && styles.iosShadow,
          ]}>
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleSubmitForm}
          style={[{ width: '100%', backgroundColor: '#081C15', justifyContent: 'center', alignItems: 'center', borderRadius: 30, flex: 1, marginVertical: 16 },
          ]}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: "600", height: 32 }}>
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
    paddingVertical: 24,
    borderRadius: 30,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 16,
    flex: 1,
    paddingBottom: 4,
  },
  frequencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  frequencyButton: {
    paddingVertical: 8,

    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#fff'
  },
  frequencyButtonText: {
    fontSize: 14,
  },
  dayButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  dayButton: {
    backgroundColor: '#fff',
    borderRadius: 999,
    height: 35,
    width: 35,
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
});

export default HabitForm;
