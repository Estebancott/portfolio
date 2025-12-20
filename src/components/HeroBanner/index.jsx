import styles from "./index.module.scss";
import { useLanguage } from "../../context/LanguageContext";

const HeroBanner = () => {
    const { t } = useLanguage();
    
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <p className={styles.title}>
                    {t.heroTitlePart1} <br/> {t.heroTitlePart2} <span>Esteban</span>
                </p>
                <p className={styles.descriptionOfDescription}>
                    {t.heroDescription}
                </p>
            </div>
            <div className={styles.containerSkills}>
                <div className={styles.skills}>
                    <div className={`${styles.skill} ${styles.cpp}`}>C++</div>
                    <div className={`${styles.skill} ${styles.c}`}>C</div>
                    <div className={`${styles.skill} ${styles.python}`}>Python</div>
                    <div className={`${styles.skill} ${styles.bash}`}>Bash</div>
                </div>
            </div>
            <div className={styles.banner}>
                <img src={"/hero_banner.png"} alt="HeroBanner"/>
            </div>
        </div>
    )
}

export default HeroBanner;