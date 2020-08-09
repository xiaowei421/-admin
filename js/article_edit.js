$(function() {
    // 1,获取id?id=22,截取值
    let id = location.search.split('=')[1];
    //2,实现文章类别：发布时间：文章内容：，将发表文章的代码封装一个文件为commet

    //3，通过id获取文章数据
    // 请求地址：/admin/article/search
    // 请求方式：get
    // 请求参数：
    $.ajax({
        url: BigNew.article_search,
        data: { id },
        datatyle: 'json',
        success: function(res) {
            // 3.1将数据渲染到页面
            $('.title').val(res.data.title); //文章标题
            $('.article_cover').prop('src', res.data.cover); //封面图片
            $('.category').val(res.data.categoryId); //文章类别
            $('#indate').val(res.data.date); //发布时间
            $('#mytextarea').val(res.data.content); //发布内容
        }
    });

    //4，文件预览
    $('#inputCover').on('change', function() {
        //4.1,获取上传文件
        let mydata = this.files[0];
        //4.2,使用URL.createbojecturl将文件转为url格式
        let url = URL.createObjectURL(mydata);
        //4.3,将转换好的数据渲染到img
        $('.article_cover').attr('src', url);
    });

    //5，获取编辑内容实现修改
    $('.btn-edit').on('click', function(e) {
        //5.1,阻止标签默认行为
        e.preventDefault();
        //调用上传函数
        post('已发布');
    });
    $('.btn-draft').on('click', function(e) {
        //5.1,阻止标签默认行为
        e.preventDefault();
        //调用上传函数
        post('草稿');
    });

    //封装修改-草稿请求
    // 请求地址：/admin/article / edit
    // 请求方式：post
    // 请求参数：

    function post(state) {
        //使用FormData获取表单文本值，获取不到的，手动追加
        let formdata = new FormData($('#form')[0]);
        //追加获取不到的参数
        formdata.append('id', id);
        formdata.append('content', tinymce.activeEditor.getContent());
        formdata.append('state', state);
        //发送请求
        $.ajax({
            type: 'post',
            url: BigNew.article_edit,
            data: formdata,
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function(res) {
                if (res.code === 200) {
                    alert(res.msg);
                    //跳转到文章页面
                    window.location.href = './article_list.html';
                };
            }
        });
    };
});