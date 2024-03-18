import i18next from "i18next";
function SwitchLanguage (){
    return(
        <>
            <button onClick={() => i18next.changeLanguage('en')}>English</button>
            <button onClick={() => i18next.changeLanguage('hn')}>Hindi</button>

        </>
    )
}
export default SwitchLanguage;