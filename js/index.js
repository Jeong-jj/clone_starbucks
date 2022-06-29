
// var depth1Li = document.querySelectorAll('.company-info .depth1>li')
// for (let i in depth1Li) {
//     depth1Li[i].firstElementChild.addEventListener('click', function(e) {    // firstElementChild로 <a>를 지정, 이곳에 이벤트 부여
//         e.preventDefault()  // return false를 먹이려했는데 여기선 안먹음..

//     //--------------------별도의 주석처리부분
//         // this.nextElementSibling.style.display = "block"   // <a> 클릭시 다음 형제요소인 depth2나타남
        
//     // 클릭하면 보이고, 다시 클릭하면 안보이게 효과주기
//         // var disp = this.nextElementSibling.style.display
//         // if (disp !== "block") {                              // 만약 disp값이 block이 아니면~
//         //     this.nextElementSibling.style.display = "block"  // block을 부여
//         // } else {
//         //     this.nextElementSibling.style.display = "none"   // block이면 none부여
//         // }

//         // depth1Li[i].className = "on"   // for-in문에 의해 click시 class를 부여하여 css가 작동하도록 해서 이벤트 발생
//     //---------------------별도의 주석처리부분 끝

//         var licname = depth1Li[i].className
//         if (licname !== "on") {
//             depth1Li[i].className = "on"
//         }
//         else {
//             depth1Li[i].className = ""
//         }
//       // 나는 depth1Li[i].className 대신에 licname을 쓰면 안되나 하고 생각함
//       // - 질문 후 답변: licname은 변수이기 때문에 들어있는 값은 "on" or ""이다.
//       // - 즉, 변수선언은 그 값을 불러오는 것 뿐이기 때문에 depth[i].className과 같이 작성된다는 뜻이 아니다!
//     })
// }


// 위에 js로 길게 풀었던 내용을 jQuery를 이용하면 아래와 같이 줄여쓰기가 가능
var lia = $('.company-info .depth1 > li > a')
lia.on('click', function(e) {         // lia앞에 $를 붙이면 js와 jQuery간의 변수가 구분됨 = $lia
    e.preventDefault()
    // $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')

// toggleClass/removeClass에 의해 메뉴를 나타나게 하는 대신 slideToggle/Up을 이용
    // css에서 li.on .depth2 {display:block}는 주석처리(toggleClass를 안 사용하니까 필요없음)
    $(this).next().stop().slideToggle()                      // = toggleClass같은 효과를 표현(같은 메소드라는 뜻은 아님)
    $(this).parent().siblings().find('.depth2').slideUp()    // = removeClass같은 효과를 표현(같은 메소드라는 뜻은 아님)
})