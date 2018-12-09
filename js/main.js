
document.querySelector('.login-pop').addEventListener('click' , function () {
    document.querySelector('.login-pop-up').style.display = 'flex' ;
    document.querySelector('.navbar-collapse').style.display = 'none'
})

document.querySelector('.btn-close').addEventListener('click' , function () {
    document.querySelector('.login-pop-up').style.display = 'none' ;
})