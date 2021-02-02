const toggleCounter = "on"

function incrementCounter()
{
  const currentCount = document.getElementById('counter').innerHTML
  document.getElementById('counter').innerHTML = parseInt(currentCount) + 1
}

function decrementCounter()
{
  const currentCount = document.getElementById('counter').innerHTML
  document.getElementById('counter').innerHTML = parseInt(currentCount) - 1
}


document.getElementById("plus").addEventListener("click", function() {
  incrementCounter()
});

document.getElementById("minus").addEventListener("click", function() {
  decrementCounter()
});
document.getElementById("pause").addEventListener("click", function() {
  if(toggle === "on")
  {
    toggle = "off";
    document.getElementById("pause").innerHTML = "resume"
  }
  else
  {
    toggle = "on";
    document.getElementById("pause").innerHTML = "pause"
  }
});

setInterval(function() =>{
  if(toggle === "on"){
    incrementCounter()
  }
}, 1000);
