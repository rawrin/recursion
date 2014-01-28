// this is what you would do if you liked things to be easy:
  // var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (obj == null) {
  	return "null";
  }

  if (typeof(obj) == "number") {
  	return obj.toString();
  }

  if (typeof(obj) == "boolean") {
  	if (obj) {
  		return "true";
  	} else {
  		return "false";
  	}
  }

  if (typeof(obj) == "string") {
    return '"' + obj + '"'
  }

  if (typeof(obj) === "object") {
    var list = [];
  	if (Array.isArray(obj)) {
      _.each(obj, function(item, index) {
        list[index] = stringifyJSON(item);
      })
      return '['.concat(list.join(',')).concat(']');
    }
    if (_.isObject(obj)) {
      var index = 0;
      var objList = Object.keys(obj);
      _.each(obj, function (value, key) {
        if ((typeof (value) !== "function") && (value !== undefined)) {
          if (index < objList.length) {
            list[index] = stringifyJSON(key) + ":" + stringifyJSON(value);
            index++
          }
        }
      })
      return '{'.concat(list.join(',')).concat('}');
    }
  }
};
