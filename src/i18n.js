import i18n from "i18next";
import enTranslations from './locales/en.json';
import hnTranslations from './locales/hn.json';
import i18next from "i18next";
import { initReactI18next} from 'react-i18next';
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

export default i18n;