import React from 'react'
import {Pressable, Text, StyleSheet } from 'react-native'
interface ButtonProps {
    text: string;
    onPress:() => void;
    containerStyles?: object;
}
const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
        height: 35,
        borderWidth: 1,
        borderColor: '#a15e1b'

    },
    text: {

    }
})

  

export default Button;