const components = {};
components.header =`
<div class="container">
<div class="left">
    <a href="?page=home" class="logo"><img src="logo.png" alt="logo"></a>
    <div class="hm-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
<div class="right">
    <nav class="page-menu">
        <ul>
            <li><a href="?page=home">Introduction</a></li>
            <li><a href="?page=model">Model</a></li>
            <li><a href="?page=brand">Brand</a></li>
            <li><a href="?page=history">History</a></li>
            <li><a href="?page=news">News</a></li>
            <li><a href="?page=album">Album</a></li>
            <li><a href="?page=contact">contact</a></li>
        </ul>
    </nav>
</div>
</div>
`
components.home=`
<main class="mainPage mainHomePage">
<div class="ct" id="t1">
  <div class="ct" id="t2">
    <div class="ct" id="t3">
      <div class="ct" id="t4">
         <div class="ct" id="t5">
          <ul id="menu">
            <a href="#t1"><li class="icon fa fa-bolt" id="uno"></li></a>
            <a href="#t2"><li class="icon fa fa-keyboard-o" id="dos"></li></a>
            <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li></a>
            <a href="#t4"><li class="icon fa fa-dribbble" id="cuatro"></li></a>
            <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li></a>
          </ul>
          <div class="homePage" id="p1">
          <header class="headerPage">
          <h1 class="titlePageHome">ALL IN LAMBORGHINI CAR WORLD</h1>
          <div class="slideShow">
          <video style="width:100%; height:100%" loop autoplay>
          <source src="LAMBORGHINI AVENTADOR LP 700-4. A RELENTLESS FORCE.mp4" type="video/mp4">
          </video>
          </div>
          <a style ="display:none" id="scrollDown" ><span></span></a>
          </header>
          </div>
          <div class="homePage" id="p2">
          <header class="headerPage">
          <h1 class="titlePageHome">MOST MODERN</h1>
          <div class="slideShow">
          <video style="width:100%; height:100%" loop autoplay muted>
          <source src="LAMBORGHINI AVENTADOR LP 700-4. A RELENTLESS FORCE.mp4" type="video/mp4">
          </video>
          </div>
          <a style ="display:none" id="scrollDown" ><span></span></a>
          </header>
          </div>  
          <div class="homePage" id="p3">
          <header class="headerPage">
          <h1 class="titlePageHome">PERFECT AND BEAUTIFUL</h1>
          <div class="slideShow">
          <video style="width:100%; height:100%" loop autoplay muted>
          <source src="LAMBORGHINI AVENTADOR LP 700-4. A RELENTLESS FORCE.mp4" type="video/mp4">
          </video>
          </div>
          <a style ="display:none" id="scrollDown" ><span></span></a>
          </header>
          </div>
          <div class="homePage" id="p4">
          <header class="headerPage">
          <h1 class="titlePageHome">FASTEST</h1>
          <div class="slideShow">
          <video style="width:100%; height:100%" loop autoplay muted>
          <source src="LAMBORGHINI AVENTADOR LP 700-4. A RELENTLESS FORCE.mp4" type="video/mp4">
          </video>
          </div>
          <a style ="display:none" id="scrollDown" ><span></span></a>
          </header>
          </div> 
          <div class="homePage" id="p5">
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>



</main>
     
`;
components.model=`
<header class="headerPage">
          <h1 class="title">LAMBORGHINI </br> MODEL</h1>
          <div class="slideShow"><img class="imageShow" src="lamborghini-forsennato-concept.jpg" alt=""></div>
          <div class="slideShow"><img class="imageShow" src="lamborghini-sian-roadster-rendering.jpg" alt=""></div>
          <div class="slideShow"><img class="imageShow" src="D1ZJbigX0AAkTL9.jpg" alt=""></div>
          <div class="slideShow"><img class="imageShow" src="lamborghini-aventador-svj-roadster-i.jpg" alt=""></div>
          <div class="dot-container">
             <span  class="dot"></span>
             <span  class="dot"></span>
             <span  class="dot"></span>
             <span  class="dot"></span>
          </div>
          <a id="scrollDown" ><span></span></a>
     </header>
     <main class="mainPage">
     <div class="pageNow" > <a href="?page=home">Home</a> / <a href="?page=model">Models</a></div>
     <div class="model">
     <img class="logo" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-models/urus/Urus-logo-2.png">
     <p>From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born.
      More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the 
      latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control
       under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology
        like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive.
         Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models. </p>
      <div class="imageAboutCar">
      <img style=" width:100%" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-models/urus/car-urus.png">
      </div>
     </div>
     <div class="model">
     <img class="logo" src="https://www.lamborghini.com/sites/it-en/files/models_gateway/logo-huracan.png">
     <p>From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born. 
     More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the 
     latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control
      under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology
       like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive.
        Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models. </p>
        <div class="imageAboutCar">
        <img style=" width:100%" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/evo-slider/model/Huracan%20Spyder_scontorno.png">
        </div>
       </div>
     <div class="model">
     <img class="logo" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/aventador/logo-aventador.png">
     <p>The Aventador has been created to anticipate the future, as demonstrated by the use of innovative technology,
      including a V12 engine and the extensive use of carbon fiber.
     The authentic design masterpieces together stark dynamism with aggression to produce a cutting edge carbon fiber
      monocoque. The interior of the Aventador combines high-level technology and luxury equipment with premium-quality 
      materials, skilfully crafted with the expertise characteristic of the finest Italian traditions. A supercar family
       that has already become a legend in its own right. Discover technical specifications, dimensions, performance, and 
       the detailed features of all the new Lamborghini Aventador models.</p>
       <div class="imageAboutCar">
       <img style=" width:100%" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png">
       </div>
     </div>
     <footer class="footer">
        <div class="logoFooter"><a href="?page=home"><img style="width:150px" src="lamborghini-aventador-sports-car-luxury-vehicle-lamborghini.jpg" alt="logo"></a></div>
        <div class="leftFooter">
        <div class="menuBar">
          <ul>
            <li><a href="?page=home">Home</a></li>
            <li><a href="?page=model">model</a></li>
            <li><a href="?page=brand">Brand</a></li>
            <li><a href="?page=history">History</a></li>
            <li><a href="?page=news">News</a></li>
            <li><a href="?page=album">Album</a></li>
            <li><a href="?page=contact">Contact</a></li>
          </ul>
        </div>
        <div class="menuConect">
          <ul>
            <li><a href=""><i class="fa fa-facebook"></i></a></li>
            <li><a href=""><i class="fa fa-envelope"></i></a></li>
            <li><a href=""><i class="fa fa-twitter-square"></i></a></li>
            <li><a href=""><i class="fa fa-instagram"></i></a></li>
            <li><a href=""><i class="fa fa-youtube-square"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="rightFooter">
        <h3>Here from us</h3>
        <div class="inputEmail">
        <input type="email" placeholder="Email">
        <button class="btn">Subserice</button>
      </div>
      </div>
      </footer>
     </main>
     
`;
components.brand=`
<header class="headerPage">
<h1 class="title">LAMBORGHINI  </br> BRAND</h1>
<div class="slideShow slideShow1"><img class="imageShow" src="lamborghini-aventador-blue-1.jpg" alt=""></div>
<a id="scrollDown" ><span></span></a>
</header>
<main class="mainPage">
     <div class="pageNow" > <a href="?page=home">Home</a> / <a href="?page=brand">Brand</a></div>

</main>
`;
components.history=`
<header class="headerPage">
<h1 class="title">LAMBORGHINI  </br> HISTORY</h1>
<div class="slideShow slideShow1"><img class="imageShow" src="lamborghini-aventador-blue-1.jpg" alt=""></div>
<a id="scrollDown" ><span></span></a>
</header>
<main class="mainPage">
     <div class="pageNow" > <a href="?page=home">Home</a> / <a href="?page=history">History</a></div>
</main>
`;
components.news=`
<main class="mainPage">
<div class="pageNow" id="newsPage"> <a href="?page=home">Home</a> / <a href="?page=news">News</a></div>
<h1>NEWS <br> LAMBORGHINI</h1>
<div class="newsContainer">
</div>
</div>
<div class="btn-container"><button id="seeMoreButton">See more</button> <button id="scrollTop"><i class="fa fa-arrow-up"></i></button></div>
<footer class="footer">
        <div class="logoFooter"><a href="?page=home"><img style="width:150px" src="lamborghini-aventador-sports-car-luxury-vehicle-lamborghini.jpg" alt="logo"></a></div>
        <div class="leftFooter">
        <div class="menuBar">
          <ul>
            <li><a href="?page=home">Home</a></li>
            <li><a href="?page=model">model</a></li>
            <li><a href="?page=brand">Brand</a></li>
            <li><a href="?page=history">History</a></li>
            <li><a href="?page=news">News</a></li>
            <li><a href="?page=album">Album</a></li>
            <li><a href="?page=contact">Contact</a></li>
          </ul>
        </div>
        <div class="menuConect">
          <ul>
            <li><a href=""><i class="fa fa-facebook"></i></a></li>
            <li><a href=""><i class="fa fa-envelope"></i></a></li>
            <li><a href=""><i class="fa fa-twitter-square"></i></a></li>
            <li><a href=""><i class="fa fa-instagram"></i></a></li>
            <li><a href=""><i class="fa fa-youtube-square"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="rightFooter">
        <h3>Here from us</h3>
        <div class="inputEmail">
        <input type="email" placeholder="Email">
        <button class="btn">Subserice</button>
      </div>
      </div>
      </footer>
</main>
`
components.album=`
<header class="headerPage">
<h1 class="title">LAMBORGHINI </br> ALBUM</h1>
<div class="slideShow slideShow1"><img class="imageShow" src="aventador_mk2_render.jpg" alt=""></div>
<div class="slideShow"><img class="imageShow" src="lamborghini-sian-roadster-rendering.jpg" alt=""></div>
<div class="slideShow"><img class="imageShow" src="D1ZJbigX0AAkTL9.jpg" alt=""></div>
<div class="slideShow"><img class="imageShow" src="lamborghini-aventador-svj-roadster-i.jpg" alt=""></div>
<div class="dot-container">
  <span  class="dot"></span>
  <span  class="dot"></span>
  <span  class="dot"></span>
  <span  class="dot"></span>
</div>
<a id="scrollDown" ><span></span></a>
</header>
<main class="mainPage">
<div class="pageNow"> <a href="?page=home" >Home</a> / <a href="?page=album">Album</a></div>
<div>
<h1>Image garllery</h1>
<div class="gallery" id="gallery">
</div>
<div class="btn-container"><button id="seeMoreButton">See more</button> <button id="scrollTop"><i class="fa fa-arrow-up"></i></button></div>
</div>
<footer class="footer">
        <div class="logoFooter"><a href="?page=home"><img style="width:150px" src="lamborghini-aventador-sports-car-luxury-vehicle-lamborghini.jpg" alt="logo"></a></div>
        <div class="leftFooter">
        <div class="menuBar">
          <ul>
            <li><a href="?page=home">Home</a></li>
            <li><a href="?page=model">model</a></li>
            <li><a href="?page=brand">Brand</a></li>
            <li><a href="?page=history">History</a></li>
            <li><a href="?page=news">News</a></li>
            <li><a href="?page=album">Album</a></li>
            <li><a href="?page=contact">Contact</a></li>
          </ul>
        </div>
        <div class="menuConect">
          <ul>
            <li><a href=""><i class="fa fa-facebook"></i></a></li>
            <li><a href=""><i class="fa fa-envelope"></i></a></li>
            <li><a href=""><i class="fa fa-twitter-square"></i></a></li>
            <li><a href=""><i class="fa fa-instagram"></i></a></li>
            <li><a href=""><i class="fa fa-youtube-square"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="rightFooter">
        <h3>Here from us</h3>
        <div class="inputEmail">
        <input type="email" placeholder="Email">
        <button class="btn">Subserice</button>
      </div>
      </div>
      </footer></main>
`;
components.contact=`
<main class="contactPage">
<div class="contactPage-container">
      <h1>CONTACT US</h1>
      <form  id="contactForm" method="POST">
      <div class="input-wrapper nameInput">
        <label for="name">Name*</label>
        <input  name ="name" id ="name" type="text">
        <div class="error" id="error-name"></div>
      </div>
      <div class="input-wrapper addressInput">
        <label for="email">Email*</label>
          <input name="email" id ="email" type="email">
          <div class="error" id="error-email"></div>
        </div>
    <div class=" input-wrapper messageInput">
      <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <div class="error error-message"></div>
    </div>
    <div class="btn-container"><button id="buttonSubmit" class="btn">Send message</button></div>
    </form>
  </div>
</main>

`;
components.newPageShow =`
`
