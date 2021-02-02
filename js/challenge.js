function incrementCounter()
{
  const currentCount = document.getElementById('counter').innerHTML
  document.getElementById('counter').innerHTML = parseInt(currentCount) + 1
}

document.getElementById("plus").addEventListener("click", function() {
  incrementCounter()
});
