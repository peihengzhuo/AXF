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

    //购物车
    $('.bt-wrapper .glyphicon-minus').hide()
    $('.bt-wrapper .num').hide()

    $('.bt-wrapper .num').each(function () {
        var num = parseInt($(this).html())
        if (num){
            $(this).show()
            $(this).prev().show()
        }
    })

    // +
    $('.bt-wrapper .glyphicon-plus').click(function () {

        var goodsid = $(this).attr('goodsid')
        var $that = $(this)

        $.get('/addcart/',{'goodsid':goodsid},function (response) {
            console.log(response)

            if (response.status == -1){
                window.open('/login/', target = "_self")
            }else if (response.status == 1){
                $that.prev().show().html(response.number)
                $that.prev().prev().show()
            }

        })
    })

    // -

    $('.bt-wrapper .glyphicon-minus').click(function () {
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)

        $.get('/subcart/',{'goodsid':goodsid}, function (response) {
            console.log(response)
            if (response.status == 1){
                var number = response.number
                if (number > 0){
                    $that.next().html(number)
                } else {
                    $that.next().hide()
                    $that.hide()
                }
            }
        })
    })
})