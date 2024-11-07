let crs=document.querySelector('.cursor')
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"

})

gsap.to(".nav",{
    backgroundColor:"#000", //black
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
const texts = [
    

    "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",

    "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",

    "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been."
];

let index = 0;

// Function to change the text every 5 seconds
setInterval(() => {
    // Select the paragraph element
    const paragraph = document.getElementById('dynamicText');

    // Change the text content
    paragraph.textContent = texts[index];

    // Update the index, reset to 0 if at the end of the array
    index = (index + 1) % texts.length;
}, 5000); 

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    
    }
})
gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 99%",
        end:"top 20%",
        scrub:4
    
    }
})