
/* this is where i left off, i will need to add a css variable to all elements that will have a dark mode*/
/* remember to add a var(--variable) in the style.css in App folder*/
const lightTheme = [
    "--bg-color: white",
    "--text-color: var(--color-black)",
  ];
  
const darkTheme = [
    "--bg-color: black",
    "--text-color: var(--color-white)"
];

function ChangeTheme(turnSwitch) {
    const root = document.getElementsByTagName("html")[0];
    let theme;

    if(turnSwitch)
        theme = darkTheme
    else
        theme = lightTheme;

    root.style.cssText = theme.join(";");
        
}

export default ChangeTheme;