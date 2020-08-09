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

    //2,页码
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
    //3，删除评论
    // 请求地址：/admin/comment/delete
    // 请求方式：post
    // 请求参数：
    $('tbody').on('click', '.btn-delete', function() {
        //   获取id
        let id = $(this).data('id')
        refuse(BigNew.comment_delete, id)
    });

    //4，拒绝评论审核不通过
    // 请求地址：/admin/comment/reject
    // 请求方式：post
    // 请求参数：
    $('tbody').on('click', '.btn-refuse', function() {
        //   获取id
        let id = $(this).data('id')
        refuse(BigNew.comment_reject, id)
    });

    //5，通过评论审核通过
    // 请求地址：/admin/comment/pass
    // 请求方式：post
    // 请求参数：
    $('tbody').on('click', '.bth-ratify', function() {
        //   获取id
        let id = $(this).data('id')
        refuse(BigNew.comment_pass, id)
    });

    //封装拒绝和删除请求
    function refuse(url, id) {
        $.ajax({
            type: 'post',
            url: url,
            data: { id },
            datatype: 'json',
            success: function(res) {
                if (res.code) {
                    alert(res.msg);
                    init();
                };
            }
        });
    };
});