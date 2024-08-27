const changeInnerHtml = document.getElementById("btn");
const receivedData = document.getElementById("btn1");

changeInnerHtml.addEventListener("click", () => {
  document.getElementById("greeting").textContent = "Hello, Sahar!";
});

receivedData.addEventListener("click", (e) => {
  e.preventDefault();
  const name = input.value;
  const message = ` Hello ${name}`;

  alert(message);
});
