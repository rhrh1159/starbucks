//돋보기 버튼 제어
const searchEl = document.querySelector('.search');
const seacjInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    seacjInputEl.focus();
})

//포커스가 들어가면  .focused 추가 addEventListener(이벤트,함수)
seacjInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused'); //add추가
    seacjInputEl.setAttribute('placeholder','통합검색');
});

//포커스가 나가면  .focused 삭제 addEventListener(이벤트,함수)
seacjInputEl.addEventListener('blur',function(){ //blur로 가리고
    searchEl.classList.remove('focused'); //remove삭제
    seacjInputEl.setAttribute('placeholder','');
});

//------------------ 뱃지 제어 ------------------
const babgEl = document.querySelector('header .badges'); //변수에 닮아줌
const toTopEl = document.querySelector("#to-top");

/*
document => html 자체로 해석!! html안에 있는 걸 가르킬때 (html자식들을 찾으러갈때)
window => 브라우저창 으로 배치할때 전체적인 브라우저창 ! 탭을 눌러서 나오는거 
*/
/* 
lodash 설치 후
_.throttle(함수,시간)
*/
window.addEventListener('scroll', _.throttle(function () {

    if( window.scrollY > 500 ){
        // babgEl.style.display = 'none';
        //gsap문법 => gsap.to (요소, 지속시간초단위 , 옵션)
        gsap.to(babgEl,0.6,{
            opacity : 0,
            display : 'none'
        });
        gsap.to(toTopEl, 0.2, {
            x: 0,
        });

    }else{
        // babgEl.style.display = 'block';
        gsap.to(babgEl,0.6,{
            opacity : 1,
            display : 'block'
        });
        
        

    }

    

}, 300));
// ----------------main visual 순자적 등장---------
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl,index){
     //gsap문법 => gsap.to (요소, 지속시간초단위 , 옵션)
     gsap.to(fadeEl, 1,{
         delay : (index + 1) * 0.7, //0.7초후에 하나씩 등장하고 (for문처럼 한바뀌를 돈다) 1.4,2.1 ,2.8 초씩
         opacity: 1,

     })

});
// ----------------공지사항 swiper slide---------
const swiper = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay : true
  
  
  });
  // ----------------promotion swiper slide---------
  new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination :{
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides : true //1번 슬라이드가 가운데로 보이게 하는
  
});

//promoiton toggle-btn--------
const promotionEl = document.querySelector('.promotion'); //슬라이드 영역 요소 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion'); //슬라이드영역을 토글할 버튼 검색

//슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false;

//토글버튼을 클릭하면 
promotionToggleBtn.addEventListener('click', function(){
    //슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

//플로팅 이미지 제어----(움직이게 하는)----
function random(min, max){
    //toFixed
    return parseFloat((Math.random() * (max - min) + min).toFixed(2)); //복사 붙혀넣기 한 함수
}

function floatingObject (selector ,delay , size){

    gsap.to(selector, random(1.5,2.5),{
        y : size,
        repeat : -1, //몇 번 반복할지 설정, -1무한반복
        yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 재생
        ease : Power1.easeOut, //사이트에서 옵션 가져왔음 //https://greensock.com/docs/v2/Easing
        delay : random(0, delay), //무작위로 움직이게
    })
}
floatingObject('.floating1', 1 , 15);
floatingObject('.floating2', 0.5 , 15);
floatingObject('.floating3', 1.5 , 15);


new Swiper('.awards .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView: 5, //한번에 보여지는 슬라이드 개수
    spaceBetween: 30,
    navigation : {
        prevEl : ".awards .swiper-prev",
        nextEl : ".awards .swiper-next"
    }, 
  
  
  });

  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();

  //masgic scroll ------------
  const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
