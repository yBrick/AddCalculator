var sum = 0;
var count  = 0;


function add(x)
{
  count = count + 1;
  sum = sum + x;
  document.getElementById("count").innerHTML = "<hr><br>" + "Count: " + count + "<br>" + "Sum: " + sum;

}

function clearIT()
{
  count = 0;
  sum = 0;
  document.getElementById("count").innerHTML = " ";
}

function playAudio()
{
var x = document.getElementById("myAudio");
  x.play();
}
