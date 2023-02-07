const darkTheme = [
    "--bg-color: var(--color-blue)",
    "--text-color-primary: var(--color-white)",
    "--text-color-secondary: var(--color-iron)",
    "--text-color-tertiary: var(--color-white)",
    "--fill-switch: var(--color-gold)",
    "--fill-primary:var(--color-white)"
];
  

function ChangeTheme({turnSwitch}) {
    const body = document.getElementsByTagName("body")[0];
    //const useDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //console.log(useDark)
    body
}

export default ChangeTheme;