var typingEffect = new Typed(".multitext", {
    strings: ["Student. ^1000", "Programmer. ^1000", "Developer. ^1000","Coder. ^1000"],
    loop: true,
    typespeed: 1,
    backspeed: 80,
    backDelay: 1600
})
$("window").addEventListner('scroll', reveal());
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight; 
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150; 
        if (revealtop < windowheight -revealpoint){
            reveals[i].classList.add('active');
        } 
        else{
             reveals[i].classList.remove('active'); 
            }
    }
}



