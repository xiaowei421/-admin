$(function() {
    console.log(1);
    //1,获取输入框值
    $('.btn-edit').on('click', function() {
        let mydata = new FormData($('#form')[0]);
        console.log(mydata);
        console.log(1);
    })
})