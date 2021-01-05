///DOM///
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

///Total Price Comes from the movie value;
let totalPrice = movie.value;

//count and price
 function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeat = selectedSeats.length
    count.innerText = selectedSeat;
    total.innerText = selectedSeat *totalPrice;
    
}

 movie.addEventListener('change',(e)=>{

    totalPrice = movie.value;
    updateSelectedCount();

 })

container.addEventListener('click',(e)=>{

    if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){

        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

