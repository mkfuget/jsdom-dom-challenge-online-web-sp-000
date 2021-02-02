function incrementCounter()
{
  document.getElementById('counter').innerHTML += 1;
}

document.getElementById("plus").addEventListener("click", function() {
  incrementCounter()
});
