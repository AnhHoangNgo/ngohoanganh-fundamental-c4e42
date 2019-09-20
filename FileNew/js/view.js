const view = {};
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case'home':
        document.getElementById('page-container').innerHTML = components.home;
        break;
        case'model':
        document.getElementById('page-container').innerHTML = components.model;
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