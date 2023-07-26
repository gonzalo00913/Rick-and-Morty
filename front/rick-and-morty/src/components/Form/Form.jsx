import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../Form/form.module.css';


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username:"",
        password:""
    });
    const [access, setAccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      !access && navigate('/');
   }, [access]);


    const handleInputChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData,[property]: value })
       /*  validation({...userData,[property]: value, errors,setErrors}) */
      }
    
      const handleAlert = async (event) => {
        event.preventDefault();
        login(userData);
       }
      

  return (
   <div className={styles.body}>
    <h2 className={styles.login}>Rick And Morty</h2>
      <form className={styles.containerForm}  action="" onSubmit={handleAlert}>
        <div className={styles.containerNp}>
          <label  htmlFor="username">Username</label>
          <input className={styles.input} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
        </div>
        <div className={styles.containerNp}>
          <label htmlFor="password">Password</label>
          <input className={styles.input} type="text" name="password" value={userData.password} onChange={handleInputChange}/>
        </div>
        <p className={styles.p}>Username: gmasa@gmail.com</p>
        <p className={styles.p}>Password: pass123</p>
        <button className={styles.button}>
          login
        </button>
      </form>
    </div>
  );
};

export default Form;
