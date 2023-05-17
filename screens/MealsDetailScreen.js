import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealsDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id == mealId).title;
    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation]);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
