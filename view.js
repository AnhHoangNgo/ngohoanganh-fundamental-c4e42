const view = {};
var slideShowIndex = 0;
const slideShows = document.getElementsByClassName('slideShow');
const dots = document.getElementsByClassName('dot');
view.setActiveScreen = (screenName) => {
    switch(screenName){
        // Trang chủ
        case'home':
        document.getElementById('page-container').innerHTML = components.home;
        break;

        //Trang nói về mô hình
        case'model':
        document.getElementById('page-container').innerHTML = components.model;
        slideShowIndex = 0;
        setInterval(()=>{view.slideShowImage()},2000);
        break;

        //Trang thương hiệu
        case'brand':
        document.getElementById('page-container').innerHTML = components.brand;
        break;

        //Trang lịch sử
        case'history':
        document.getElementById('page-container').innerHTML = components.history;
        break;

        //Trang tin tức
        case'news':
        document.getElementById('page-container').innerHTML = components.news;
        fetch('./new.json').then(res=>{return res.json()}).then((data)=>{
            data.forEach((elem)=>{
                if(elem.id === queryObjects.id){
                    console.log(elem.title);
                    const newsContainer = document.querySelector(".newsContainer");
                    newsContainer.innerHTML +=`
                    <div class="new">
                    <a href="?page=news&id=4n"> 
                    <img style = "width:100%" src="${elem.img.url} alt=""></a>
                    <div class="seeNew"> <h4>${elem.date}</h4> <a href="?page=news&id=3n">DISCOVER MORE</a></div>
                    <h4 class="title">${elem.title}</h4>
                    </div>
                    `
                    var queryObjects =  controller.setPage();
                    if(queryObjects.length > 1 & queryObjects.page === "news"){view.setActiveScreen('newPageShow')}
                    document.getElementById('page-container').innerHTML =`
                    <header class="headerPage">
                      <div class="titleNew"><h2>${elem.title}<h2><div>
                      <div class="slideShow slideShow1"><img class="imageShow" src="${elem.img.url}" alt=""></div>
                      <a href="#page-2"><span></span></a>
                      </header>
                      <main class="mainPage">
                      <div class="pageNow" > <a href="?page=home">Home</a> / <a href="?page=news">News</a> / <a href="?page=news&id=${elem.id}">${elem.title}</a></div>
                      </main>

                    `
                }
            })
        })
        ;
        break;
        
        //Trang bộ sưu tập
        case'album':
        document.getElementById('page-container').innerHTML = components.album;
        slideShowIndex=0;
        setInterval(()=>{view.slideShowImage()},2000);
        fetch('./imageLamborghini.json').then((res)=>{
            return res.json();
          }).then((data)=>{
            const imageLamborghini = [...data];
            console.log(imageLamborghini);
            var gallery = document.querySelector('#gallery');
            imageLamborghini.forEach((element)=>{
                console.log(element.url);
                gallery.innerHTML += `  
                <div class="gallery-item">
                <div class="content">
                <img src="${element.url}" alt="image Lamborghini">
                </div>
                 </div>`
                });
                var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
                var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
                var resizeAll = function () {
                    var altura = getVal(gallery, 'grid-auto-rows');
                    var gap = getVal(gallery, 'grid-row-gap');
                    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
                        var el = item;
                        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
                    });
                };
                gallery.querySelectorAll('img').forEach(function (item) {
                    item.classList.add('byebye');
                    if (item.complete) {
                        console.log(item.src);
                    }
                    else {
                        item.addEventListener('load', function () {
                            var altura = getVal(gallery, 'grid-auto-rows');
                            var gap = getVal(gallery, 'grid-row-gap');
                            var gitem = item.parentElement.parentElement;
                            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                            item.classList.remove('byebye');
                        });
                    }
                });
                window.addEventListener('resize', resizeAll);
                gallery.querySelectorAll('.gallery-item').forEach(function (item) {
                    item.addEventListener('click', function () {        
                        item.classList.toggle('full');        
                    });
                });
            })
            break;

        //Trang đăng kí nhận thông tin
        case'contact':
        document.getElementById('page-container').innerHTML = components.contact;
        break;
        case'newPageShow':
        document.getElementById('page-container').innerHTML = components.newPageShow;
        break;
    }
}
view.slideShowImage = function () {
        slideShowIndex++;
        if(slideShowIndex>slideShows.length){slideShowIndex=1};
        for(let i=0; i<slideShows.length; i++){
        slideShows[i].style.display ="none";
        dots[i].classList.remove('active');
    };
        slideShows[slideShowIndex-1].style.display="block";
        dots[slideShowIndex -1].classList.add('active');
    }