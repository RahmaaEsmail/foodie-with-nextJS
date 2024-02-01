import { redirect } from "next/navigation";
import { shareMeal } from "@/libs/actions";
import ImagePicker from "../image-picker/image-picker";
import MealsButtonSubmit from "../meals-button-submit/meals-button-submit";
import styles from "./share-meal-form.module.css";
import { handleSubmitAction } from "@/libs/meals";

export default function ShareMealForm({imageURL , setImageURL}) {

  const handleForm = handleSubmitAction.bind(null , imageURL)

  return (
    <form className={styles.form} action={handleForm}>
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker label="an image" name="image"   setImageURL={setImageURL}/>

      <p className={styles.actions}>
        <MealsButtonSubmit />
      </p>
    </form>
  );
}
