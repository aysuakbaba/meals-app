import { View, StyleSheet, Text } from "react-native";

function MealDetails({duration, complexity, affordability, style}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={styles.detailsItem}>{duration} m </Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()} </Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()} </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      },
      detailsItem: {
        fontSize: 12,
      },
})
