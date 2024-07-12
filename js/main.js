document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    if (window.innerWidth >= 1024) {
        gsap.to('.paper', {
            duration: 5, // 애니메이션 지속 시간 (5초)
            motionPath: {
                path: [
                    { x: -700, y: -70 },
                    { x: -900, y: -160 },
                    { x: -700, y: -240 },
                    { x: -600, y: -160 },
                    { x: -700, y: -120 },
                    { x: -900, y: -150 },
                    { x: -1200, y: -180 },
                    { x: -2000, y: -250 },
                ], // 이동 경로
                autoRotate: true, // 자동 회전
                start: 0, // 시작 위치 (0%)
                end: 1, // 종료 위치 (100%)
                ease: 'linear', // 선형 이징
            },
        })
    } else {
        gsap.to('.paper', {
            duration: 5, // 애니메이션 지속 시간 (5초)
            motionPath: {
                path: [
                    { x: -175, y: -25 },
                    { x: -200, y: -50 },
                    { x: -175, y: -75 },
                    { x: -150, y: -70 },
                    { x: -175, y: -55 },
                    { x: -200, y: -50 },
                    { x: -250, y: -55 },
                    { x: -400, y: -60 },
                ], // 이동 경로
                autoRotate: true, // 자동 회전
                start: 0, // 시작 위치 (0%)
                end: 1, // 종료 위치 (100%)
                ease: 'linear', // 선형 이징
            },
        })
    }
    var tl = gsap.timeline()
    tl.to('.t7', { opacity: 1, duration: 0.2 }, '=0.4')
        .to('.t6', { opacity: 1, duration: 0.2 })
        .to('.t5', { opacity: 1, duration: 0.2 })
        .to('.t4', { opacity: 1, duration: 0.2 })
        .to('.t3', { opacity: 1, duration: 0.2 })
        .to('.t2', { opacity: 1, duration: 0.2 }, '=0.8')
        .to('.t1', { opacity: 1, duration: 0.2 })
        .to('.paper', { opacity: 0, duration: 0.2 })
})
