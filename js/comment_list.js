$(function() {
    let page = 1 // 当前页码
    let perpage = 6 // 每页显示的数量

    //1,获取数据文章评论搜索
    // 请求地址：/admin/comment/search
    // 请求方式：get
    // 请求参数：
    function init() {
        $.ajax({
            url: BigNew.comment_list,
            data: {
                perpage,
                page
            },
            datatype: 'json',
            success: function(res) {
                if (res.code === 200) {
                    //将数据渲染到页面
                    $('tbody').html(template('commenttemplate', res.data))
                    yema(res.data.totalPage)
                };
            }
        });
    };
    init();


    function yema(tole) {
        $(".pagination").bootstrapPaginator({
            //3.1设置版本号
            bootstrapMajorVersion: 3,
            // 3.2显示第几页
            currentPage: page,
            // 3.3总页数
            totalPages: tole,
            //3.4当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function(event, originalEvent, type, cpage) {
                // console.log(cpage);
                //3.5设置显示页为当前点击页码
                page = cpage;
                init();
            }
        });
    };
});