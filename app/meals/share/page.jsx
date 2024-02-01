'use client';

import ShareMealForm from "@/components/meals/share-meal/share-meal-form/share-meal-form";
import styles from "./page.module.css";
import { useState } from "react";

export default function ShareMealPage() {
  const [imageURL , setImageURL] = useState('');
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <ShareMealForm imageURL={imageURL} setImageURL={setImageURL} />
      </main>
    </>
  );
}
