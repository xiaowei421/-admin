// 登陆
$(function() {

    // 用户登录
    // 请求地址：/admin/user/login
    // 请求方式：post
    //请求参数 username   password

    // 名言要想不秃头，后端需要什么，前端就给什么，后端给什么，前端用什么
    $('.input_sub').on('click', () => {
        //1，获取用户名和密码文本
        const username = $('.input_txt').val();
        const password = $('.input_pass').val();
        //2 发送ajax请求
        $.ajax({
            type: 'post',
            url: BigNew.user_login,
            data: {
                username,
                password
            },
            datatype: 'json',
            success: (res) => {
                if (res.code == 200) {
                    $('#myModal').modal('show');
                    $('#logininfo').text(res.msg);
                    // 获取token值并存储到本地存储
                    localStorage.setItem('bigname_token', res.token);
                    // 添加事件监听，当模态框消失之后才触发
                    $('#myModal').on('hidden.bs.modal', function(e) {
                        window.location.href = './index.html';
                    });
                } else {
                    $('#myModal').modal('show');
                    $('#logininfo').text(res.msg);
                };
            }
        });
    });
    $('#qieding').on('click', () => {
        $('#myModal').modal('hide');
    });
});