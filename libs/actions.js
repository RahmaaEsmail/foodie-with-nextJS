import { collection, query, where , addDoc ,getDocs } from "firebase/firestore"; 
import {db } from '@/libs/firebaseConfig';
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';




export async function getMeals() {
    const querySnapshot = await getDocs(collection(db, "dummyMeals"));
    let mealsArray = []
    querySnapshot.forEach(doc  => {
        mealsArray.push(doc.data())
    })
    return mealsArray;
}


export async function getMeal(slug) {
    let meal ;
    const q = query(collection(db, "dummyMeals"), where("slug", "==", slug));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      meal = doc.data();
    });
    return meal
}

export async function shareMeal(meal){
    meal.slug = slugify(meal.title,{lower:true});
    meal.instructions =  xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
  
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed!');
      }
    });

    meal.image = `/images/${fileName}`;
    
    try {
        const docRef = await addDoc(collection(db, "dummyMeals"), meal);
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }   
}