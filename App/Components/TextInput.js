import React from 'react'
import { View, TextInput, Text } from 'react-native'

const SPTextInput = props => (
    <View>
        <TextInput {...props}/>
        props.error ? <Text style={{color: "red", width: 300, marginLeft: 10}}>{props.error}</Text> : null
    </View>
)

export default SPTextInput