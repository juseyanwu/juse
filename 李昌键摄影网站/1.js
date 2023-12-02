const ImgCotainer = document.querySelector('.ImgContainer')
const Imgs = document.querySelectorAll('.ImgContainer img')

const prebtn = document.querySelector('#pre-btn')
const nextbtn = document.querySelector('#next-btn')

const bonnerLi = document.querySelectorAll('.banner-control li')

const startColor = '#756f6f'
const endColor = 'white'
const logoColor = 'rgb(29, 29, 53)'
const logo2Color = 'white'
const hoverColor = '#3b3b3b'


console.log(bonnerLi);

let counter = 1

const size = Imgs[0].clientWidth
const hight = Imgs[0].clientHeight

ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
bonnerLi[0].style.backgroundColor = endColor

// 右按钮
nextbtn.addEventListener('click', () => {
    if (counter >= Imgs.length - 1) return // 溢出图为最后一张图时不再移动
    ImgCotainer.style.transition = 'transform 0.5s ease-in-out';

    if (counter <= Imgs.length - 3) {
        bonnerLi[counter - 1].style.backgroundColor = startColor
        bonnerLi[counter].style.backgroundColor = endColor
    }

    counter++;
    ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

// 左按钮
prebtn.addEventListener('click', () => {
    if (counter <= 0) return // 溢出图为第一张图时不再移动
    ImgCotainer.style.transition = 'transform 0.5s ease-in-out';

    if (counter >= 2) {
        bonnerLi[counter - 1].style.backgroundColor = startColor
        bonnerLi[counter - 2].style.backgroundColor = endColor
    }

    counter--;

    ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

// 无缝轮播
ImgCotainer.addEventListener('transitionend', () => {
    // 溢出图为最后一张图时移到最后
    if (Imgs[counter].id === 'lastClone') {
        ImgCotainer.style.transition = 'none' // 去掉过渡效果瞬间移动
        counter = Imgs.length - 2
        bonnerLi[0].style.backgroundColor = startColor
        bonnerLi[3].style.backgroundColor = endColor
        ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    // 溢出图为第一张图时移到最前
    else if (Imgs[counter].id === 'firstClone') {
        ImgCotainer.style.transition = 'none'
        counter = Imgs.length - counter
        bonnerLi[3].style.backgroundColor = startColor
        bonnerLi[0].style.backgroundColor = endColor
        ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

// 为 bonnerLi 中的每个元素添加点击事件
for (let i = 0; i < bonnerLi.length; i++) {
    bonnerLi[i].addEventListener('click', () => {
        // 更新 counter 的值
        counter = i + 1;

        // 更新 ImgCotainer 的 transform 属性
        ImgCotainer.style.transition = 'transform 0.5s ease-in-out';
        ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

        // 更新 bonnerLi 中的元素的背景颜色
        for (let j = 0; j < bonnerLi.length; j++) {
            bonnerLi[j].style.backgroundColor = startColor;
        }
        bonnerLi[i].style.backgroundColor = endColor;
    });
}


const logo = document.querySelector('.logo')
const li = document.querySelectorAll('.search li')
const video = document.querySelector('.video')
const aaas = document.querySelectorAll('.aaa')
const logoImg = document.querySelector('.logo img')
const header = document.querySelector('.header')

console.log(aaas);

window.addEventListener('scroll', function () {
    // 获取滚动距离
    var scrollDistance = window.scrollY;
    // 根据滚动距离切换类名
    if (scrollDistance > hight / 2) {
        // 当滚动距离大于 hight / 2 时，移除pre类，添加next类
        logo.classList.add('logo2');
        for (i = 0; i < li.length; i++) {
            li[i].classList.add('li2');
            // hover 变为logo2颜色
            aaas[i].style.backgroundColor = logo2Color
            // header 变为logo2颜色
            header.style.backgroundColor = logo2Color
        }
    } else {
        // 当滚动距离不大于 hight / 2 时，移除next类，添加pre类
        logo.classList.remove('logo2');
        for (i = 0; i < li.length; i++) {

            li[i].classList.remove('li2')
            // hover 变为logo颜色
            aaas[i].style.backgroundColor = logoColor
            // header 变为logo颜色
            header.style.backgroundColor = logoColor
        }
    }

});
window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;
    if (scrollDistance <   hight/2 ) {
        // aaas[0].style.display = 'none'
        aaas[0].style.backgroundColor = logoColor
    }
    else if (scrollDistance > hight / 2 && scrollDistance < 2 * hight - 200) {
        
        // aaas[0].style.display = 'flex';
        aaas[0].style.backgroundColor = hoverColor
        aaas[1].style.backgroundColor = logo2Color
    }
    else if (scrollDistance > 2 * hight - 200 && scrollDistance < 3 * hight - 200) {
        aaas[0].style.backgroundColor = logo2Color
        aaas[1].style.backgroundColor = hoverColor
        aaas[2].style.backgroundColor = logo2Color
    }
    else if (scrollDistance > 3 * hight - 200 && scrollDistance < 4 * hight - 200) {
        aaas[1].style.backgroundColor = logo2Color
        aaas[2].style.backgroundColor = hoverColor
        aaas[3].style.backgroundColor = logo2Color
    }
    else if (scrollDistance > 4 * hight - 200 && scrollDistance < 5 * hight - 200) {
        aaas[2].style.backgroundColor = logo2Color
        aaas[3].style.backgroundColor = hoverColor
    }
})

// video.addEventListener('click',()=>{
//     window.scrollTo({
//         top: hight,
//         behavior: 'smooth' // 使用 'smooth' 实现平滑滚动效果
//       });
// })

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        window.scrollTo({
            top: (i + 1) * hight,
            behavior: 'smooth' // 使用 'smooth' 实现平滑滚动效果
        })
    })
}

logoImg.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 使用 'smooth' 实现平滑滚动效果
    })
})


