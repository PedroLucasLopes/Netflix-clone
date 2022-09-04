import React from 'react'
import styles from './Footer.module.css';
import { Facebook } from '../../assets/Facebook';
import { Twitter } from '../../assets/Twitter';
import { Instagram } from '../../assets/Instagram';
import { Youtube } from '../../assets/Youtube';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialMedia}>
                <li>
                    <a href="">
                        {<Facebook />}
                    </a>
                </li>
                <li>
                    <a href="">
                        {<Instagram />}
                    </a>
                </li>
                <li>
                    <a href="">
                        {<Twitter />}
                    </a>
                </li>
                <li>
                    <a href="">
                        {<Youtube />}
                    </a>
                </li>
            </ul>
            <ul className={styles.gridOptions}>
                <div>
                    <li>
                        <a href="">
                            Autodescrição
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Relações com investidores
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Avisos legais
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="">
                            Central de ajuda
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Carreiras
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Preferências de cookie
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="">
                            Cartão pré-pago
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Termos de uso
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Informações corporativas
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="">
                            Imprensa
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Privacidade
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Entre em contato
                        </a>
                    </li>
                </div>
            </ul>
            <p className={styles.textHover}>
                <a href="/">
                    Código de Serviço
                </a>
            </p>
            <p className={styles.textSubtitle}>&copy; 1997-2022 Netflix, Inc. (8f0c01c6-a5ae-44b6-a360-0d73f5f3dc09)</p>
        </footer>
    )
}