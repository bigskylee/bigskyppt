document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    if (window.innerWidth >= 600) {
        // 비행기 날아가는 경로
        gsap.to('.paper', {
            duration: 6,
            motionPath: {
                path: [
                    { x: -900, y: -100 },
                    { x: -1100, y: -200 },
                    { x: -900, y: -280 },
                    { x: -800, y: -200 },
                    { x: -900, y: -180 },
                    { x: -1100, y: -190 },
                    { x: -1400, y: -200 },
                    { x: -2200, y: -250 },
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
    tl.to('.t14', { opacity: 1, duration: 0.1 }, '=0.6')
        .to('.t13', { opacity: 1, duration: 0.1 })
        .to('.t12', { opacity: 1, duration: 0.1 })
        .to('.t11', { opacity: 1, duration: 0.1 })
        .to('.t10', { opacity: 1, duration: 0.1 })
        .to('.t9', { opacity: 1, duration: 0.1 })
        .to('.t8', { opacity: 1, duration: 0.1 })
        .to('.t7', { opacity: 1, duration: 0.1 })
        .to('.t6', { opacity: 1, duration: 0.1 })
        .to('.t5', { opacity: 1, duration: 0.1 }, '=0.4')
        .to('.t4', { opacity: 1, duration: 0.1 })
        .to('.t3', { opacity: 1, duration: 0.1 })
        .to('.t2', { opacity: 1, duration: 0.1 })
        .to('.t1', { opacity: 1, duration: 0.1 })
        .to('.paper', { opacity: 0, duration: 0.1 })

    gsap.registerPlugin(ScrollTrigger)
    var stl = gsap.timeline({
        //about 표시 애니매이션
        scrollTrigger: {
            trigger: '.main1', //실행 기준
            start: '0% 80%', //시작 지점
            end: '0% 80%', //끝 지점
            markers: true, //개발가이드선
            toggleActions: 'play none none reset',
        },
        invalidateOnRefresh: true,
    })
    stl.to('.name', {
        opacity: 1,
        duration: 0.4,
    })
        .to('.maill', {
            opacity: 1,
            duration: 0.4,
        })
        .to('.barthday', {
            opacity: 1,
            duration: 0.4,
        })
        .to('.sapp', {
            opacity: 1,
            duration: 0.4,
        })

    let sections = gsap.utils.toArray('.section')
    // let scrollTween =
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none', // <-- IMPORTANT!
        scrollTrigger: {
            trigger: '.pojeat',
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: '+=3000',
        },
    })

    // gsap.to('.box', {
    //     y: -100,
    //     scrollTrigger: {
    //         trigger: '.box',
    //         start: 'left center',
    //         containerAnimation: scrollTween, // <-- NEW!!
    //     },
    // })
})

var swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
    },
})
