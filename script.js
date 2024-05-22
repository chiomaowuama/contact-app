function verify(event) {
  event.preventDefault();
  let Fname = document.getElementById("fname").value;
  let Sname = document.getElementById("sname").value;
  let Email = document.getElementById("email").value;
  let Rgeneral = document.getElementById("general");
  let Rsupport = document.getElementById("support");
  let Errormgs = document.getElementById("errormgs");
  let Errormg = document.getElementById("errormg");
  let Emailerror = document.getElementById("emailerror");
  // firstname verification
  const regex = /^[A-Za-z]+$/;
  if (Fname === "" || Fname == null) {
    Errormgs.innerHTML = "please input firstname";
  } else {
    if (!regex.test(Fname)) {
      Errormgs.innerHTML = "please Alphabets only";
    } else {
      Errormgs.innerHTML = "";
    }
  }
  // surnname verification
  if (Sname === "" || Sname == null) {
    Errormg.innerHTML = "please input Surnname";
  } else {
    if (!regex.test(Sname)) {
      Errormg.innerHTML = "please Alphabets only";
    } else {
      Errormg.innerHTML = "";
    }
  }
  //   Email verification
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (Email === " " || Email == null) {
    Emailerror.innerHTML = "please input Surnname";
  } else {
    if (!emailRegex.test(Email)) {
      Emailerror.innerHTML = "Email incorrect";
    } else {
      Emailerror.innerHTML = " ";
    }
  }
  //   radio button
}
