$(function () {
    $('.login').width(innerWidth)


    // $('#account input').blur(function () {
    //     if ($(this).val()=='') return
    //
    //     checkingAccount()
    // })
        //密码
    // $('#password input').blur(function () {
    //     if ($(this).val()=='') return
    //     checkingPassword()
    //
    // })

    $('#subButton').click(function () {
        console.log('登录')
       if (checkingPassword() && checkingAccount()){
            $('.login form').submit()
       }


    })

    function checkingAccount() {

        var reg = /^[a-zA-Z][a-zA-Z0-9]{4,15}$/
        var accountInput = $('#account input')

        if (reg.test(accountInput.val())){

            $('#account i').html('')
            $('#account').removeClass('has-error').addClass('has-success')
            $('#account span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            // $('#subButton').removeAttr('disabled')

            return true
        }
        else {
            $('#account i').html('字母开头，5-16位，只包含数字字母')
            $('#account').removeClass('has-success').addClass('has-error')
            $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            // $('#subButton').attr('disabled')

            return false
        }
    }
    function checkingPassword() {
         var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

        var passwordInput = $('#password input')

        if (reg.test(passwordInput.val())){
            $('#password i').html('')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            // $('#subButton').removeAttr('disabled')
            return true
        } else {
            $('#password i').html('密码有6-18位,必须包含大小写字母和数字的组合,可以使用特殊字符')
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            // $('#subButton').attr('disabled')
            return true
        }
    }

})