import React from 'react';
import netflixLogo from '../../assets/netflix-logo.png';
import user from '../../assets/user.png';
import { Eyeglass } from '../../assets/Eyeglass.jsx';
import { Bell } from '../../assets/Bell.jsx';
import { Arrow } from '../../assets/Arrow';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [click, setClick] = React.useState(false);

    return (
        <header className={styles.container}>
            <nav className={styles.navbarBox}>
                <div className={styles.navItems}>
                    <a href="/">
                        <img src={netflixLogo} className={styles.logo} />
                    </a>
                    <ul className={styles.navItems}>
                        <li>
                            <a href="">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Séries
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Filmes
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Bombando
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Minha lista
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Navegar por idiomas
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.navOptions}>
                    <div onClick={({ target }) => !target.value ? setClick(true) : setClick(false)} className={`${styles.input} ${click ? styles.inputBorder : ''}`} onBlur={() => setClick(false)}>
                        <Eyeglass />
                        <input type="text" placeholder='Títulos, gente e gêneros' className={!click ? styles.inputClick : styles.inputClickBlock} />
                    </div>
                    <a href="" className={styles.alignBell}>
                        <Bell />
                    </a>
                    <div className={styles.profile}>
                        <img src={user} />
                        <Arrow />
                    </div>
                </div>
            </nav>
        </header>
    )
}
