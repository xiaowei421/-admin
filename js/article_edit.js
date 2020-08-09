$(function() {
    // 1,获取id?id=22,截取值
    let id = location.search.split('=')[1];
    console.log(id);
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
            console.log(res);
            // 3.1将数据渲染到页面
            $('.title').val(res.data.title);
            $('.article_cover').prop('src', res.data.cover);
            $('.category').val(res.data.categoryId)
            $('#indate').val(res.data.date);
            $('#mytextarea').val(res.data.content);
        }
    });
});