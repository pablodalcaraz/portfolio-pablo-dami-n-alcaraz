const redes1 = document.getElementById("redes1");
const redes2 = document.getElementById("redes2");
const redes3 = document.getElementById("redes3");

gsap.to(redes1, {
  delay: 2,
  duration: 2,
  rotation: 360,
  borderRadius: 50,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(redes2, {
  delay: 3,
  duration: 2,
  rotation: 360,
  borderRadius: 50,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(redes3, {
  delay: 4,
  duration: 2,
  rotation: 360,
  borderRadius: 50,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});



