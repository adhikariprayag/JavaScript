document.querySelectorAll('.btn--1').forEach(item => {
    item.addEventListener('click', () => {
        alert('this is external')
    })
})