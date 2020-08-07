$(function() {
    // 1、获取个人用户信息
    // 请求地址：/admin/user/info
    // 请求方式：get
    // 请求参数：无
    //发送ajax请求
    $.ajax({
        url: BigNew.user_info,
        datatype: 'json',
        // headers: { //获取在登录存储的token
        //     Authorization: localStorage.getItem('bigname_token')
        // },
        success: function(res) {

            if (res.code === 200) {
                $('.user_info>img').prop('src', res.data.userPic)
                $('.user_center_link>img').prop('src', res.data.userPic)
                $('.user_info span').text(`欢迎  ${res.data.nickname}`)
            };
        },
        // error: (err) => { //捕获登录异常数据
        //     if (err.statusText == "Forbidden") {
        //         alert('未登录，请先登录')
        //             // 让你去登陆
        //         location.href = './login.html'
        //     };
        // }
    });

    //2，点击左侧菜单切换功能
    $('.level01').on('click', function() {
        //2.1当前点击元素添加activeys，兄弟元素移除
        $(this).addClass('active').siblings().removeClass('active');
        // 2.2, 点击的当前元素下一个元素类为level02展示
        if ($(this).next().hasClass('level02')) {
            // 2.3 切换显示 / 隐藏level02
            $('.level02').slideToggle();
            // 2.4 箭头旋转
            $(this).find('b').toggleClass('rotate0');
        } else {
            // 2.5点击其他元素隐藏level02
            $('.level02').slideUp();
            // 2.6 箭头复位
            $('.level01').find('b').removeClass('rotate0');
        };
        // 2.8 清除active样式
        $('.level02>li').removeClass('active');

    });

    // 2.7 点击level02子元素添加activeys
    $('.level02>li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //3,点击退出清除token值并跳转到登录页面
    $('.logout').on('click', function() {
        localStorage.removeItem('bigname_token');
        window.location.href = './login.html';
    });
});