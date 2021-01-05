///DOM///
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

///Total Price Comes from the movie value;
const totalPrice = movie.value;

//count and price
 function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    count.innerText = selectedSeats.length
    
}

container.addEventListener('click',(e)=>{

    if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){

        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

