$(function() {
    //1,请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无
    // 返回数据：文章
    function shuoyou() {
        init(BigNew.article_query, { perpage: 10 })
    };
    shuoyou()
        // 封装查询
    function init(url, data) {
        $.ajax({
            url: url,
            data: data,
            datatype: 'json',
            success: function(res) {
                if (res.code === 200) {
                    $('tbody').html(template('articletemplate', res.data))
                };
            }
        });
    };
});