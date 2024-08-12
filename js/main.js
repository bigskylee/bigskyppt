document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    gsap.to('.paper', {
        opacity: 1,
        duration: 0.5,
    })
    if (window.innerWidth >= 600) {
        // 비행기 날아가는 경로
        gsap.to('.paper', {
            duration: 6,

            motionPath: {
                path: [
                    { x: -850, y: -120 },
                    { x: -1050, y: -220 },
                    { x: -850, y: -300 },
                    { x: -750, y: -220 },
                    { x: -900, y: -200 },
                    { x: -1050, y: -210 },
                    { x: -1350, y: -220 },
                    { x: -2200, y: -270 },
                ],
                autoRotate: true,
                start: 0, // 시작 위치 (0%)
                end: 1, // 종료 위치 (100%)
                ease: 'linear', // 선형 이징
                invalidateOnRefresh: true,
            },
        })
    } else {
        gsap.to('.paper', {
            duration: 5,
            motionPath: {
                path: [
                    { x: -375, y: -25 },
                    { x: -400, y: -50 },
                    { x: -375, y: -75 },
                    { x: -350, y: -70 },
                    { x: -375, y: -55 },
                    { x: -400, y: -50 },
                    { x: -450, y: -55 },
                    { x: -700, y: -60 },
                ],
                autoRotate: true,
                start: 0,
                end: 1,
                ease: 'linear',
                invalidateOnRefresh: true,
            },
        })
    }
    var tl = gsap.timeline() //날아가는 비행기에 맞춰 글자 나오기
    tl.to('.t14', { opacity: 1, duration: 0.1 }, '=0.3')
        .to('.t13', { opacity: 1, duration: 0.1 })
        .to('.t12', { opacity: 1, duration: 0.1 })
        .to('.t11', { opacity: 1, duration: 0.1 })
        .to('.t10', { opacity: 1, duration: 0.1 })
        .to('.t9', { opacity: 1, duration: 0.1 })
        .to('.t8', { opacity: 1, duration: 0.1 })
        .to('.t7', { opacity: 1, duration: 0.1 })
        .to('.t6', { opacity: 1, duration: 0.1 })
        .to('.t5', { opacity: 1, duration: 0.1 }, '=0.6')
        .to('.t4', { opacity: 1, duration: 0.1 })
        .to('.t3', { opacity: 1, duration: 0.1 })
        .to('.t2', { opacity: 1, duration: 0.1 })
        .to('.t1', { opacity: 1, duration: 0.1 })
        .to('.t0', { opacity: 1, duration: 0.1 })
        .to('.paper', { opacity: 0, duration: 0.5 })

    gsap.registerPlugin(ScrollTrigger)
    var stl = gsap.timeline({
        //about 표시 애니매이션
        scrollTrigger: {
            trigger: '.main1', //실행 기준
            start: '0% 80%', //시작 지점
            end: '0% 80%', //끝 지점
            markers: false, //개발가이드선
            toggleActions: 'play none none reset',
        },
        invalidateOnRefresh: true,
    })
    if (window.innerWidth >= 1200) {
        stl.to('.name', {
            opacity: 1,
            duration: 0.4,
            width: '25vw',
        })
            .to('.maill', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
            .to('.barthday', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
            .to('.sapp', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
    } else if (window.innerWidth >= 600) {
        stl.to('.name', {
            opacity: 1,
            duration: 0.4,
            width: '25vw',
        })
            .to('.maill', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
            .to('.barthday', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
            .to('.sapp', {
                opacity: 1,
                duration: 0.4,
                width: '25vw',
            })
    } else {
        stl.to('.name', {
            opacity: 1,
            duration: 0.4,
            width: '20vw',
        })
            .to('.maill', {
                opacity: 1,
                duration: 0.4,
                width: '20vw',
            })
            .to('.barthday', {
                opacity: 1,
                duration: 0.4,
                width: '20vw',
            })
            .to('.sapp', {
                opacity: 1,
                duration: 0.4,
                width: '20vw',
            })
    }

    let sections = gsap.utils.toArray('.section')
    // let scrollTween =
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none', // <-- IMPORTANT!
        scrollTrigger: {
            trigger: '.poject',
            pin: true,
            scrub: 0.1,
            start: '0% 5%',
            end: '+=3000',
        },
    })
    var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    if (window.innerWidth >= 1200) {
        tl2.to('.guide', {
            duration: 1,
            opacity: 1,
        })
            .to('.cursor', { duration: 1, x: 30, y: 10 })
            .to('.guide', {
                duration: 1,
                opacity: 0,
            })
    } else if (window.innerWidth >= 600) {
        tl.to('.cursor', { duration: 1, x: 30, y: 10, repeat: -1 })
    } else {
        tl.to('.cursor', { duration: 1, x: 30, y: 10, repeat: -1 })
    }

    const topscrll = gsap.timeline({
        scrollTrigger: {
            trigger: '.forder', //실행 기준
            start: '0% 80%', //시작 지점
            end: '0% 80%', //끝 지점
            markers: false, //개발가이드선
            toggleActions: 'play none none reset',
        },
    })
    topscrll.to('.top')
})

var swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

var logo = document.getElementById('logo')
let colorChange

var color1
var color2
function randomcolor() {
    var color = Math.random() * 0xffffff
    color = parseInt(color)
    color = color.toString(16)
    return '#' + color
}
function startcolorChange() {
    logo.style.color = randomcolor()
    if (!colorChange) {
        colorChange = setInterval(function () {
            logo.style.color = randomcolor()
        }, 1300)
    }
}

function stopcolorChabge() {
    clearInterval(colorChange)
    colorChange = null
}
logo.addEventListener('mouseenter', () => {
    color1 = randomcolor()
    startcolorChange()
})
logo.addEventListener('mouseleave', () => {
    if (colorChange !== null) {
        clearInterval(colorChange)
        colorChange = null // Reset colorChange to allow restarting
    }
    logo.style.color = '#000'
})

document.getElementById('loticalvi').addEventListener('click', function () {
    var youtube = document.getElementById('youtube')
    youtube.src = 'https://www.youtube.com/embed/kNGLGrbu4ck?si=niJgIl32yGfM5Kf3'
})
document.getElementById('mmbookvi').addEventListener('click', function () {
    var youtube = document.getElementById('youtube')
    youtube.src = 'https://www.youtube.com/embed/lHCJjUZSnbI?si=jk3oyAi6m5Y4-47L'
})

document.getElementById('close').addEventListener('click', function () {
    console.log('close클릭')
    var tooltep = document.getElementById('tooltep')
    tooltep.style.display = 'none'
})

const videos = document.querySelectorAll('.video')

videos.forEach((video) => {
    video.addEventListener('click', function () {
        console.log('vedeo클릭')
        var tooltep = document.getElementById('tooltep')
        tooltep.style.display = 'flex'
    })
})
