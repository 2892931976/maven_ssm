$(function () {

    /*****************************************************
     * 定义全局变量
     *****************************************************/

    /*****************************************************
     * 定义全局方法
     ****************************************************/

    /*****************************************************
     * 方法执行
     ****************************************************/

    /*****************************************************
     * 句柄
     ****************************************************/

    $('.button').on('click',function () {
        var userId = $('input').val();
        this.fn.ajaxRequest('/api/user/select',{userId:userId},function (data) {
            var dom =
                '<tr>' +
                '<td>'+data.userId+'</td>' +
                '<td>'+data.userName+'</td>' +
                '<td>'+data.userPassword+'</td>' +
                '</tr>';
            $('tbody').html(dom);
        },function (error) {
            alert(error);
        });
    }.bind(this));

});