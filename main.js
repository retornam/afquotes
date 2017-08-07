(function() {

	fetch('https://af-quotes-api.herokuapp.com/api/quotes/random/').then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
      	//debugging
        //console.log(data.quote)
        quote = data.quote;
        var inner = document.getElementById("inner");
        inner.innerHTML = quote;
      })
    }
  )
})();
