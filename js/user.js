$(function() {
    // 1，用户个人中心
    // 获取用户详情
    // 请求地址：/admin/user/detail
    // 请求方式：get
    // 请求参数：无
    $.ajax({
        url: BigNew.user_detail,
        datatype: 'json',
        success: function(err) {
            if (err.code === 200) {
                $('#inputEmail1').val(err.data.username);
                $('#inputEmail2').val(err.data.nickname);
                $('#inputEmail3').val(err.data.email);
                $('#inputEmail4').val(err.data.password);
                $('.user_pic').attr('src', err.data.userPic);
            };
        }
    });

    //2，上传图片，文件预览
    $('#exampleInputFile').on('change', function() {
        //2.1获取当前选择文件
        const files = this.files[0];
        // 2.2将文件转为src路径
        const url = URL.createObjectURL(files);
        // 2.3将url路径赋值给img标签的src
        $('.user_pic').attr('src', url);
    });

    // 3, 实际上传，编辑用户信息
    // 请求地址： / admin / user / edit
    // 请求方式： post
    // 请求数据： 使用formData提交
    $('.btn-edit').on('click', function() {
        // 3.1,创建formdata对象，收集用户数据
        // FormData构造函数中的表单对象必须是原生的dom,可以给表参数，
        let formdata = new FormData($('#form')[0]);
        $.ajax({
            type: 'post', //类型
            url: BigNew.user_edit, //地址
            data: formdata, //参数
            datatype: 'json', //将数据转换成JSON字符串格式
            contentType: false, //告诉ajax不要对数据进行编码
            processData: false, //告诉ajax不要进行数据的处理
            success: function(err) {
                console.log(err);
                if (err.code === 200) {
                    // 必须以服务器的方式来打开，意味着从现在开始，不要直接打开本地文件，而是需要使用liveserver来打开
                    window.parent.location.reload();
                };
            }

        });
    });
});