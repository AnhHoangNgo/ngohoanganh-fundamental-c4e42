const view = {};
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case'home':
        document.getElementById('page-container').innerHTML = components.home;
        break;
        case'model':
        document.getElementById('page-container').innerHTML = components.model;
        const slideShows = document.getElementsByClassName('slideShow');
        const dots = document.getElementsByClassName('dot')
        var slideShowIndex = 0;
        slideShowImage();
        function slideShowImage(){
        slideShowIndex++;
        if(slideShowIndex>slideShows.length){slideShowIndex=1};
        for(let i=0; i<slideShows.length; i++){
        slideShows[i].style.display ="none";
        dots[i].classList.remove('active');
    };
    slideShows[slideShowIndex-1].style.display="block";
    dots[slideShowIndex -1].classList.add('active');
    setTimeout(slideShowImage,2000);
}
        break;
        case'brand':
        document.getElementById('page-container').innerHTML = components.brand;
        break;
        case'history':
        document.getElementById('page-container').innerHTML = components.history;
        break;
        case'new':
        document.getElementById('page-container').innerHTML = components.new;
        break;
        case'album':
        document.getElementById('page-container').innerHTML = components.album;
        break;
        case'contact':
        document.getElementById('page-container').innerHTML = components.contact;
        break;
    }
}