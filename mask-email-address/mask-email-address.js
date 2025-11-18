function maskEmail(email){
  let [name, domain] = email.split("@");
  if(name.length <= 2) {
    return name + "@" + domain;
  }
  let firstLetter = name.slice(0, 1);
  let lastLetter = name[name.length - 1];
  let middleStars = "*".repeat(name.length -2);
  return firstLetter + middleStars + lastLetter + "@" + domain;
}
let email = "example.email@example.com";
 console.log(maskEmail("apple.pie@example.com"));
 console.log(maskEmail("freecodecamp@example.com"));
 console.log(maskEmail("info@test.dev"));
 console.log(maskEmail("user@domain.org"));
 console.log(maskEmail(email));