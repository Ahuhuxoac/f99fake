import React, {useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './styles'
import products from '../../components/data/products'
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/Quantity';
import Button from '../../components/Button';
import Imageitems from '../../components/Imageitems';
const ProductScreen = () => {
    const [selectedOption,setSelectedOption] = useState(products.options ? products.options[0] : null);
    const [quantity,setquantity] = useState(1);
    
    return (
        <ScrollView style={styles.OWO}>
            <Text style={styles.title}>{products.title}</Text>

            <Imageitems images={products.images}/>

            <Picker
                selectedValue = {selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {products.options.map(option => (
                    <Picker.Item label={option} value={option}  />)
                )}
            </Picker>
            <Text style={styles.price}>
                        ₫{products.price}
                        {products.oldPrice && (<Text style={styles.oldPrice}>₫{products.oldPrice}</Text>)}
            </Text>

            <Text style={styles.description}>{products.description}</Text>
            <QuantitySelector quantity={quantity} setquantity={setquantity} />
            <Button text={'Add to card'} onPress={() => {console.warn("Add to card")}} 
            containerStyles={{backgroundColor: '#e3c905'}} />
            <Button text={'Buy Now'} onPress={() => {console.warn("Buy now")}} />


        </ScrollView>
    );
  
}
export default ProductScreen;