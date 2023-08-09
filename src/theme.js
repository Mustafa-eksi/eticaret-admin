const themes = [
    { // Light theme
        text_color: "#000000",
        bg_color: "#FFFFFF",
        navbar_color: "#7a78ff",
        sidebar_color: "#a8a6ff",
        accent_color: "#a5f4ff",
    },
    { // Dark theme
        text_color: "#FFFFFF",
        bg_color: "#181818",
        navbar_color:"#2f2b94",
        sidebar_color:"#3c3ba4",
        accent_color: "#0991a4"
    }
];
var currentThemeIndex = 1;
export function getTheme() {
    return themes[currentThemeIndex];
}
export function switchTheme() { // works only with dark and light theme
    console.log("switching theme")
    currentThemeIndex = currentThemeIndex === 0 ? 1 : 0;
}
export function setTheme(i) {
    currentThemeIndex = i;
}
export function getThemeIndex() {
    return currentThemeIndex;
}