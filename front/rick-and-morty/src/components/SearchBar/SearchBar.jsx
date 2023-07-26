import { useState } from "react";
import styles from '../SearchBar/search.module.css';

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) =>{
      setCharacter(event.target.value)
      
   }
   return (
      <div className={styles.containerSarch}>
      <input className={styles.input} type='search' value={character} onChange={handleChange} placeholder="Num ID Here (1 to 826)"/>
      <button className={styles.buttom}  onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
