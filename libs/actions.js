import { collection, query, where , addDoc ,getDocs } from "firebase/firestore"; 
import {txtDb } from '@/libs/firebaseConfig';
import slugify from "slugify";
import xss from "xss";

export async function getMeals() {
    const querySnapshot = await getDocs(collection( txtDb, "dummyMeals"));
    let mealsArray = []
    querySnapshot.forEach(doc  => {
        mealsArray.push(doc.data())
    })
    return mealsArray;
}


export async function getMeal(slug) {
    let meal ;
    const q = query(collection(txtDb, "dummyMeals"), where("slug", "==", slug));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      meal = doc.data();
    });
    return meal
}

export async function shareMeal(meal){
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

    try {
        const docRef = await addDoc(collection(txtDb, "dummyMeals"), meal);
        revalidatePath("/meals")
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }   
}