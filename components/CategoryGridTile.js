import { Pressable, View, Text, StyleSheet } from "react-native"

function CategoryGridTile({ title, color }) {
    return(
        <View style={styles.gridItem}>
            <Pressable style={styles.button} android_ripple={{color: 'violet'}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>

        </View>
    )

}


export default CategoryGridTile


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin:16,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: 'pink'
    },
    button:{
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }

})