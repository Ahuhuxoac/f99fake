import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../components/data/cart';
import Button from '../../components/Button';
const ShoppingCart = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
      0
  );

  return (
      <View style={styles.page}>
        
      
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=>(
          <View>
          <Text style={styles.titleprice}>
            TOTAL ({products.length} items) : 
            <Text style={styles.totalPrice}>
              {totalPrice.toFixed(2)}đ
            </Text>
          </Text>
          <Button 
            text="Process Check Out"
            onPress={() => console.warn('checkout')}
            containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}

          />
          </View>
        )}
      />
    </View>  
  );
}


const styles = StyleSheet.create({
    page : {
        padding: 10,
        marginTop: 25,
    },
    titleprice: {
      fontSize: 16
    },
    totalPrice: {
      color: '#e47911'
    }
})
  

export default ShoppingCart;