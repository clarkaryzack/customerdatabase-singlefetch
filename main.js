
  'use strict';
// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customers = document.getElementById("customers");

(function () {






	fetch('https://randomuser.me/api/?results=12')
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	    // Examine the text in the response
	    response.json().then(function(data) {
				for (let i = 0; i < 12; i++) {
	      // console.log(data.results[0].name);
				let picture = data.results[i].picture.large;
				let first = data.results[i].name.first;
				let last = data.results[i].name.last;
				let fullname = first+" "+last
				let email = data.results[i].email
				let add1 =data.results[i].location.street
				let city = data.results[i].location.city
				let state = data.results[i].location.state
				let zip = data.results[i].location.zip
				let add2 = city+" "+state+" "+zip
				let cell = data.results[i].cell


	      let markup = `
						<ul>
	            <img src=${picture}>
	            <div class="name">${fullname}</div>
	            <div class="email">${email}</div>
	            <li>${add1}</li>
	            <li>${add2}</li>
	            <li>${cell}</li>
						</ul>
	        `;


					var customers = document.getElementById("customers")
					customers.innerHTML += markup;

	    //let's set up the HTML
	    //characters as array then as li
    	}
  	})
	})

})();
