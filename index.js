controller.loadCss('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
controller.loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
controller.loatScript('https://code.jquery.com/jquery-3.4.1.min.js')
.then(()=>{
    $(document).ready(function () {
        view.setActiveScreen('home');
        controller.setLocation();
        console.log(location)
    $('.hm-menu').click(function(){
        $('.hm-menu span').toggleClass('active');
        $('header.header').toggleClass('active');
         $('header.header').removeClass('activex');
     });
      $('.page-menu a').click(function(){
          $('.hm-menu span').removeClass('active');
          $('header.header').removeClass('active');
          $('header.header').addClass('activex');
      });
     const arrInfoHistory =  controller.getDataAPI('./history.json');
      const arrImage = controller.getDataAPI('./imageLamborghini.json');
      arrImage.forEach(element => {
          window.location = element.url;
      });

});
});
