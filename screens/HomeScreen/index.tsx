import React from 'react'
import {View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem';

import product from '../../components/data/product';
const HomeScreen = () => {
    return (
        <View style={styles.page}>
            
            <FlatList 
                data={product}
                renderItem={({item}) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            /> 
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        marginTop: 15,
        padding: 10,
    },
});
  

export default HomeScreen;