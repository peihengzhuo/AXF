$(function () {
    $('.register').width(innerWidth)
        //账号
    $('#account input').blur(function () {
        if ($(this).val()=='') return

        var reg = /^[a-zA-Z][a-zA-Z0-9]{4,15}$/

        if (reg.test($(this).val())){

            $.get('/checkaccount/', {'account':$(this).val()},function (response) {
                console.log(response)
                if (response.status == 1){  // 可用
                    $('#account i').html('')
                    $('#account').removeClass('has-error').addClass('has-success')
                    $('#account span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                } else {    // 不可用
                    $('#account i').html(response.msg)
                    $('#account').removeClass('has-success').addClass('has-error')
                    $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                }
})

        } else {
            $('#account i').html('字母开头，5-16位，只包含数字字母')
            $('#account').removeClass('has-success').addClass('has-error')
            $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })
        //密码
    $('#password input').blur(function () {
        if ($(this).val()=='') return
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

        if (reg.test($(this).val())){
            $('#password i').html('')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#password i').html('密码有6-18位,必须包含大小写字母和数字的组合,可以使用特殊字符')
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

        // 确认密码
     $('#passwd input').blur(function () {
        if ($(this).val() =='') return
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

        if ($(this).val() == $('#password input').val()){
            $('#passwd i').html('')
            $('#passwd').removeClass('has-error').addClass('has-success')
            $('#passwd span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#passwd i').html('前后密码不一致')
            $('#passwd').removeClass('has-success').addClass('has-error')
            $('#passwd span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })
        // 用户名
    $('#name input').blur(function () {
        if ($(this).val() =='') return
        $('#name').removeClass('has-error').addClass('has-success')
        $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')

    })

    // 电话
    $('#phone input').blur(function () {
        if ($(this).val()=='') return
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

        if (reg.test($(this).val())){
            $('#phone i').html('')
            $('#phone').removeClass('has-error').addClass('has-success')
            $('#phone span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#phone i').html('请输入正确的手机号')
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 地址
    $('#addr input').blur(function () {
        if ($(this).val() =='') return
        $('#addr').removeClass('has-error').addClass('has-success')
        $('#addr span').removeClass('glyphicon-remove').addClass('glyphicon-ok')

    })
})
