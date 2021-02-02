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
