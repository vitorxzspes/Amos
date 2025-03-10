import styles from './Sobre.module.css';
import { motion } from 'framer-motion';

import Facebook from '../assets/icons/social_media/facebook pequeno.png';
import GitHub from '../assets/icons/social_media/github pequeno.png';
import Instagram from '../assets/icons/social_media/ig pequeno.png';
import LinkedIn from '../assets/icons/social_media/linkedin pequeno.png';
import Pinterest from '../assets/icons/social_media/pinterest pequeno.png';
import TikTok from '../assets/icons/social_media/tik-tok pequeno.png';
import WhatsApp from '../assets/icons/social_media/zap pequeno.png';
import YouTube from '../assets/icons/social_media/youtube pequeno.png'

export default function Sobre() {
  
    document.title = 'AMÓS - Sobre';


    const pageVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: 50,
        },
    };

    const pageTransition = {
        type: 'spring',
        stiffness: 50,
        damping: 20,
    };
    return (      
        <motion.div
        className={styles.divSobre}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
            <h1 style={{textAlign: 'center'}}>Sobre o projeto</h1>
            <h1 style={{color:'gray'}}>
                Olá Mundo!
            </h1>
            <p>
                olá a todos! meu nome é vitor e sou desenvolvedor web, procurei fazer projetos para treinar minha capacidade lógica e analítica, e um deles é a <b>AMÓS</b>, uma IA que lhe auxiliará no seu desenvolvimento pessoal. <br/>
            </p>

            <h2 style={{color:'green'}}>
                Instituto Federal de Brasília (IFB)
            </h2>

            <p>
                pois é, estudo lá e curso Sistemas para Internet, foi ótimo para fazer networking e aprender mais sobre programação, design e outras coisas. <br/>
            </p>

            <h3>
                Caso você queira falar comigo...
            </h3>
            <p>
                para dar sugestões, feedback, elogios, críticas, ou qualquer outra coisa, você pode me contatar: pelas minhas redes sociais!
            </p>    
            <strong>PS: peguei as imagens no canva, depois deem uma passada lá!</strong>
        <div className={styles.divMainContacts}>
            <div className={styles.divMainContactsContainer}>
                <div className={styles.divMainOneContact}>
                    <a href="https://wa.me/5561994030749?text=ola!%20vim%20do%20CMHub!" target="_blank">
                        <img src={WhatsApp} alt="ícone whatsapp"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a href="https://instagram.com/vitorxzspes" target="_blank">
                        <img src={Instagram} alt="ícone instagram"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a id="imgMainContactGitHub" href="https://github.com/vitorxzspes" target="_blank">
                        <img src={GitHub} alt="ícone github"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a href="https://www.linkedin.com/in/vitor-colombelli-75b115253/" target="_blank">
                        <img src={LinkedIn} alt="ícone tiktok"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a href="https://www.facebook.com/vitorxzspes/" target="_blank">
                        <img src={Facebook} alt="ícone facebook"/>
                    </a>
                </div>
                
                <div className={styles.divMainOneContact}>
                    <a href="https://youtube.com/%40vitorxzspes" target="_blank">
                        <img src={YouTube} alt="ícone youtube"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a href="https://www.tiktok.com/%40vituuuuuu.u?lang=pt-BR" target="_blank">
                        <img src={TikTok} alt="ícone tiktok"/>
                    </a>
                </div>

                <div className={styles.divMainOneContact}>
                    <a href="https://br.pinterest.com/vitukjkkk/" target="_blank">
                        <img src={Pinterest} alt="ícone tiktok"/>
                    </a>
                </div>
            </div>
        </div>             
    </motion.div>
    )
}