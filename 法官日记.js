$(window).load(function () {
    lastNum = sessionStorage.getItem("key");
    console.log(JSON.parse(lastNum));
    roles = JSON.parse(lastNum);
    for (i = 0; i < roles.length; i++) {       
        $('.content').append("<div class='box'><div class='box1'></div ><div class='box2'></div></div>");   
        $('.box2').eq(i).html(i + 1 + "号");
        if (roles[i]==1) {
            $('.box1').eq(i).html("杀手")
        } else if (roles[i] == 0){
            $('.box1').eq(i).html("平民")
    }
    }
});
$('.footer').click(function () {
    window.location.href = "法官台本.html"
})