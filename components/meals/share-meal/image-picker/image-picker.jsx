'use client';
import {useRef, useState} from 'react';

import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label , name}) {
    const [selectedImagePicker  , setSelectedImagePicker] = useState();
    const imagePickerRef = useRef();

    function handleImagePicker() {
        imagePickerRef.current.click();
    }

    function handleImageChange(e) {
       const file = e.target.files[0];
       if(!file) {
        setSelectedImagePicker(null);
        return;
       }

       const fileReader = new FileReader();
       fileReader.onload = () => {
        setSelectedImagePicker(fileReader.result);
       }
       fileReader.readAsDataURL(file)
    }

    return (
        <div className={styles.picker}>
           <label htmlFor={name}>{label}</label>
           <div className={styles.controls}>
            <div className={styles.preview}>
                {selectedImagePicker && <Image src={selectedImagePicker} alt="image selected by the user." fill/>}
                {!selectedImagePicker && <p>No image picked yet.</p>}
            </div>
             <input type='file' accept='image/png , image/jpeg' id={name} name={name} ref={imagePickerRef} onChange={handleImageChange} className={styles.input}  required/>
             <button type='button' onClick={handleImagePicker} className={styles.button}>Pick an image</button>
           </div>
        </div>
    )
}