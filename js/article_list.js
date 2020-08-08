$(function() {



    //1,请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无
    // 返回数据：文章
    init();


    //2请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无
    // 返回数据：文章
    注意点使用下拉列表需要自定义
    $('#btnSearch').on('click', function() {
        init();
        $.ajax({
            url: BigNew.category_list,
            datatype: 'json',
            success: function(res) {
                if (res.code === 200) {
                    $('#selCategory').html(template('articleidtemplate', res));
                };
            }
        });
        return false
    });


    // 封装查询
    function init() {
        $.ajax({
            url: BigNew.article_query,
            data: { perpage: 10, page: 1, type: $('#selCategory').val(), state: $('#selStatus').val() },
            datatype: 'json',
            success: function(res) {
                if (res.code === 200) {
                    $('tbody').html(template('articletemplate', res.data));
                };
            }
        });
    };
});