import { StyleSheet, View, Dimensions } from "react-native"
import { RadialGradient } from 'react-native-gradients';
import { useState, useEffect } from 'react'

// interface BackgroundGradientProps {
//     width: number;
//     height: number;
// }

// interface Color {
//     offset: string;
//     color: string;
//     opacity: string
// }

const colorList = [
    { offset: '0%', color: '#FFF', opacity: '1' },
    { offset: '27.49%', color: '#BCFFDB', opacity: '1' },
    { offset: '85.21%', color: '#43BCCD', opacity: '1' }
]

const BackgroundGradient = () => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        //handler to get device Height
        setHeight(Dimensions.get('window').height);
        //handler to get device Width
        setWidth(Dimensions.get('window').width);

        // const expString = getExpWidth.toString() + '%';
        // console.log(`${user?.firstName} line 34`)
    }, []);

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