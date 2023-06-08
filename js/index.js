$(window).scroll(function(){
    console.log($("#menu").offset().top)
    if($("#menu").offset().top > 120){
        $("#menu").addClass("bg-dark");
    }else{
        $("#menu").removeClass("bg-dark")
    }
})