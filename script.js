function verify(event) {
  event.preventDefault();
  let Fname = document.getElementById("fname").value;
  let Sname = document.getElementById("sname").value;
  let Errormgs = document.getElementById("errormgs");
  let Errormg = document.getElementById("errormg");
  // firstname verification
  const regex = /^[A-Za-z]+$/;
  if (Fname === "" || Fname == null) {
    console.log("nothing");
    Errormgs.innerHTML = "please input firstname";
  } else {
    if (!regex.test(Fname)) {
      Errormgs.innerHTML = "please Alphabets only";
    } else {
      console.log("yes");
    }
  }
  // surnname verification
  if (Sname === "" || Sname == null) {
    console.log("nothing");
    Errormg.innerHTML = "please input Surnname";
  } else {
    if (!regex.test(Sname)) {
      Errormg.innerHTML = "please Alphabets only";
    } else {
      console.log("yes");
    }
  }
  //   Email verification
}
