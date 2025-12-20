import styles from "./index.module.scss";
import Button from "../Button/index.jsx";
import Logo from "../../assets/Logo";
import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuRef = useRef(null);
    const borderRef = useRef(null);
    const langMenuRef = useRef(null);
    const langBorderRef = useRef(null);

    const handleMouseOver = (e, menuRefInstance, borderRefInstance) => {
        if (!menuRefInstance.current || !borderRefInstance.current) return;
        const itemRect = e.target.getBoundingClientRect();
        const menuRect = menuRefInstance.current.getBoundingClientRect();
        const leftPos = itemRect.left - menuRect.left;
        const width = itemRect.width;
        borderRefInstance.current.style.transform = `translateX(${leftPos}px)`;
        borderRefInstance.current.style.width = `${width}px`;
    };

    const handleMouseOut = (borderRefInstance) => {
        if (borderRefInstance.current) {
            borderRefInstance.current.style.width = '0px';
        }
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleProjectsClick = (e) => {
        e.preventDefault();
        const projectsSection = document.querySelector('[data-section="projects"]');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.content}>
                
                {/* BLOC GAUCHE : Navigation Principale */}
                <div className={styles.leftSection}>
                    <nav>
                        <ul className={styles.menu} ref={menuRef}>
                            <li>
                                {/* LIEN CV DYNAMIQUE ICI */}
                                <a href={t.cvFile} target="_blank" rel="noopener noreferrer" 
                                   onMouseOver={(e) => handleMouseOver(e, menuRef, borderRef)} 
                                   onMouseOut={() => handleMouseOut(borderRef)}>
                                   {t.about}
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={handleProjectsClick} 
                                   onMouseOver={(e) => handleMouseOver(e, menuRef, borderRef)} 
                                   onMouseOut={() => handleMouseOut(borderRef)}>
                                   {t.projects}
                                </a>
                            </li>
                            <div className={styles.border} ref={borderRef}></div>
                        </ul>
                    </nav>
                </div>

                {/* BLOC CENTRE : Logo */}
                <div 
                    className={`${styles.logo} ${isLogoHovered ? styles.logoHovered : ""}`}
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                    onClick={handleLogoClick}
                >
                    <Logo />
                </div>

                {/* BLOC DROITE : Langues + Contact */}
                <div className={styles.rightSection}>
                    <nav>
                        <ul className={styles.menu} ref={langMenuRef}>
                            <li>
                                <a href="#" 
                                   className={language === 'fr' ? styles.active : ''} 
                                   onClick={(e) => { e.preventDefault(); setLanguage('fr'); }} 
                                   onMouseOver={(e) => handleMouseOver(e, langMenuRef, langBorderRef)} 
                                   onMouseOut={() => handleMouseOut(langBorderRef)}>
                                   Fr
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className={language === 'en' ? styles.active : ''}
                                   onClick={(e) => { e.preventDefault(); setLanguage('en'); }} 
                                   onMouseOver={(e) => handleMouseOver(e, langMenuRef, langBorderRef)} 
                                   onMouseOut={() => handleMouseOut(langBorderRef)}>
                                   En
                                </a>
                            </li>
                            <div className={styles.border} ref={langBorderRef}></div>
                        </ul>
                    </nav>
                    
                    <div className={styles.getInTouch}>
                        <Button mailto={true}>{t.contact}</Button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;