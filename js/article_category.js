$(function() {
    // 静态结构 》 ajax请求 》 分析数据 》 创建模板 》 调用模板引擎 》 填充到指定位置
    //1所有文章类别
    // 请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无
    //2,发送ajax请求
    function init() {
        $.ajax({
            url: BigNew.category_list,
            datatype: 'json',
            success: function(err) {
                console.log(err);
                //4 调用template方法渲染到固定元素tbody
                $('tbody').html(template('usertemplate', err))
            }
        });
    };
    init();

    //5，点击新增添加数据新增文章类别
    // 请求地址：/admin/category/add
    // 请求方式：post
    // 请求参数：

    $('.btn-primary').on('click', function() {
        //获取输入框值
        const name = $('#username').val();
        const slug = $('#userhobby').val();
        //发送ajax请求
        $.ajax({
            type: 'post',
            url: BigNew.category_add,
            data: { name, slug },
            datatype: 'json',
            success: function(err) {
                console.log(err);
                if (err.code === 201) {
                    alert(err.msg);
                    $('#myModal').modal('hide');
                    // 更新数据
                    init();
                } else {
                    alert(JSON.parse(err.msg));
                }
            },
            error: function(err) {
                alert(err.msg);
            }
        });
    });

    //模态框隐藏清除文本
    $('#myModal').on('hidden.bs.modal', function() {
        $('#username').val('');
        $('#userhobby').val('');
    });
});