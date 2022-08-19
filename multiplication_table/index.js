for(var i=1; i<10; i++)
{
	var output ="";
	for(var j=0; j<i; j++)
	{
		var output = output + i + "*" + (j+1) + "=" + ((j+1)*i) + " ";
	}
	console.log(output);
}