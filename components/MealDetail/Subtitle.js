import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;


const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: '#19674b'
      },
      subtitleContainer:{
        borderBottomColor: '#093928',
        borderBottomWidth: 2,
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
    
    
      }
})
