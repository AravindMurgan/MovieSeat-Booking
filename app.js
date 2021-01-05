///DOM///
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

///Total Price Comes from the movie value;
let totalPrice = movie.value;

//populate UI//
populateUI();

//setMovie data//
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('movieIndex',movieIndex);
    localStorage.setItem('moviePrice',moviePrice);
}

//populate LS items at UI//
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('seatsIndex'));
    
    //
    selectedSeats.forEach(function(seat){

        if(selectedSeats !== null && selectedSeats.length > 0 ){
            seats.forEach(function(seat,index){
               if(selectedSeats.indexOf(index) > -1){
                   seat.classList.add('selected');
               }
            })
        }
    })
}
//count and price
 function updateSelectedCount(){

     let selectedSeats = document.querySelectorAll('.row .seat.selected');
    
     const seatsIndex = [...selectedSeats].map((selectedSeat)=> [...seats].indexOf(selectedSeat));
     //set LS//
     localStorage.setItem('seatsIndex',JSON.stringify(seatsIndex));


    let selectedSeatsCount = document.querySelectorAll('.row .seat.selected');
    let selectedSeat = selectedSeatsCount.length
    count.innerText = selectedSeat;
    total.innerText = selectedSeat *totalPrice;

   
    
}

 movie.addEventListener('change',(e)=>{

    setMovieData(e.target.selectedIndex,e.target.value);
    totalPrice = movie.value;
    updateSelectedCount();

 })

container.addEventListener('click',(e)=>{

    if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){

        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

