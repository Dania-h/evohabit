import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'

const evoScreen = () => {

    return (
        <View style={styles.container}>
            <BackgroundGradient />
        </View>
    )
}

export default evoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
})