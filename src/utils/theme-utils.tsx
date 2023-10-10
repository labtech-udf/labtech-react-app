export const changeTheme = () => {
    const themesLink = document.getElementById('theme-link') as HTMLLinkElement;
    const themeSelected = localStorage.getItem('theme');
    console.log(themeSelected, themesLink);
    if(themesLink){
        themesLink.href = '/src/assets/themes/'+ themeSelected +'.css'; 
    }
}