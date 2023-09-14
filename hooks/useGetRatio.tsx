import { Dimensions } from 'react-native'

export default function useGetRatio(pixelWidth: number) {
    const figmaPixelWidth = 390;
    const width = Dimensions.get('window').width
    let resultWidth = (pixelWidth * width) / figmaPixelWidth;
    return resultWidth;
}