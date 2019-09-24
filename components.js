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
            <li><a href="?page=new">News</a></li>
            <li><a href="?page=album">Album</a></li>
            <li><a href="?page=contact">contact</a></li>
        </ul>
    </nav>
</div>
</div>
`
components.home=`

        
`;
components.model=`
<header class="headerPage">
          <h1 class="title">LAMBORGHINI </br> MODEL</h1>
          <div class="slideShow slideShow1"><img class="imageShow" src="lamborghini-forsennato-concept.jpg" alt=""></div>
          <div class="slideShow slideShow1"><img class="imageShow" src="lamborghini-sian-roadster-rendering.jpg" alt=""></div>
          <div class="slideShow slideShow2"><img class="imageShow" src="D1ZJbigX0AAkTL9.jpg" alt=""></div>
          <div class="slideShow slideShow3"><img class="imageShow" src="lamborghini-aventador-svj-roadster-i.jpg" alt=""></div>
          <div class="dot-container">
             <span  class="dot"></span>
             <span  class="dot"></span>
             <span  class="dot"></span>
             <span  class="dot"></span>
          </div>
          <a href="#page-2"><span></span></a>
     </header>
     <main class="mainPage">
     <div class="pageNow"> <a href="?page=home">Home</a> / <a href="?page=model">Models</a></div>
     <div class="firstMainPageModel">
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
     <div class="secondMainPageModel">
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
     <div class=thirdMainPageModel">
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
     </main>
`;
components.brand=`
<section id="page-1" class="page header">
          <h1>Brand</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>

`;
components.history=`
<section id="homepage-1" class="page header">
          <h1>History</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>
`;
components.new=`
<section id="page-1" class="page header">
          <h1>New</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>
`
components.album=`
<header class="headerPage">
<h1 class="title">LAMBORGHINI  </br> ALBUM</h1>
<div class="slideShow slideShow1"><img class="imageShow" src="aventador_mk2_render.jpg" alt=""></div>
<a href="#page-2"><span></span></a>
</header>
<main class="mainPage">
<div class="pageNow"> <a href="?page=home">Home</a> / <a href="?page=album">Album</a></div>
<div><h1>Masonry Gallery</h1>
<div class="gallery" id="gallery">

</div>
</div></main>
`
components.contact=`
<section id="page-1" class="page header">
          <h1>Contact</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>
`