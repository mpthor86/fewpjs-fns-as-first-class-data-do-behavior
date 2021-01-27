/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = time.split(":")[0];
  if (parseInt(hour) < 12)
    return "Good Morning"
  if (parseInt(hour) > 17)
    return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let node = document.getElementById('greeting')
  node.innerText = `${message}`
}