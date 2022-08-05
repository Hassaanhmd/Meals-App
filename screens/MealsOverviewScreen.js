import { useLayoutEffect } from 'react'; //run effect simultaneously with component function rendering vs after inital rendering (with useEffect())

import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // function pressHandler() {
  //   navigation.navigate('MealDetail');
  // }
  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;
