import { Suspense } from "react";
import Link from "next/link";

import { getMeals } from "@/libs/actions";
import MealGrid from "@/components/meals/meals-grid/meals-grid";
import styles from "./page.module.css";

async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, it's easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
