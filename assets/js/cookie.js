const cookiePopup = document.querySelector('.cookies')
const cookieBtnAccept = document.getElementById('acceptCookie')
const cookieBtnDecline = document.getElementById('declineCookie')

window.addEventListener('load', () => {
    if (!document.cookie.includes('value')) {
        cookiePopup.classList.add('show')
    }
})



cookieBtnAccept.addEventListener('click', () => {
    cookiePopup.classList.remove('show')
    document.cookie = 'name = value ; max-age= ' + 60 * 60 * 24 * 30
})

cookieBtnDecline.addEventListener('click', () => {
    cookiePopup.classList.remove('show')
})

