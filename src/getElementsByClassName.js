// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var list = [];
  var findElement = function (element, className, list) {
  	if (element.classList !== undefined) {
  		for (var k = 0; k < element.classList.length; k++) {
  			if (element.classList[k] == className) {
  				list.push(element);
  			}
  		}
  	}
  	if (element.hasChildNodes()) {
  		if (element.childNodes !== undefined) {
  			for (var i = 0; i < element.childNodes.length; i++) {
  				findElement(element.childNodes[i], className, list);
  			}
  		}
  	};
  };
  findElement(document.body, className, list);
  return list;
};