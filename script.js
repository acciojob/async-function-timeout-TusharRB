//your JS code here. If required.
// script.js
document.getElementById("btn").addEventListener("click", showMessage);

async function showMessage() {
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;

  try {
    const result = await waitForDelay(delay, text);
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  } catch (error) {
    console.error(error);
  }
}

function waitForDelay(delay, message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}
