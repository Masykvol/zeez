const modal = document.getElementsByClassName('module')
const close = document.getElementById('btn-close')
const open =  document.getElementById('btn-module')


close.onclick = function () {
    document.getElementsByClassName('module')[0].style.display = 'none'
}


open.addEventListener('click', function() {
    document.getElementsByClassName('module')[0].style.display = 'block'
})



