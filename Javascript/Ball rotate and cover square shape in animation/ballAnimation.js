function callAnimation(){
    let div = document.getElementById('box');
    div.style.animationName = "make_top_Line_of_square";
    div.style.animationDuration = "3s"

    setTimeout(function(){
        let div = document.getElementById('box');
        div.style.animationName = "make_right_side_Line_of_square";
        div.style.animationDuration = "3s"

        setTimeout(function(){
        let div = document.getElementById('box');
        div.style.animationName = "make_bottom_Line_of_square";
        div.style.animationDuration = "3s"

            setTimeout(function(){

            let div = document.getElementById('box');
            div.style.animationName = "make_left_side_Line_of_square";
            div.style.animationDuration = "3s"
            },3000);
        },3000);
    },3000);
}