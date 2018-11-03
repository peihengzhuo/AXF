$(function () {
    $('.market').width(innerWidth)

    typeIndex = $.cookie('typeIndex')
    if (typeIndex){
        $('.type-slider .type-item').eq(typeIndex).addClass('active')
    } else {
        $('.type-slider .type-item:first').addClass('active')
    }


    $('.type-item').click(function () {

        $.cookie('typeIndex', $(this).index(), {expires:3, path:'/'})
    })


    categoryBt = false
    $('#categoryBt').click(function () {
        categoryBt = !categoryBt

        categoryBt ? categoryViewShow() : categoryViewHide()

    })


    sortBt = false
    $('#sortBt').click(function () {

        sortBt = !sortBt

        sortBt ? sortViewShow() : sortViewHide()
    })


    $('.bounce-view').click(function () {
        sortBt = false
        sortViewHide()
        categoryBt = false
        categoryViewHide()
    })


    function categoryViewShow() {
        sortBt = false
        sortViewHide()
        $('.bounce-view.category-view').show()
        $('#categoryBt i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
    }
    function categoryViewHide() {
        $('.bounce-view.category-view').hide()
        $('#categoryBt i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top')
    }

    function sortViewShow() {
        categoryBt = false
        categoryViewHide()
        $('.bounce-view.sort-view').show()
        $('#sortBt i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
    }
    function sortViewHide() {
        $('.bounce-view.sort-view').hide()
        $('#sortBt i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top')
    }
})