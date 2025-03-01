function showDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    document.getElementById('dateTime').innerHTML = now.toLocaleString('en-US', options);
}

setInterval(showDateTime, 1000); 


let btnHistory = document.getElementById('btn-history');


btnHistory.addEventListener('click',function(){
    let paraOne = document.getElementById('para1')
    paraOne.style.display = 'none';
    let paraTwo = document.getElementById('para2');
   paraTwo.style.display = 'none';
   let paraThree = document.getElementById('para3');
   paraThree.style.display = 'none';
   let paraFour = document.getElementById('para4');
 paraFour.style.display ='none';
   let paraFive = document.getElementById('para5');
   paraFive.style.display ='none';
   let paraSix = document.getElementById('para6');
   paraSix.style.display = 'none';

})