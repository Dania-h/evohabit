import Svg, {
    Circle,
} from 'react-native-svg';
import Animated, {
    useSharedValue,
    interpolate,
    withSpring,
    useAnimatedProps,
    withTiming,
    useDerivedValue,

} from 'react-native-reanimated';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Checkmark from '../assets/images/checkmark.svg'
import { useEffect, useState } from 'react';

interface ProgressCircleProps {
    habitId: string | number[];
    strokeWidth: number;
    circleSize: number;
    radius: number;
    circumference: number;
    duration: number;
    habit: {
        id: string | number[]; // Change 'habitId' to 'id'
        name: string;
        completed: boolean;
        progress: number;
        subtitle: string;
        category: string;
    };
}

const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {

    const { habit, strokeWidth, circleSize, radius, circumference, duration } = props;

    const [newHabit, setNewHabit] = useState(habit)

    const strokeOffset = useSharedValue(getStrokeOffset(newHabit.progress));

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    function getStrokeOffset(progressPercent: number) {
        return (
            (((circumference * progressPercent) / 100) - circumference) * -1
        )
    }

    function handleProgressPress() {
        setNewHabit(prevHabit => {
            return {
                ...prevHabit,
                progress: prevHabit.progress + 5
            }
        });
    }

    const animatedCircleProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: withTiming(strokeOffset.value, { duration: duration }),
        };
    });

    useEffect(() => {
        strokeOffset.value = getStrokeOffset(newHabit.progress)
    }, [getStrokeOffset]);

    function handleProgressPressAnimation(habitId: string | number[]) {
        handleProgressPress()
        // strokeOffset.value = getStrokeOffset
    }

    return (
        <TouchableOpacity style={[styles.progress, newHabit.progress === 100 ? { backgroundColor: '#4F9D69' } : { backgroundColor: '#00000000' }]} onPress={() => handleProgressPressAnimation(newHabit.id)}>
            {newHabit.progress === 100 ? false :
                <View style={{ position: 'absolute', }}>
                    <Svg height={circleSize} width={circleSize} viewBox={`0 0 40 40`} pointerEvents='none'>
                        <Circle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            stroke="#E7E7E7"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                        <AnimatedCircle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            stroke="#4F9D69"
                            strokeWidth={strokeWidth}
                            fill="none"
                            strokeDasharray={`${circumference}`}
                            animatedProps={animatedCircleProps}
                        />
                    </Svg>
                </View>
            }
            {newHabit.progress !== 100 ?
                <Text style={styles.progressWrapper}>{newHabit.progress}%</Text>
                :
                <Checkmark />
            }
        </TouchableOpacity>
    )
}

export default ProgressCircle;


const styles = StyleSheet.create({
    progress: {
        height: 40,
        width: 40,
        borderRadius: 9999,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontWeight: '300',
        position: 'relative'
    },
    progressWrapper: {
        fontSize: 11,
    },
})