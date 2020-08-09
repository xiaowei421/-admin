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


    //2，时间列表
    jeDate("#indate", {
        format: "YYYY-MM-DD",
        isTime: false,
        theme: { bgcolor: "#D91600", pnColor: "yellow" },
        minDate: "2014-09-19 00:00:00"
    });

    //3，使用文本域插件，服务本编辑器
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
})