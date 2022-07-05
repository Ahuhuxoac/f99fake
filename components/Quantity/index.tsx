import React from 'react'
import {View, StyleSheet, Pressable,Text} from 'react-native'

const QuantitySelector = ({quantity, setquantity}) => {
    const onMinus = () => {
        setquantity(Math.max(0, quantity - 1));
    }
    const onPlus = () => {
        setquantity(quantity + 1);
    }
    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 100,
},
button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
},
quantity: {
    color: '#007eb9',
},
buttonText: {
    fontSize: 18,
},
});
  

export default QuantitySelector;