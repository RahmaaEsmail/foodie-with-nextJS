'use server'

import { revalidatePath } from "next/cache";
import { shareMeal } from "./actions";
import { redirect } from "next/navigation";


export  async function handleSubmitAction(imageURL,formData ) {
  
    const meal = {
      creator: formData.get("name"),
      creator_email: formData.get("email"),
      summary: formData.get("summary"),
      instructions: [...formData.get("instructions").split("\n")],
      // image: imageURL,
      title: formData.get("title"),
    };
    const instruction = formData.get("instructions").split("\n");
    if (instruction.length > 0) {
      meal.instructions = [...instruction];
    }
    meal.image = imageURL;

    if(meal.image === '') {
        return;
    }
        await shareMeal(meal);
        revalidatePath("/meals")
        redirect("/meals"); 
  }