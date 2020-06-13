import 'api.json';


var fileContent;
console.log(document.body.lastChild.previousElementSibling);
var openFile = (event) => {
  console.log(event);
  var input = event.target;
  console.log(event.target);


  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    let json = JSON.parse(dataURL);
    console.log('parsed json', json)
  };
  reader.readAsText(input.files[0]);
};
