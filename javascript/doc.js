function changeColor(){
 var element =  document.getElementById('demo');
 console.log('element',element);
 element.style.backgroundColor = 'pink';
}

function getLength(){
    let text = 'ghjwkhfjkdsnvm,sdnv';
    var textLength = text.length;
  document.getElementById('demo1').innerHTML = textLength;
}