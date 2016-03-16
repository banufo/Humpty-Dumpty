var parts=["Welcome to the Humpty Dumpty thing",
           "Humpty Dumpty sat on a wall...",
"Humpty Dumpty had a great fall...","Luckily due to the great advances in medical science made in the 20th century Humpty Dumpty made a full recovery"];

var pix=["http://yourlifeunlimited.ca/wp-content/uploads/2013/03/BeginNow.jpg" ,"https://oldstersview.files.wordpress.com/2008/08/humpty.jpg",
        "http://www.thevirtualvine.com/123/nrsyrhmes/hmpty/HumptyLg.jpg","http://lowres.jantoo.com/food-drink-iv_drip-eggs-broken_eggs-injuries-hospital-36533498_low.jpg"];

function start(){
  document.getElementById("title").innerHTML="Humpty - Dumpty";
  document.getElementById("buttons").style.visibility="visible";
}
function change(x){
  document.getElementById("story").innerHTML=parts[x];
  document.getElementById("pic").src=pix[x];
}