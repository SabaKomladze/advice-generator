const button = document.querySelector('.green');
const quote = document.querySelector('.quote');
const num = document.querySelector('span');
const quotes = [{ 
    quote: '"Courage is grace under pressure."' ,
    num: '12'
},{
    quote:'"Sometimes you can\'t see yourself clearly until you see yourself through the eyes of others."',
    num:'2'

},{
    quote:'"Success is walking from failure to failure with no loss of enthusiasm."',
    num:'17'
},{
    quote:'"Try not to become a person of success, but rather try to become a person of value." ',
    num:'88'
},{
    quote:'"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."',
    num: '36'
},];

button.addEventListener('click',function(){

    let random = Math.floor(Math.random()*quotes.length);


    quote.innerText = quotes[random].quote;
    num.innerText = quotes[random].num;

})