import React, {useState} from 'react'
import {View, Text ,Image} from 'react-native'
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import QuantitySelector from '../Quantity';

interface CartProductItemProps {
    cartItem:{
        id: string;
        quantity: number;
        option?: string; 
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice: number;
        }
    }
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
    const {quantity: quantityProp, item} = cartItem;

    const [quantity, setquantity] = useState(quantityProp)
    return (
        <View style={styles.root} >
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: item.image}} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <Text style={styles.price}>
                        ₫{item.price}
                        {item.oldPrice && (<Text style={styles.oldPrice}>₫{item.oldPrice}</Text>)}
                    </Text>
                    
                    <View style={styles.ratingStar}>
                        {[0,0,0,0,0].map(( el, i ) => (
                            <FontAwesome 
                                key={`${item.id}- ${i}`}
                                style={styles.star} 
                                name = {i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                color="#e47911" 
                                size = {18}
                        />)
                        )}
                        
                        <Text>{item.ratings}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.quantity}>
                    <QuantitySelector  quantity={quantity} setquantity={setquantity} />
            </View>
        </View>
        
    );
};

export default CartProductItem;