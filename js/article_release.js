$(function() {
    //1,获取文章类别
    $.ajax({
        url: BigNew.category_list,
        datatype: 'json',
        success: function(res) {
            console.log(res);
            if (res.code === 200) {
                // 将获取的文章数据渲染到页面
                $('.category').html(template('articleidtemplate', res));
            };
        }
    });

    //2,文件预览
    $('#inputCover').on('change', function() {
        //2.1获取当前上传文件
        const files = this.files[0];
        //2.2将文件转换为url
        const url = URL.createObjectURL(files)
            //2.3将路径添加到img src
        $('.article_cover').attr('src', url);
    });

    //3，时间列表
    jeDate("#indate", {
        format: "YYYY-MM-DD",
        isTime: false,
        theme: { bgcolor: "#D91600", pnColor: "yellow" },
        minDate: "2014-09-19 00:00:00"
    });

    //4，使用文本域插件
    tinymce.init({
        selector: '#mytextarea', //容器，可使用css选择器
        language: 'zh_CN', //调用放在langs文件夹内的语言包
        toolbar: false, //隐藏工具栏
        menubar: false, //隐藏菜单栏
        // inline: true, //开启内联模式 不用开启
        plugins: [ // 添加插件
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        // 下面是添加工具条
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code"
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
        formdata.append('content', tinymce.activeEditor.getContent());
        //添加state已发布
        formdata.append('state', data);
        console.log(...formdata);
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: BigNew.article_publish,
            data: formdata,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(res) {
                console.log(res)
                if (res.code == 200) {
                    alert(res.msg)
                    返回页面
                    window.location.href = "./article_list.js";
                };
            }
        });
    }
});