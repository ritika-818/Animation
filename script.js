gsap.to("body",{
	backgroundColor:"rgb(58, 54, 109)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page1",
		scoller: 'body',
		scrub: 5, 

	}
})

gsap.to("body",{
	backgroundColor:" rgb(80, 135, 162)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page4",
		scoller: 'body',
		scrub: 5, 

	}
})

gsap.to("body",{
	backgroundColor:" rgb(90, 121, 103)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page5",
		scoller: 'body',
		scrub: 5, 

	}
})


gsap.to("body",{
	backgroundColor:" rgb(124, 103, 105)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page6",
		scoller: 'body',
		scrub: 5, 

	}
})

gsap.to("body",{
	backgroundColor:" rgb(177, 75, 107)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page6",
		scoller: 'body',
		scrub: 5, 

	}
})

gsap.to("body",{
	backgroundColor:" rgb(159, 73, 145)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'body',
        endTrigger: ".page7",
		scoller: 'body',
		scrub: 5, 

	}
})

gsap.to("body",{
	backgroundColor:" rgb(123, 68, 142)",
	duration : 3,
	ease: "linear",
	scrollTrigger:{
		trigger:'.page7',
        endTrigger: ".page8",
		scoller: 'body',
		scrub: 5, 

	}
})


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
	// opacity:0.5,
    scrollTrigger: {
        trigger: ".page3",
        endTrigger: ".page9",
        pin: true, 
        pinSpacing: false
    }
});

gsap.to(".page4", {
	// backgroundColor:"blue",
    scrollTrigger: {
        trigger: ".page4",
		endTrigger:".page9",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page5", {
    scrollTrigger: {
		trigger: ".page5",
		endTrigger:".page9",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page6", {
    scrollTrigger: {
        trigger: ".page6",
		endTrigger:".page9",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to(".page7", {
    scrollTrigger: {
        trigger: ".page7",
		endTrigger:".page9",
		pin:true,
		pinSpacing:false,
    }
});

gsap.to('.page8',{
	scrollTrigger:{
		trigger:".page8",
		endTrigger:".page9",
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

