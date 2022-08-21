var path = document.querySelector('path');
var pathLength = path.getTotalLength();


path.style.strokeDasharray= pathLength;
path.style.strokeDashoffset= pathLength;


window.addEventListener("scroll",()=>{
    var scrollPercentage=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);
   
    var drawLength=pathLength*scrollPercentage;
    
    path.style.strokeDashoffset=pathLength-drawLength;
    console.log(drawLength)

   
    


    
})
console.log("hey bolo bc")