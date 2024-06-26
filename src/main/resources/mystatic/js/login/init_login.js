
$(function () {
    //1 注册，2忘记密码
    var from_which = 0;
//            !!!!!旋转操作无论如何根据都是根据开始位置！！！
    $('.enter_password').hide(0);
    $('.flip_to_register').bind('click', function () {
        $('.enter_password').show(500);
        css3Transform(document.getElementsByClassName('content')[0], "rotateY(-90deg)");
        $('.forget_password').hide(500);
    });
    $('.go_to_forget').bind('click', function () {
        $('.enter_password').show(500);
        css3Transform(document.getElementsByClassName('content')[0], "rotateY(90deg)");
        $('.register_page').hide(500);
    });

    $('.go_back_login_from_forget').bind('click', function () {
        $('.enter_password').hide(500);
        css3Transform(document.getElementsByClassName('content')[0], "rotateY(0deg)");
        $('.register_page').show(500);
    });
    $('a.go_back_login').bind('click', function () {
        $('.forget_password').show(500);
        css3Transform(document.getElementsByClassName('content')[0], "rotateY(0deg)");
        $('.enter_password').hide(500);
    });

    // 跳转到注册输入密码
    $('.go_enter_password_button').bind('click', function () {
        from_which = 1;
        var name = $('.input_nickname').val();
        var phone = $('.register_input_phone').val();
        var code = $('.register_input_vcode').val();
        var token = $('.token').val();
        if (name===''||phone===''||code===''){
            alert('Please fill in the information');
            return;
        }
        $.ajax({
            url: 'checkCode.do',
            dataType: 'JSON',
            type: 'post',
            data: {name: name, phone: phone, code: code,token:token},
            success: function (data) {
                var result = data.result;
                if (result === 0) {
                    alert('Invalid verify code');
                } else if (result === 1) {
                    // 成功后执行以下代码进行跳转
                    $('.forget_password').show(1000);
                    css3Transform(document.getElementsByClassName('content')[0], "rotateY(-180deg)");
                    $('.login').hide(1000);
                    $('.confirm_register_button').html('Register');
                }
            }
        });
    });
    //填写密码然后登录
    $('.confirm_register_button').click(function () {
        var password = $('.first_enter_password_input').val();
        var password2 = $('.confirm_password_input').val();
        var token = $('.token').val();
        if (password ===''||password2===''){
            alert('Please fill in the information');
            return;
        }

        if (password !== password2) {
            alert('Inconsistent password'); // enter different passwords
            return;
        }
        if (from_which === 1) {
            $.ajax({
                url: 'insertUser.do',
                dataType: 'JSON',
                type: 'post',
                data: {password: password, token: token},
                success: function (data) {
                    var result = data.result;
                    if (result === 1) {
                        window.location.href = '/';
                    } else if (result === 0) {
                        alert('An error has occurred 01, please try again');
                    } else {
                        alert('An error has occurred, please try again');
                    }
                }

            });
        } else {
            $.ajax({
                url: 'updatePassword.do',
                dataType: 'JSON',
                type: 'post',
                data: {password: password, token: token},
                success: function (data) {
                    var result = data.result;
                    if (result === 1) {
                        window.location.href = '/';
                    } else if (result === 0) {
                        alert('An error has occurred 0, please try again');
                    } else {
                        alert('An error has occurred, please try again');
                    }
                }

            });
        }
    });

// 跳转到重置密码输入
    $('.forget_password_button').bind('click', function () {
        from_which = 2;
        // var name = $('.input_nickname').val();
        var phone = $('.forget_input_phone').val();
        var code = $('.forget_input_vcode').val();
        var token = $('.token').val();
        if (phone===''||code===''){
            alert('Please fill in the information');
            return;
        }
        $.ajax({
            url: 'checkCode.do',
            dataType: 'JSON',
            type: 'post',
            data: {phone: phone, code: code, token:token},
            success: function (data) {
                var result = data.result;
                if (result === 0) {
                    alert('Invalid verify code');
                } else if (result === 1) {
                    // 成功后执行以下代码进行跳转
                    $('.register_page').show(1000);
                    css3Transform(document.getElementsByClassName('content')[0], "rotateY(180deg)");
                    $('.login').hide(1000);
                    $('.confirm_register_button').html('Reset password');
                }
            }
        });
    });

//修改密码成功

    $('.go_back_up').bind('click', function () {
        if (from_which == 1) {
            $('.login').show(1000);
            css3Transform(document.getElementsByClassName('content')[0], "rotateY(-90deg)");
            $('.forget_password').hide(1000);
        } else if (from_which == 2) {
            $('.login').show(1000);
            css3Transform(document.getElementsByClassName('content')[0], "rotateY(90deg)");
            $('.register_page').hide(1000);
        }
    });
    $('.login_icon').animate({width: '10%'}, 0);
    $('.password_icon').animate({width: '10%'}, 0);
    $('.input_username').bind('focus', function () {
        $('.login_icon').animate({width: '0%'}, 500);
    });
    $('.input_username').bind('blur', function () {
        $('.login_icon').animate({width: '10%'}, 500);
    });
    $('.input_password').bind('focus', function () {
        $('.password_icon').animate({width: '0%'}, 500);
    });
    $('.input_password').bind('blur', function () {
        $('.password_icon').animate({width: '10%'}, 500);
    });
    function css3Transform(element, value) {
        var arrPriex = ["o", "ms", "Moz", "webkit", ""];
        var length = arrPriex.length;
        for (var i = 0; i < length; i += 1) {
            element.style[arrPriex[i] + "Transform"]
                = value;
        }
    }

    $('.n_span').animate({width: '10%', height: '70%'}, 0);
    $('.register_phone_svg').animate({width: '10%'}, 0);
    $('.input_nickname').bind('focus', function () {
        $('.n_span').animate({width: '0%', height: '0%'}, 500);
        $('.n_span').html('');
    });
    $('.input_nickname').bind('blur', function () {
        $('.n_span').html('N');
        $('.n_span').animate({width: '10%', height: '70%'}, 500);
    });
    $('.register_input_phone').bind('focus', function () {
        $('.register_phone_svg').animate({width: '0%'}, 500);
    });
    $('.register_input_phone').bind('blur', function () {
        $('.register_phone_svg').animate({width: '10%'}, 500);
    });
    $('.first_enter_password_icon').animate({width: '10%'}, 0);
    $('.confirm_password_icon').animate({width: '10%'}, 0);
    $('.first_enter_password_input').bind('focus', function () {
        $('.first_enter_password_icon').animate({width: '0%'}, 500);
    });
    $('.first_enter_password_input').bind('blur', function () {
        $('.first_enter_password_icon').animate({width: '10%'}, 500);
    });
    $('.confirm_password_input').bind('focus', function () {
        $('.confirm_password_icon').animate({width: '0%'}, 500);
    });
    $('.confirm_password_input').bind('blur', function () {
        $('.confirm_password_icon').animate({width: '10%'}, 500);
    });

    $('.register_phone_svg').animate({width: '10%'}, 0);
    $('.forget_input_phone').bind('focus', function () {
        $('.register_phone_svg').animate({width: '0%'}, 500);
    });
    $('.forget_input_phone').bind('blur', function () {
        $('.register_phone_svg').animate({width: '10%'}, 500);
    });

    $('.login_button').click(function () {
        var login_name = $('.input_username').val();
        var login_password = $('.input_password').val();
        // var login_token = $('.token').val();
        if (login_name===''||login_password===''){
            alert('Please fill in the information');
            return;
        }
        $(this).submit();

    });

//注册获取验证码
    $('.get_vcode_button').click(function () {
        var phone = $('.register_input_phone').val();
        var token = $('.token').val();
        if (phone===''){
            alert('Please fill in the phone number');
            return;
        }
        $.ajax({
            url: 'sendCode.do',
            dataType: 'JSON',
            type: 'post',
            data: {phone: phone, token: token, action: 'register'},
            success: function (date) {
                var result = date.result;
                if (result == '1') {
                    // alert('Verification code sent successfully');
                    alert(date.data);
                } else if (result == '0') {
                    alert('Please fill in the valid phone number');
                } else if (result == '-1') {
                    alert('This phone number has been registered');
                } else {
                    alert('An error has occurred, please try again');
                }
            }

        });
    });
//忘记密码获得手机验证码
    $('.forget_get_vcode_button').click(function () {
        var phone = $('.forget_input_phone').val();
        var token = $('.token').val();
        if (phone===''){
            alert('Please fill in the phone number');
            return;
        }
        $.ajax({
            url: 'sendCode.do',
            dataType: 'JSON',
            type: 'post',
            data: {phone: phone, token: token, action: 'forget'},
            success: function (date) {
                var result = date.result;
                if (result == '1') {
                    // alert('已经发送到该手机，请查收');
                    alert(date.data);
                } else if (result == '0') {
                    alert('Please fill in the valid phone number');
                } else if (result == '-1') {
                    alert('User in this phone number does not exist');
                } else {
                    alert('An error has occurred, please try again');
                }
            }

        });
    });
});