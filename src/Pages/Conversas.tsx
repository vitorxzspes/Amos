import styles from './Conversas.module.css';
import { motion } from 'framer-motion';

export default function Conversas() {

    document.title = 'AMÓS - Conversas';

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
            className={styles.divChats}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1>Conversas</h1>
            <div className={styles.divChatsModules}>
                <div className={styles.divChatsModule}>
                    <h2>Por pastas</h2>
                    <div className={styles.divChatsModuleFolders}>
                        <div className={styles.divChatsModuleFoldersItem}>
                            <h3>Amigos</h3>
                            <div className={styles.divChatsModuleFoldersItemContent}>
                                <p>3 conversas</p>
                                
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Como socializar mais?</p>
                                <p>Hoje</p>
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Como lidar com conflitos?</p>
                                <p>Ontem</p>
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Planejando uma viagem</p>
                                <p>Semana passada</p>
                            </div>
                        </div>
                        <div className={styles.divChatsModuleFoldersItem}>
                            <h3>Família</h3>
                            <div className={styles.divChatsModuleFoldersItemContent}>
                                <p>2 conversas</p>
                                
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Como lidar com a perda?</p>
                                <p>Hoje</p>
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Planejando uma reunião</p>
                                <p>Semana passada</p>
                            </div>
                        </div>
                        <div className={styles.divChatsModuleFoldersItem}>
                            <h3>Trabalho</h3>
                            <div className={styles.divChatsModuleFoldersItemContent}>
                                <p>1 conversa</p>
                                
                            </div>
                            <div className={styles.divChatsModuleFoldersItemContentChat}>
                                <p>Como lidar com a pressão?</p>
                                <p>Hoje</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divChatsModule}>
                    <h2>Por data</h2>
                    <div className={styles.divChatsModuleDate}>
                        <div className={styles.divChatsModuleDateItem}>
                            <h3>Hoje</h3>
                            <div className={styles.divChatsModuleDateItemContent}>
                                <p>3 conversas</p>
                                
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Como socializar mais?</p>
                                <p>Hoje</p>
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Como lidar com conflitos?</p>
                                <p>Ontem</p>
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Planejando uma viagem</p>
                                <p>Semana passada</p>
                            </div>
                        </div>
                        <div className={styles.divChatsModuleDateItem}>
                            <h3>Ontem</h3>
                            <div className={styles.divChatsModuleDateItemContent}>
                                <p>2 conversas</p>
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Como lidar com conflitos?</p>
                                <p>Ontem</p>
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Planejando uma viagem</p>
                                <p>Semana passada</p>
                            </div>
                        </div>
                        <div className={styles.divChatsModuleDateItem}>
                            <h3>Semana passada</h3>
                            <div className={styles.divChatsModuleDateItemContent}>
                                <p>1 conversa</p>
                                
                            </div>
                            <div className={styles.divChatsModuleDateItemContentChat}>
                                <p>Planejando uma viagem</p>
                                <p>Semana passada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}