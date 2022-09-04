import React from 'react';
import { Information } from '../../assets/Information';
import { Play } from '../../assets/Play';
import { Button } from '../Button/Button';
import onePunchManLogo from '../../assets/onePunchManLogo.png'
import styles from './MainContent.module.css';

export const MainContent = () => {
    return (
        <main className={styles.background}>
            <div className={styles.textContainer}>
                <img src={onePunchManLogo} className={styles.titleLogo} />
                <p className={styles.text}>
                    O super-herói mais forte do mundo pode matar qualquer um com um só golpe. Mas, com uma vida sem desafios, ele sofre com o tédio e a depressão.
                </p>
                <div className={styles.flexButton}>
                    <Button>
                        <Play />
                        Assistir
                    </Button>
                    <Button>
                        <Information />
                        Mais Informações
                    </Button>
                </div>
            </div>
        </main>
    )
}
