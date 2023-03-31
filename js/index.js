var myHeader = document.getElementById("header")

//console.log (document.getElementById("header"));
myHeader.onmouseover = function () {
    // console.log(this);
    // console.log(myHeader);
    this.classList.add("over");
    //this.style.backgroundColor = "white";

}
myHeader.onmouseout = function () {
    this.classList.remove("over");
    //console.log(this);
    //this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

//스크롤 이벤트
header.classList.add('show');
header.classList.add('hide');

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
        myHeader.style.top = "-100px";
    }
    else {
        myHeader.style.top = "0";

    }
});

//스크롤링

window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

//

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 3) return;
        page++;
    } else if(e.originalEvent.deltaY < -15) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    var scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.style.width = scrollPercentage + '%';
});

// 버튼 효과
document.getElementById("btn").onclick = function () {
    alert("지금부터 검사를 실시하겠습니다.");
};

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}
var button = document.getElementById('top');
button.addEventListener('click',scrollToTop);