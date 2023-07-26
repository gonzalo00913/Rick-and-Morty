import SearchBar from "../SearchBar/SearchBar";
import styles from '../Nav/nav.module.css';
import { Link } from "react-router-dom";

const Nav = ({onSearch, onLogout}) => {
  return (
    <div >
      <div className={styles.containerNav}>
        <div className={styles.links}>
        <Link className={styles.link} to="/About">About</Link>
        <Link className={styles.link} to="/Home">Home</Link>
        <Link className={styles.link} to="/Favorite">Favorite</Link>
        </div>
        <SearchBar className={styles.searchBar} onSearch={onSearch}/>
        <button className={styles.loguot} onClick={onLogout}>Logout</button>
    </div>
    </div>
  );
};

export default Nav;


