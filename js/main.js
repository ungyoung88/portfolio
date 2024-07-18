$(function () {
    ////////   gotop 버튼   ///////
    // 윈도우 300px 스크롤하면 gotop 보이기
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    // gotop을 클릭하면 이로 올라가도록 설정
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0',
        }, 1000)
    })


    //--------- ad-popup --------
    $('.ad .box1 button').click(function () {
        $('.popupbox1').show()
        $('body').addClass('on')
    })
    $('.ad .box2 button').click(function () {
        $('.popupbox2').show()
        $('body').addClass('on')

    })
    $('.ad .box3 button').click(function () {
        $('.popupbox3').show()
        $('body').addClass('on')

    })

    $('.popupbox1,  .popupbox2, .popupbox3').click(function () {
        $(this).hide()
        $('body').removeClass('on')
    })


    //--------- etc-popup --------
    $('.etc .etcbox1 button').click(function () {
        $('.etcpopup1').show()

    })

    $('.etcpopup1').click(function () {
        $(this).hide()
        // $('body').removeClass('on')
    })


    const spanE1 = document.querySelector('.main .name span')
    const txtarr = ['UX&UI DESIGNER EUNEYEONG KIM']
    let index = 0;
    let currentTxt = txtarr[index].split('')

    // write 
    function writeTxt() {
        spanE1.textContent += currentTxt.shift()
        if (currentTxt.length !== 0) {
            // 배열 길이가 0이 아니면 출력해야하는 단어가 남아있다.
            setTimeout(writeTxt, Math.floor(Math.random() * 200))
        } else {
            // 배열 길이가 0이면 배열 안에있는 모든 텍스트가 전부 화면에 출력
            currentTxt = spanE1.textContent.split('')
            setTimeout(deleteTxt, 3000)
        }
    }

        // delete
        function deleteTxt(){
            currentTxt.pop()
            spanE1.textContent = currentTxt.join('')
            if(currentTxt.length !==0){
                setTimeout(deleteTxt, Math.floor(Math.random() * 100)) 
            }else{
                index = (index + 1) % txtarr.length;
                currentTxt = txtarr[index].split('')
                writeTxt()
            }
        }

    writeTxt()


// move (스크롤 이동)

const animationMove = function(selector){
    // selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetE1 = document.querySelector(selector)
    // 현재 브라우저의 스크롤 정보 (y값)
    const bY = window.scrollY 
    // 이동할 대상의 위치(y값)
    const targetScrollY = targetE1.getBoundingClientRect().top + bY 
    // getBounding ~~ : 요소의 크기와 뷰포트에 대한 상대적인 위치정보 제공
    // 스크롤 이동
    window.scrollTo({top : targetScrollY, behavior: 'smooth'})
}

// 스크롤 이벤트 연결
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length; i++ ){
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target;
        animationMove(target)
    })
}

})()