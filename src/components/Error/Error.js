import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

export default() => {
    return(
        <AnimatedLottieView source={require('../../Assets/Error.json')} autoPlay/>
    );
};