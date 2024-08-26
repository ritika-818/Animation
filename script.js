gsap.to(".img-container .img-1",{
	x:-350,
	duration:5,
	delay:5,
	top:500,
	left:730,
	height:300,
	scrollTrigger:{
		trigger:"img-container",
		scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-2",{
	x:-350,
	duration:5,
	delay:5,
	top:520,
	left:730,
	height:200,
	scrollTrigger:{
		trigger:"img-container",
		scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-3",{
	x:-350,
	duration:5,
	delay:5,
	top:520,
	left:770,
	height:200,
	scrollTrigger:{
		trigger:"img-container",
		scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-4",{
	x:-350,
	duration:5,
	delay:5,
	top:580,
	left:790,
	height:200,
	scrollTrigger:{
		trigger:"img-container",
		scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-5",{
	x:-350,
	duration:5,
	delay:5,
	top:550,
	left:730,
	height:200,
	scrollTrigger:{
		trigger:"img-container",
		scroller: "body",
		scrub:2,
		pin:true
	}
})

gsap.to(".page2 .phone", {
    scrollTrigger: {
        trigger: ".page2",
        endTrigger: ".page9",
        pin: true,
        pinSpacing: false
    }
});
console.log("ritika");
gsap.to(".page3", {
    scrollTrigger: {
        trigger: ".page3",
        endTrigger: ".page3",
        pin: true, 
        pinSpacing: false
    }
});

gsap.to(".page4", {
    scrollTrigger: {
        trigger: ".page4",
		endTrigger:".page4",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page5", {
    scrollTrigger: {
		trigger: ".page5",
		endTrigger:".page5",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page6", {
    scrollTrigger: {
        trigger: ".page6",
		endTrigger:".page6",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page7", {
    scrollTrigger: {
        trigger: ".page7",
		endTrigger:".page7",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to('.page8',{
	scrollTrigger:{
		trigger:".page8",
		endTrigger:".page8",
		pin:true,
		pinSpacing:false,
	}
});

gsap.to(".page9",{
	scrollTrigger:{
		trigger:'.page9',
		endTrigger:".page9",
		pin:true,
		pinSpacing:false,
	}
})
