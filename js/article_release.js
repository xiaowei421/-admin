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

    //发布文章
    $('.btn-release').on('click', function() {
        let formdata = new FormData($('#form')[0]);
        console.log(...formdata);
    });
});