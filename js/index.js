
/// <reference types="../@types/jquery" />


$(".openIcon").on("click",function(){
    $(".open").css("left","0")
})
$(".close").on("click",function(){
    $(".open").css("left","-270px")
})
$(".accord h3").on("click",function(){
    $(this).next().slideToggle()
    $(".accord p").not( $(this).next()).slideUp()
})
$("textarea").on("keyup",function(){
    let length = $(this).val().length
    $("#num").text(
        100-length <= 0 ? "your available character finished ":100-length
    )
    
})

$(function (){
    "use strict"
    let counterDown = setInterval(function () {
        let counter =parseInt ($(`.count`).html());
        if(counter !== 0){
            $(".count").html(counter-1)
        }else{
            clearInterval(counterDown)
    
            $(".count").html("finished")
        }

    },1000)
})

