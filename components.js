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
        <header class="headerPage">
        <h1 class="title">LAMBORGHINI</h1>
        <div class="slideShow slideShow1"><img class="imageShow" src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/155613364003514899.jpg?v=1565119707" alt=""></div>
        <div class="slideShow slideShow1"><img class="imageShow" src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/155613364003514899.jpg?v=1565119707" alt=""></div>
        <div class="slideShow slideShow2"><img class="imageShow" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/EVO%20SPYDER%20MOBILE.jpg" alt=""></div>
        <div class="slideShow slideShow3"><img class="imageShow" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Lamborghini_Veneno.jpg" alt=""></div>
        <div class="dot-container">
           <span  class="dot"></span>
           <span  class="dot"></span>
           <span  class="dot"></span>
           <span  class="dot"></span>
        </div>
        <a href="#page-2"><span></span></a>
   </header>
   <main class="mainPage">
   <section><div class="Asus">
   <h1>Harucan</h1>
   <p>From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born. 
     More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the 
     latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control 
     under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology 
     like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive.
      Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models. </p>
  <div class="container">
    <div class="mySlides">
      <div class="numberText">1/3</div>
      <img src="tải xuống (1).jpg" alt="asus car" style ="width:100%">
    </div>
    <div class="mySlides">
       <div class="numberText">2/3</div>
       <img src="tải xuống (2).jpg" alt="asus car" style ="width:100%">
     </div>
     <div class="slides">
         <div class="numberText">3/3</div>
         <img src="tải xuống (3).jpg" alt="asus car" style ="width:100%">
       </div>
       <a class="prev" onclick="plusSlides(-1)">❮</a>
       <a class="next" onclick="plusSlides(1)">❯</a>
       <div class="row">
           <div class="column">
             <img class="demo cursor" src="tải xuống (1).jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
           </div>
           <div class="column">
             <img class="demo cursor" src="tải xuống (2).jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
           </div>
           <div class="column">
             <img class="demo cursor" src="tải xuống (3).jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
           </div>
  </div>
 </div>
</section>
<section>
   <div class="Asus">
     <h1>Aventador</h1>
     <p>The Aventador has been created to anticipate the future, as demonstrated by the use of innovative technology, including a V12 engine and the extensive use of carbon fiber.
         The authentic design masterpieces together stark dynamism with aggression to produce a cutting edge carbon fiber monocoque. The interior of the Aventador combines
          high-level technology and luxury equipment with premium-quality materials, skilfully crafted with the expertise characteristic of the finest Italian traditions.
           A supercar family that has already become a legend in its own right. Discover technical specifications, dimensions, performance, and the detailed features of
            all the new Lamborghini Aventador models.</p>
    <div class="container">
      <div class="mySlides">
        <div class="numberText">1/3</div>
        <img src="tải xuống (1).jpg" alt="asus car" style ="width:100%">
      </div>
      <div class="mySlides">
         <div class="numberText">2/3</div>
         <img src="tải xuống (2).jpg" alt="asus car" style ="width:100%">
       </div>
       <div class="slides">
           <div class="numberText">3/3</div>
           <img src="tải xuống (3).jpg" alt="asus car" style ="width:100%">
         </div>
         <a class="prev" onclick="plusSlides(-1)">❮</a>
         <a class="next" onclick="plusSlides(1)">❯</a>
         <div class="row">
             <div class="column">
               <img class="demo cursor" src="tải xuống (1).jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
             </div>
             <div class="column">
               <img class="demo cursor" src="tải xuống (2).jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
             </div>
             <div class="column">
               <img class="demo cursor" src="tải xuống (3).jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
             </div>
    </div>
   </div>
 </section></section>
   </main>
`;
components.model=`
<section id="page-1" class="page header">
          <h1>Model</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>
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
<section id="page-1" class="page header">
          <h1>Album</h1>
          <a href="#page-2"><span></span></a>
        </section>
        <section id="page-2" class="page">
        </section>
        <section id="page-3" class="page">
        </section>
        <section id="page-4" class="page">
        </section>
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