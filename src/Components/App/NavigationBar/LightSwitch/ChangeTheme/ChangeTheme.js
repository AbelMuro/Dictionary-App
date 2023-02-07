import './themes.css';


function ChangeTheme({turnSwitch}) {

    let theme;
    if(turnSwitch)
        theme = "dark"
    else
        theme = "light"

    document.documentElement.setAttribute("data-theme", theme);
}

export default ChangeTheme;