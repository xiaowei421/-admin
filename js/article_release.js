$(function() {


    //2,文件预览
    $('#inputCover').on('change', function() {
        //2.1获取当前上传文件
        const files = this.files[0];
        //2.2将文件转换为url
        const url = URL.createObjectURL(files)
            //2.3将路径添加到img src
        $('.article_cover').attr('src', url);
    });


    //发布，草稿文章
    // 请求地址：/admin/article/publish
    // 请求方式：post
    // 请求参数：通过formData提交
    $('.btn-release').on('click', function(e) { //发布
        // 阻止标签默认行为
        e.preventDefault()
        uplodig('已发布')
    });
    $('.btn-draft').on('click', function(e) { //草稿
        // 阻止标签默认行为
        e.preventDefault()
        uplodig('草稿')
    });


    //封装已发布，草稿
    function uplodig(data) {
        //获取表单文本
        let formdata = new FormData($('#form')[0]);
        //手动在formdata中添加content参数
        // 因为文本域是隐藏的上面显示的是页中页iframe 所以需要使用tinymce.activeEditor.getContent() 富文本编辑器获取文本内容和设置文本内容
        formdata.append('content', tinymce.activeEditor.getContent());
        //添加state已发布
        formdata.append('state', data);
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: BigNew.article_publish,
            data: formdata,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(res) {
                if (res.code == 200) {
                    alert(res.msg)
                        // 返回页面
                    window.location.href = "./article_list.html";
                };
            }
        });
    };
});