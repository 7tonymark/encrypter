var textInput = document.getElementById('name');
var alphabet = [ 'a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ,
                 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var splitting = [];
var index;
var result = [];
text = [];

//Encrypt Button

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
//prevent the normal submission of the form
e.preventDefault();
// encrypt();



splitting = textInput.value.split('');
for (var i = 0; i < splitting.length; i++ ){
  index = alphabet.indexOf(splitting[i]);
  result.push(alphabet[index + 1]);
}


text = result.join(' ');
document.getElementById('result').textContent = text;


});

