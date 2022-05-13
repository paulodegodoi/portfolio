$('.nav-link').on('click', () => {
    $('.navbar-nav').slideUp(1000)
    $('#nav-toggler').on('click', () => {
        $('.navbar-nav').slideDown(1000)
    })
})