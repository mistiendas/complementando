let link =
  "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxn6JMvNAUjYtnbRZT1IKsELm6wW5KgYph1-Qj6smbxn5svtGY2Ao5jS5BTlf5wftE7Nw/exec";

function pedir() {
  alert("se clickeo");
  fetch(link, {
    method: "POST",
    body: JSON.stringify({ llave: "prueba" }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      alert(data);
    });
}
