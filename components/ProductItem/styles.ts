import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    image: {
        margin: 3,
        height: 150,
        flex: 2,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 10,
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
        margin: 3,
    },
});

export default styles;