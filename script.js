async function basicInfo() {
  const requestUrl = "https://randomuser.me/api/";
  const response = await fetch(requestUrl);
  // console.log(response);
  const res = await response.json(); //to read the body
  // console.log(res);
  /**
   * res contains 1 array & 1 object- results & info resp.
   * results is an array of objects. It holds the data of 1 user.
   */

  const person = res.results[0]; //array
  console.log(person);

  // setting image
  const image_url = person.picture.large;
  document.getElementById("image").src = image_url;

  // render name
  const personName =
    person.name.title + " " + person.name.first + " " + person.name.last;
  document.getElementById("name").innerText = personName;

  // render age
  document.getElementById("age").innerText = `Age: ${person.dob.age}`;
  // render email
  document.getElementById("email").innerText = `Email: ${person.email}`;
  // render phone
  document.getElementById("phone").innerText = `Phone: ${person.phone}`;

  return person;
}

function showDetails(element) {
    // var req_data = element.getAttribute('data-attr')
    // element.style.display = 'none'
    let displayId=element.innerText
    let diis =document.getElementById(displayId).style.display='block'
    if(displayId=='age'){
        document.getElementById("email").style.display='none'
        document.getElementById("phone").style.display='none'
    }
    if(displayId=='email'){
        document.getElementById("age").style.display='none'
        document.getElementById("phone").style.display='none'
    }
    if(displayId=='phone'){
        document.getElementById("email").style.display='none'
        document.getElementById("age").style.display='none'
    }
    console.log(diis);
    console.log(displayId);
}

basicInfo()
