function verify(event) {
  event.preventDefault();
  let Fname = document.getElementById("fname").value;
  let Snamme = document.getElementById("sname").value;

  const regex = /^[A-Za-z]+$/;
  if (Fname === " " || Fname == null) {
  }
  if (!regex.test(Fname)) {
    console.log(" no");
  } else {
    console.log("yes");
  }
  //   console.log(Fnamme, Snamme);
}
