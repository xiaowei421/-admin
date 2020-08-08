$(function() {
    /*
// 静态结构 》 ajax请求 》 分析数据 》 创建模板 》 调用模板引擎 》 填充到指定位置
//1所有文章类别
// 请求地址：/admin/category/list
// 请求方式：get
// 请求参数：无
function init() {
//发送ajax请求
$.ajax({
url: BigNew.category_list,
datatype: 'json',
success: function(err) {
//4 调用template方法渲染到固定元素tbody
$('tbody').html(template('usertemplate', err))
}
});
};
init();

//2，点击新增添加数据新增文章类别
// 请求地址：/admin/category/add
// 请求方式：post
// 请求参数：
$('#xinzengfenlei').on('click', function() {
//2.1显示模态框
$('#myModal').modal('show');
//4.2修改输入框默认值
$('.username>span').text('新增名称...');
$('.userhobby>span').text('新增类别...');
$('.modal-title').text('新增分类');
$('.btn-primary').text('新增');
});

//4，编辑文章类别
$('tbody').on('click', '#btn-compile', function() {
// 请求地址：/admin/category/edit
// 请求方式：post
// 请求参数：
// console.log($(this).data())
//4.1显示模态框
$('#myModal').modal('show');
// 4.2修改输入框默认值
$('.modal-title').text('修改分类')
$('#username').val($(this).data('name'))
$('#userhobby').val($(this).data('slug'))
$('.btn-primary').text('修改');
// 4.3 为了后期的编辑操作，因为编辑需要有id做为条件
$('#id').val($(this).data+('id'))
});


//注册点击事件
$('.btn-primary').on('click', function() {
// 判断点击类型，进行发送请求
if ($('.btn-primary').text() === '新增') {
const name = $("#username").val();
const slug = $("#userhobby").val();
request(BigNew.category_add, { name, slug })
} else if ($('.btn-primary').text() === '修改') {
const name = $("#username").val();
const slug = $("#userhobby").val();
const id = $("#id").val();
request(BigNew.category_edit, { id, name, slug })
}
});
//3 模态框隐藏清除文本
$('#myModal').on('hidden.bs.modal', function() {
$('#username').val('');
$('#userhobby').val('');
});


//5，删除文章类别
$('tbody').on('click', '.btn-danger', function() {
// 请求地址：/admin/category/delete
// 请求方式：post
// 请求参数：
// 5.1，获取id
const id = $(this).data('id');
//5.2 发送请求
request(BigNew.category_delete, { id })
});

//封装新增和修改请求,不同的给参数
function request(url, data) {
//发送ajax请求
$.ajax({
type: 'post',
url: url,
data: data,
datatype: 'json',
success: function(err) {
console.log(err);
if (err.code === 201 || err.code === 200 || err.code === 204) {
    alert(err.msg);
    $('#myModal').modal('hide');
    // 更新数据
    init();
}
},
error: function(err) {
alert(err.responseJSON.msg)
}
});
};
*/

    // 第二遍
    //1，所有文章类别
    // 请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无
    function init() {
        //发送请求1.1
        $.ajax({
            url: BigNew.category_list,
            datatype: 'json',
            success: function(err) {
                // console.log(err);
                //1.2 调用template方法
                $('tbody').html(template('usertemplate', err))
            }
        });
    };
    init()

    //2,点击新增添加数据新增文章类别
    // 请求地址：/admin/category/add
    // 请求方式：post
    // 请求参数：
    $('#xinzengfenlei').on('click', function() {
        // 2.1显示模态框
        $('#myModal').modal('show');
        // 2.2设置文本
        $('.modal-title').text('新增分类');
        $('#username').placeholder('新增名称...');
        $('#userhobby').placeholder('新增类别..');
        $('.btn-primary').text('新增');
    })

    //3，编辑文章类别
    $('tbody').on('click', '#btn-compile', function() {
        // 请求地址：/admin/category/edit
        // 请求方式：post
        // 请求参数 
        //使用自定义属性获取name，slug，id
        // console.log($(this).data()); //{id: 2, slug: "热爱旅行", name: "爱旅行"}
        // 3.1显示模态框
        $('#myModal').modal('show');
        // 3.2设置文本
        $('.modal-title').text('修改分类');
        $('#username').placeholder($(this).data('name'));
        $('#userhobby').placeholder($(this).data('slug'));
        $('.btn-primary').text('修改');
        //设置id方便后面需要调用的
        $('#id').val($(this).data('id'))

    });


    $('.btn-primary').on('click', function() {
        //判定当前点击的文本
        if ($('.btn-primary').text() === '新增') {
            //获取文本
            const name = $("#username").val();
            const slug = $("#userhobby").val();
            console.log(name, slug);
            //发送请求
            post(BigNew.category_add, { name, slug });
        } else if ($('.btn-primary').text() === '修改') {
            //获取文本
            const name = $("#username").val();
            const slug = $("#userhobby").val();
            const id = $("#id").val();
            //发送请求
            post(BigNew.category_edit, { id, name, slug });
        }
    });

    //4，删除文章类别
    $('tbody').on('click', '.btn-danger', function() {
        // 请求地址：/admin/category/delete
        // 请求方式：post
        // 请求参数：
        //  4.1获取id
        const id = $(this).data('id');
        console.log(id);
        //4.2发送请求
        post(BigNew.category_delete, { id });
    });

    //封装post请求
    function post(url, data) {
        //发送请求
        $.ajax({
            type: 'post',
            url: url,
            data: data,
            datatype: 'json',
            success: function(err) {
                alert(err.msg);
                // 隐藏模态框
                $('#myModal').modal('hide');
                //更新数据
                init();
            },
            error: function(err) {
                console.log(err);
                alert(err.responseJSON.msg);
            }
        });
    };

    //5，模态框隐藏清除文本
    $('#myModal').on('hidden.bs.modal', function() {
        $('#username').val('');
        $('#userhobby').val('');
    });
});

/*
    总结：在不跳转页面的情况下可以使用自定义属性存储值，在需要是在调用
    如果想要跳转页面，需要存储到本地
*/