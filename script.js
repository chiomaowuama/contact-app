function verify(event) {
  event.preventDefault();
  let Fname = document.getElementById("fname").value;
  let Sname = document.getElementById("sname").value;
  let Email = document.getElementById("email").value;
  let messages = document.getElementById("the-messages")?.value;
  let Errormgs = document.getElementById("errormgs");
  let Errormg = document.getElementById("errormg");
  let Emailerror = document.getElementById("emailerror");
  let Radioerror = document.getElementById("radioerror");
  let message = document.getElementById("message");
  let result = [];

  // firstname verification
  const regex = /^[A-Za-z]+$/;
  if (Fname === "" || Fname == null) {
    Errormgs.innerHTML = "please input firstname";
  } else {
    if (!regex.test(Fname)) {
      Errormgs.innerHTML = "please Alphabets only";
    } else {
      Errormgs.innerHTML = "";
      result.firstname = Fname;
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
      result.Surnname = Sname;
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
      result.Email = Email;
    }
  }
  //   radio button
  const selectedRadio = document.querySelector(
    'input[name="typesupport"]:checked'
  )?.value;
  if (!selectedRadio) {
    Radioerror.innerHTML = "pick an option";
  } else {
    result.radio = selectedRadio;
  }
  //   the messages
  if (messages === "" || messages == null) {
    message.innerHTML = "Message cant be empty";
  } else {
    message.innerHTML = "";
    result.message = messages;
  }
  //   consent
  const consent = document.querySelector(
    'input[name="consent"]:checked'
  )?.value;
  const consents = document.getElementById("concents");
  if (!consent) {
    consents.innerHTML = " please give concent";
  } else {
    result.concent = consent;
  }
}
