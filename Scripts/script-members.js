// motion1-members

var team = document.querySelector('.members');
var line = document.querySelector('.line');
var membersTitle = document.querySelector('.title');

const mediaQuery = window.matchMedia('(max-width: 720px)');

if (mediaQuery.matches) {
 
}

else{

team.addEventListener('mouseenter', () => {
  gsap.to (line, {
    rotate: 90, x: 930, scaleY: 2, y:30,duration: 1.5, ease: "power2.inOut", stagger: 0.4})
   
    gsap.to (membersTitle ,{y:-350, ease: "power2.inOut", scrub:1, duration:1.5, stagger: 0.4})
   
   
    gsap.to ('img' , {duration: 1, opacity:1, ease: "power2.inOut", y:-270, stagger: 0.05, duration:1.5})
});

team.addEventListener('mouseleave', () => {
  gsap.to (line, {
    rotate: 0, x: 0, scaleY: 1.5, y:0,duration: 1.5, ease: "power2.inOut", stagger: 0.4})
   
    gsap.to (membersTitle ,{y:0, ease: "power2.inOut", scrub:1, duration:1.5, stagger: 0.4})
   
   
    gsap.to ('img' , {duration: 1, opacity:0, ease: "power2.inOut", y:0, stagger: 0.05, duration:1.5})
});

// motion2-volunteer

var volunteer = document.querySelector('.volunteer-container');

volunteer.addEventListener('mouseenter', () => {
  gsap.to (volunteer, {y:-330, ease: "power2.inOut", duration:1.5, stagger: 0.4})
  
  gsap.to (team, {y:-330, ease: "power2.inOut", duration:1.5, stagger: 0.4})

  gsap.to (line, {
    rotation: 90, x: 1050, scaleY: 1.6, y:200,duration: 1.5, ease: "power2.inOut", stagger: 0.4})
});

volunteer.addEventListener('mouseleave', () => {
  gsap.to (volunteer, {y:0, ease: "power2.inOut", duration:1.5, stagger: 0.4})
  
  gsap.to (team, {y:0, ease: "power2.inOut", duration:1.5, stagger: 0.4})

  gsap.to (line, {
    rotation: 0, x: 0, scaleY: 1, y:0,duration: 1.5, ease: "power2.inOut", stagger: 0.4}) });
  }