import React from 'react';
import './header.css'
import { useTranslation, initReactI18next} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../../i18n'
import i18n from "i18next";
import enTranslations from '../../locales/en.json';
import hnTranslations from '../../locales/hn.json';
import i18next from "i18next";

/*
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations, // Assign the English translations
            },
            hn: {
                translation: hnTranslations, // Assign the Hindi translations
            },
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
        // ...other configuration options
    })
    .then(() => {
    // Initialization has completed successfully
    console.log('i18n initialized successfully');
})
    .catch((error) => {
        // Handle initialization error
        console.error('Error initializing i18n:', error);
    });

 */
function Header(){
        const {t} = useTranslation();

        return (
        <div className="media__header">
            <div className="media__header-container" id="Home">
                <div className="media__header-container-heading">
                    <h1>{t('Mega Media Summit')}</h1>
                    <p className="media__header-container-subtext">{t('The Global conference for media practitioners July 8-10, 2025')}</p>
                </div>
                <div>
                    <Link to="form">
                        <button className="btn">{t('Register Now')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;