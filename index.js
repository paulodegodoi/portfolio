

$('.nav-link').on('click', () => {
    $('.navbar-nav').slideUp(1000)
    $('#nav-toggler').on('click', () => {
        $('.navbar-nav').show(1000)
    })
})