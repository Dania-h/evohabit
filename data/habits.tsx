import uuid from 'react-native-uuid';

const Habits = [
    {
        id: uuid.v4(),
        name: 'Study',
        completed: false,
        progress: 0,
        subtitle: "",
        category: "studies"
    },
    {
        id: uuid.v4(),
        name: 'Drink water',
        completed: false,
        progress: 75,
        subtitle: "8 glasses",
        category: "nutrition"
    },
    {
        id: uuid.v4(),
        name: 'Work Out',
        completed: true,
        progress: 100,
        subtitle: "",
        category: "health",
    },
    {
        id: uuid.v4(),
        name: 'Take Vitamins',
        completed: true,
        progress: 100,
        subtitle: "2 pills",
        category: "nutrition"
    },
];

export default Habits;






