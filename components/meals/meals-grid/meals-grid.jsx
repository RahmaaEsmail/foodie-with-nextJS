import MealItem from "../meal-item/meal-item";
import styles from "./meals-grid.module.css";

export default function MealGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
