import Svg, {
    Circle,
} from 'react-native-svg';
import Animated, {
    useSharedValue,
    interpolate,
    withSpring,

} from 'react-native-reanimated';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Checkmark from '../assets/images/checkmark.svg'

interface ProgressCircleProps {
    progress: number;
    handleProgressPress: (itemId: string | number[]) => void;
    habitId: string | number[];
}

const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {

    const { progress, handleProgressPress, habitId } = props;

    const strokeWidth = 6;
    const circleSize = 40;
    const radius = 17;
    const circumference = radius * 2 * Math.PI;

    const strokeDashoffsetState = useSharedValue(getStroke(progress));

    // console.log(strokeDashoffsetState.value)

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    function getStroke(progressPercent: number) {
        const alpha = interpolate(progressPercent, [100, 0], [0, Math.PI * 2]);

        
        const strokeDashoffset = (alpha * radius)
        return strokeDashoffset;
    }

    // function animateCircle() {
    //     console.log('hello')
    //     let habitStroke = getStroke(progress)
    //     strokeDashoffsetState.value = withSpring(strokeDashoffsetState.value + habitStroke);
    // }

    // useEffect(() => {
    //     gainExp()
    // }, [])

    return (
        <TouchableOpacity style={[styles.progress, progress === 100 ? { backgroundColor: '#4F9D69' } : { backgroundColor: '#00000026' }]} onPress={() => handleProgressPress(habitId)}>
            {progress === 100 ? false :
                <View style={{ position: 'absolute', }}>
                    <Svg height={circleSize} width={circleSize} viewBox={`0 0 40 40`} pointerEvents='none'>
                        <AnimatedCircle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            stroke="#4F9D69"
                            strokeWidth={strokeWidth}
                            fill="none"
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={strokeDashoffsetState.value}

                        />
                    </Svg>
                </View>
            }
            {progress !== 100 ?
                <View style={styles.progressWrapper}>
                    <Text>{progress}%</Text>
                </View>
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
        borderRadius: 999,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontWeight: '300',
        position: 'relative'
    },
    progressWrapper: {
        backgroundColor: '#fff',
        width: '85%',
        height: '85%',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    },
})