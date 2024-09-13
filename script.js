// gsap.fromTo("body",{backgroundColor: "rgb(31, 31, 31)"},{
// 	// duration : 3,
// 	ease: "expoScale(0.5,7,none)",
// 	scrollTrigger:{
// 		trigger:'.img-container',
// 		start: 'top 0%',
// 		end: 'bottom -10%',
//         // endTrigger: ".page2",
// 		scoller: 'body',
// 		scrub: .2, 
// 	},
// 	backgroundColor:"rgb(58, 138, 153)",
// })

gsap.fromTo("body",{backgroundColor: "rgb(58, 138, 153)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page2',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page2",
		scoller: 'body',
		scrub: .2, 
	},
	backgroundColor:"rgb(58, 54, 109)",
})

gsap.fromTo("body",{backgroundColor: "rgb(58, 54, 109)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page3',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page3",
		scoller: 'body',
		scrub: .2, 	
	},
	backgroundColor:" rgb(80, 135, 162)",
})

gsap.fromTo("body",{backgroundColor: "rgb(80, 135, 162)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page4',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page4",
		scoller: 'body',
		scrub: .2, 
		
	},
	backgroundColor:" rgb(90, 121, 103)",
})


gsap.fromTo("body",{backgroundColor: "rgb(90, 121, 103)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page5',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page5",
		scoller: 'body',
		scrub: .2, 
		
	},
	backgroundColor:" rgb(124, 103, 105)",
})

gsap.fromTo("body",{backgroundColor: "rgb(124, 103, 105)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page6',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page6",
		scoller: 'body',
		scrub: .2, 
		
	},
	backgroundColor:" rgb(177, 75, 107)",
})

gsap.fromTo("body",{backgroundColor: "rgb(177, 75, 107)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page7',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page7",
		scoller: 'body',
		scrub: .2, 
		
	},
	backgroundColor:" rgb(159, 73, 145)",
})

gsap.fromTo("body",{backgroundColor: "rgb(159, 73, 145)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page8',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page8",
		scoller: 'body',
		scrub: .2, 
	},
	backgroundColor:" rgb(123, 68, 142)",
})

gsap.fromTo("body",{backgroundColor: "rgb(123, 68, 142)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page9',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page8",
		scoller: 'body',
		scrub: .2, 
	},
	backgroundColor:" rgb(137, 148, 193)",
})

gsap.fromTo("body",{backgroundColor: "rgb(137, 148, 193)"},{
	// duration : 3,
	ease: "expoScale(0.5,7,none)",
	scrollTrigger:{
		trigger:'.page10',
		start: 'top 0%',
		end: 'bottom -10%',
        // endTrigger: ".page8",
		scoller: 'body',
		scrub: .2, 
	},
	backgroundColor:" rgb(174, 138, 237)",
})

// gsap.to(".img-container .img-1"),{
// 	x:-350,
// 	duration:0.4,
// 	top:500,
// 	left:730,
// 	// height:300,
// 	scrollTrigger:{
// 		trigger:".page2",
// 		scrub:0.3,
// 		start: 'top 0%',
// 		end: 'top 30%',
// 		marker: true
// 	}
// }

gsap.to(".img-container .img-1",{
	x:-350,
	// duration:5,
	// delay:5,
	top:500,
	left:843,
	height:300,
	width: 275,
	scrollTrigger:{
		trigger:"img-container",
		start: 'top 0%',
		end: 'bottom 40%',

		// scroller: "body",
		scrub:2,	
		pin:true,
	}
})
gsap.to(".img-container .img-2",{
	x:-350,
	// duration:5,
	// delay:5,
	top:500,
	left:843,
	height:300,
	width: 275,
	scrollTrigger:{
		trigger:"img-container",
		start: 'top 0%',
		end: 'bottom 50%',
		// scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-3",{
	x:-350,
	// duration:5,
	// delay:5,
	top:500,
	left:843,
	height:300,
	width: 275,
	scrollTrigger:{
		trigger:"img-container",
		start: 'top 0%',
		end: 'bottom 60%',
		// scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-4",{
	x:-350,
	// duration:5,
	// delay:5,
	top:500,
	left:843,
	height:300,
	width: 275,
	scrollTrigger:{
		trigger:"img-container",
		start: 'top 0%',
		end: 'bottom 70%',
		// scroller: "body",
		scrub:2,
		pin:true
	}
})
gsap.to(".img-container .img-5",{
	x:-350,
	// duration:5,
	// delay:5,
	top:500,
	left:843,
	height:300,
	width: 275,
	scrollTrigger:{
		trigger:"img-container",
		start: 'top 0%',
		end: 'bottom 80%',
		// scroller: "body",
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

