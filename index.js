controller.loadCss('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
controller.loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
controller.loatScript('https://code.jquery.com/jquery-3.4.1.min.js')
.then(()=>{
    $(document).ready(function () {
        document.querySelector('.header').innerHTML = components.header;
        view.setActiveScreen('home');
        view.setActiveScreen(controller.setPage().page);
    $('.hm-menu').click(function(){
        $('.hm-menu span').toggleClass('active');
        $('header.header').toggleClass('active');
     });
      $('.page-menu a').click(function(){
          $('.hm-menu span').removeClass('active');
          $('header.header').removeClass('active');
      });
});
});
