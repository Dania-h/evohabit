import { StyleSheet, View } from "react-native"
import { RadialGradient } from 'react-native-gradients';

interface BackgroundGradientProps {
    width: number;
    height: number;
    colorList: Color[]
}

interface Color {
    offset: string;
    color: string;
    opacity: string
}

const BackgroundGradient = (props: BackgroundGradientProps) => {
    const { width, height, colorList } = props;
    return (
        <View style={styles.linearGradient}>
            <RadialGradient x={width / 2} y={height / 6} rx={350} ry={350} colorList={colorList} />
        </View>
    )
}

export default BackgroundGradient

const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
})