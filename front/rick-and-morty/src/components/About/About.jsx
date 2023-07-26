import styles from '../About/about.module.css';

const About = ( )=>{
    return(
        <div>
        <h1 className={styles.h1}>App de Rick and Morty</h1>
        <p className={styles.p}>
        "I have created an app in React called 'Rick and Morty'. This app is a
          collection of cards that include information about the characters of
          the animated series 'Rick and Morty', as its name and species. Through
          the application, users can easily search for the characters they
          want, and mark your favorites to always have them at hand. The creation of this application."
        </p>
      </div>
    )
}

export default About