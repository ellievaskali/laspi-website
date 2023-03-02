
const elements = Array.from(document.getElementsByClassName('contact_way'));
const mediaQuery = window.matchMedia('(min-width: 701px)');

if (mediaQuery.matches) {

  elements.forEach(element => {
    const svg = element.querySelector(`svg`);
    const info= svg.nextElementSibling;
    const h2 = element.querySelector(`h2`);
  element.addEventListener('mouseenter', () => {
    gsap.to (h2, {
        duration: 1.5,
        x: -1100, ease: "circ.inOut", scrub:1, scale:1.5    
    })
    gsap.to (svg, {
        duration: 1.5,
       scaleX:5, scaleY:.2, x:-800, ease: "circ.inOut" , scrub:1
      })
      gsap.to (svg, {
        duration: .3,
       fill:"#00FF27", ease: "power2.inOut"
      })
          
    gsap.to (info, {
        duration: 1.5, x:'0', ease: "power4.inOut", scrub:2
   })
});
  element.addEventListener('mouseleave', () => {
    gsap.to (h2, {
        delay:2.5,
        duration: 1.5,
        x: 0, ease: "circ.inOut", scale:1    
    })
    gsap.to (svg, {
        delay:2.5,
        duration: 1.5,
       scaleX:1, scaleY:1, x:0, ease: "circ.inOut" , scrub:1   
      })
      gsap.to (svg, {
        delay:3.5,
        duration: .3,
       fill:"black", ease: "power2.inOut"
      })
      gsap.to (info, {
        delay:2.5,
        x:'+=100%', duration: 1.5, ease: "power4.inOut",
    })
  });
});
}

// gsap title animation
const subtitles = Array.from(document.querySelectorAll('h5'));

const tl = gsap.timeline({delay:'0', repeat:0});
gsap.set(subtitles, { opacity: 0, rotateX: 90 });

subtitles.forEach(subtitle => {
tl.to(subtitle, {
  rotateX: 0,
  duration: 4,
  ease: "elastic.inOut",
  repeat: 0,
  opacity: 1,
  stagger: 0,
},"-=3").to(subtitle, {
  opacity: 0,
  rotateX: -180,
  duration: 1.5,
  ease: "elastic.Out",
  onComplete: function() {
    gsap.to(this.target, {delay:'-2', opacity: 1, duration: 0.5, ease: "elastic.Out" } );
  }
});
});

subtitles.forEach(subtitle => {
  gsap.set(subtitle, { transformOrigin: "50% 80%" });
});
