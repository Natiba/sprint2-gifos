const dark = document.getElementById('dark-item');
console.log(dark);


// ====> I need to check the config of windows
// ====> I put everything from @media that I put in Css
const configUser = window.matchMedia('(prefers-color-scheme: dark)')

// ====> const for local storage. The key is theme
// ====> the values for localStorage will be 'dark' & 'light'
const localSt = localStorage.getItem('theme');
if(localSt === 'dark') {
    document.body.classList.toggle('dark-theme')
}
else if (localSt === 'light') {
    document.body.classList.toggle('light-theme')
}

dark.addEventListener('click',() => {
    //  console.log(configUser.matches); 

    // ====> I create a let of theme/color

    let colorTheme;
     //me dice si tiene configurado modo oscuro = true
     if (configUser.matches) {
     //====> We enter in Dark Mode
     //====> I call document, then to body, I 'put/put off' a class with toggle, and that  class will be the same I just create before: light-theme
     document.body.classList.toggle('light-theme')

     // ===> I need to check if my body contains the class light-theme. IF it has it, I'm going to storage it in this colorTheme the value 'light'. Contrary case, I'm going to storage 'dark' (whit ternary operator)
     colorTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark '
    }
    else {
        document.body.classList.toggle('dark-theme')

        colorTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }

    //====> once I have that color: colorTheme, I have to storage it in the local storage.  It's going to storage it with the key 'tema' I create before.  And the value is going to be 'colorTheme', the variable I create some lines up .
    localStorage.setItem('theme', colorTheme)
})






