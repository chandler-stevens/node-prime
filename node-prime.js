var express = require('express');
var app = express();

var number = 2;

app.use(express.static('public'));

app.get('/', function handleHomePage(request, response)
{
	response.sendFile(__dirname + "/public/" + "index.html");
});

app.get('/checkprime', function handleProcessGet(request, response)
{
	var number = request.query.numInput,
		factors = [],
		count = 0,
		index;

	for(index = 1; index <= number; index++)
  {
	  if (number % index == 0)
	  {
			factors[count] = index;
			count++;
	  }
  }

	if (count == 2)
	{
		response.send(number + " is a Verified Prime Number!");
  }
	else
	{
		response.send(number + " is not a Prime Number!" +
			"</br></br>Prime Factors of " + number + ":</br></br>" +
			factors);
	}
});

	var server = app.listen(3036, function ServerListener()
	{
		var host = server.address().address;
		var port = server.address().port;
		console.log("Using Forms and Express, listening at http://%s:%s", host, port);
	});
