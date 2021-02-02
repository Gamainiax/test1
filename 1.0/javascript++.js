//ELEMENT.getElement(param); document.getId(param); ELEMENT.getClass(param); ELEMENT.getAtr(param); console.history; uni(code); ELEMENT.atr(atr_name);
//ELEMENT.atr(atr_name, atr_value); setData(key, value); getData(key); removeData(key); window.listen(event, fct); ELEMENT.listen(event, fct);
//ASCII.test(string); tools.compress(ASCII_Text); tools.decompress(ASCII_Text); tools.test_compression(ASCII_Text); localizeSource(src, fct(output), type);

var internal_functions = { //Do not mess with this, used with Javascript++.
 move_script_tags: function() {
  for (var i = 0; i < document.body.getElementsByTagName("script").length; i++) {
   document.head.appendChild(document.body.getElementsByTagName("script")[i]);
  };
 },
 getElement: function(append) {
  return this.getElementsByTagName(append);
 },
 getId: function(append) {
  return this.getElementById(append);
 },
 getClass: function(append) {
  return this.getElementsByClassName(append);
 },
 getAtr: function(append) {
  var internal_list = []
  for (var i = 0; i < this.children.length; i++) {
   if (this.children[i].getAttribute(append) != undefined) {
    internal_list[internal_list.length] = this.children[i];
   };
  };
  return internal_list;
 },
 consoleError: function(param) {
  internal_functions.consoleHistory(param, Date.now() / 1000, "error");
  internal_pointers.consoleError(param);
 },
 consoleWarn: function(param) {
  internal_functions.consoleHistory(param, Date.now() / 1000, "warn");
  internal_pointers.consoleWarn(param);
 },
 consoleLog: function(param) {
  internal_functions.consoleHistory(param, Date.now() / 1000, "log");
  internal_pointers.consoleLog(param);
 },
 consoleHistory: function(message, timestamp, type) {
  if (console.history.length > 999) {
   console.history = [];
   console.clear();
  };
  console.history[console.history.length] = [message, timestamp, type];
 },
 atr: function(atr_name, atr_value) {
  var internal_output = undefined;
  if (atr_name != undefined && typeof atr_name === "string") {
   if (atr_value != undefined) {
    this.setAttribute(atr_name, atr_value);
   };
   internal_output = this.getAttribute(atr_name);
  };
  return internal_output;
 },
 lsSetItem: function(key, value) {
  if (ASCII.test(value)) {
   if (value == undefined) {
    return null;
   } else {
    localStorage.setItem(key, __internal_compression(JSON.stringify(value)));
   };
   return true;
  } else {
   return false;
  };
 },
 lsGetItem: function(key) {
  var output = (__internal_decompression(localStorage.getItem(key)));
  try {
   return JSON.parse(output);
  } catch(error) {
   return output;
  };
 },
 lsRemoveItem: function(key) {
  localStorage.removeItem(key);
 },
 listen: function(event, fct) {
  this.addEventListener(event, fct);
 },
 reverseUnicode: function(letter) {
  if (letter == undefined) {
   return 9216;
  };
  return letter.charCodeAt(0);
 },
};

var internal_pointers = { //Do not mess with this, used with Javascript++.
 consoleError: (console.error),
 consoleWarn: (console.warn),
 consoleLog: (console.log),
};

document.addEventListener("readystatechange", internal_functions.move_script_tags);

HTMLElement.prototype.getElement = internal_functions.getElement;
HTMLBodyElement.prototype.getElement = internal_functions.getElement;
HTMLDocument.prototype.getElement = internal_functions.getElement;

HTMLDocument.prototype.getId = internal_functions.getId;

HTMLElement.prototype.getClass = internal_functions.getClass;
HTMLBodyElement.prototype.getClass = internal_functions.getClass;
HTMLDocument.prototype.getClass = internal_functions.getClass;

HTMLElement.prototype.getAtr = internal_functions.getAtr;
HTMLBodyElement.prototype.getAtr = internal_functions.getAtr;
HTMLDocument.prototype.getAtr = internal_functions.getAtr;

HTMLElement.prototype.atr = internal_functions.atr;
HTMLBodyElement.prototype.atr = internal_functions.atr;
HTMLDocument.prototype.atr = internal_functions.atr;

HTMLElement.prototype.listen = internal_functions.listen;
HTMLBodyElement.prototype.listen = internal_functions.listen;
HTMLDocument.prototype.listen = internal_functions.listen;
window.listen = internal_functions.listen;

console.history = [];

console.error = internal_functions.consoleError;
console.warn = internal_functions.consoleWarn;
console.log = internal_functions.consoleLog;

setData = internal_functions.lsSetItem;
getData = internal_functions.lsGetItem;
removeData = internal_functions.lsRemoveItem;

function uni(code) {
 if (typeof code === "number") {
  return String.fromCharCode(code);
 } else {
  return null;
 };
};

const ASCII = /^[\x00-\x7F]*$/;

function __internal_compression(string) { //Do not mess with this, used with Javascript++.
 if (typeof string === "string" && ASCII.test(string)) {
  string = string.split("");
  var newstring = "";
  for (var i = 0; i < string.length; i++) {
   var str = (string[i]);
   var str2 = (string[i + 1]);
   if (internal_functions.reverseUnicode(str) < 100 && internal_functions.reverseUnicode(str2) < 100) {
    if (str2 != undefined) {
     string[i] = uni(9216);
     string[i + 1] = uni(9216);
	};
	newstring += uni(10000 + (internal_functions.reverseUnicode(str) * 100) + internal_functions.reverseUnicode(str2));
   } else {
    if (internal_functions.reverseUnicode(str) >= 100 && internal_functions.reverseUnicode(str2) >= 100 && str != uni(9216) && str2 != uni(9216)) {
     if (str2 != undefined) {
      string[i] = uni(9216);
      string[i + 1] = uni(9216);
  	 };
	 if (str2 != undefined) {
	  str = uni(internal_functions.reverseUnicode(str) - 100);
	  str2 = uni(internal_functions.reverseUnicode(str2) - 100);
	  newstring += uni(20000 + (internal_functions.reverseUnicode(str) * 100) + internal_functions.reverseUnicode(str2));
	 } else {
      newstring += str;
	 };
	} else {
	 if (str != uni(9216)) {
      newstring += str;
	 };
    };
   };
  };
  return newstring;
 };
};

function __internal_decompression(string) { //Do not mess with this, used with Javascript++.
 if (typeof string === "string") {
  string = string.split("");
  var newstring = "";
  for (var i = 0; i < string.length; i++) {
   var str = (string[i]);
   if (internal_functions.reverseUnicode(str) >= 10000 && internal_functions.reverseUnicode(str) < 20000) {
	var string0 = ("" + (internal_functions.reverseUnicode(str) - 10000)).split("");
	var string1 = uni(((string0[0] - 1 + 1) * 10) + (string0[1] - 1 + 1));
	var string2 = uni(((string0[2] - 1 + 1) * 10) + (string0[3] - 1 + 1));
    newstring += string1 + string2;
   } else {
	if (internal_functions.reverseUnicode(str) >= 20000) {
	 var string0 = (("" + internal_functions.reverseUnicode(str)).split(""));
	 var string1 = uni(((string0[1] - 1 + 1) * 10) + (string0[2] - 1 + 1) + 100);
	 var string2 = uni(((string0[3] - 1 + 1) * 10) + (string0[4] - 1 + 1) + 100);
     newstring += string1 + string2;
	} else {
     newstring += str;
	};
   };   
  };
  return newstring;
 };
};

const tools = {
 compress: function(ASCII_Text) {
  return __internal_compression(ASCII_Text);
 },
 decompress: function(ASCII_Text) {
  return __internal_decompression(ASCII_Text);
 },
 test_compression: function(ASCII_Text) {
  var string0 = (__internal_compression(ASCII_Text));
  var string1 = string0.split("").length;
  var string2 = ASCII_Text.split("").length;
  console.log("Uncompressed: " + string2);
  console.log("Compressed: " + string1);
  console.log("Total Compressed Bytes: " + (string2 - string1));
  console.log("Compression Rate: " + Math.round(-(((string1/string2) * 100) - 100)) + "%");
 },
 random_number: function(maximum) {
  return Math.floor((Math.random() * maximum) + 1);
 },
};

function localizeSource(src, fct, type) {
 "Origin: https://www.w3docs.com/snippets/javascript/how-to-convert-the-image-into-a-base64-string-using-javascript.html";
 let image = new Image();
 image.crossOrigin = 'Anonymous';
 image.onload = function() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let dataURL;
  canvas.height = this.naturalHeight;
  canvas.width = this.naturalWidth;
  ctx.drawImage(this, 0, 0);
  output = canvas.toDataURL(type);
  fct(output);
 };
 image.src = src;
 if (image.complete || image.complete === undefined) {
  image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  image.src = src;
 };
};