import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/libs/actions";
import styles from "./page.module.css";

export default async function MealPage({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  if (typeof meal.instructions === "string" && meal.instructions.length > 0) {
    meal.instructions = meal.instructions.split(",");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill sizes="" />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            created by{" "}
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <div className={styles.instructions}>
          {meal.instructions.map((instruction, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: instruction }}
            ></p>
          ))}
        </div>
      </main>
    </>
  );
}
