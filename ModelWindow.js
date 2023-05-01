const openWindow = document.getElementById('mobile-burger')
const closeWindow = document.getElementById('btn-window-close')

openWindow.onclick = function () {
    document.getElementsByClassName('modal-window-header')[0].style.display = 'block'
    document.getElementsByClassName('swiper')[0].style.display = 'none'
}

closeWindow.onclick = function () {
    document.getElementsByClassName('modal-window-header')[0].style.display = 'none'
    document.getElementsByClassName('swiper')[0].style.display = 'block'
}