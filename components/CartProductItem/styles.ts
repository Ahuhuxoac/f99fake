import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 2,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        margin: 3,
        height: 150,
        flex: 2,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 8,
        flex: 3,
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
    },
    price: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',

    },
    ratingStar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },
    star: {
        margin: 2,
    },
    quantity: {
        marginLeft: 10,
        marginBottom: 10,
        marginTop: -5,
    }
});

export default styles;