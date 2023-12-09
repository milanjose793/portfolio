function myFunction() {
  const x = document.getElementById("101");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




const hamburger = document.querySelector(".hamburger");
const navmeanu = document.querySelector(".nav-meanu");

/*hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmeanu.classList.toggle("active");
    
})
*/

   
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqKXd7jaCjOViO7YbUsZbsjFECs7bGmRodMKsp3Hfw9BOmFL9v1zEQ0bisfCgGmc-z/exec';


const form = document.querySelector("#form-data");
const hidebtn = document.querySelector(".subbtn");

const waiting = document.querySelector(".waiting");

form.addEventListener('submit', e => {

  var x1 = document.getElementById("mobile").value.length;
  if(x1>9){

    hidebtn.style.display="none";
    waiting.innerHTML=`<p style="color:white; font-size:1rem; padding:1rem;">Sending</p>`;

    
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  }else{
    alert(`check mobile number\n it must 10 digit`);
  }


})
