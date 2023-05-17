import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}> {title} </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration} m </Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()} </Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()} </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 200,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
});
