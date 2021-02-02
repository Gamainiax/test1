//localizeImage(src, fct(output), type);

const localizeImage = function(src, fct, type) {
 "Credit: https://www.w3docs.com/snippets/javascript/how-to-convert-the-image-into-a-base64-string-using-javascript.html";
 let image = new Image();
 image.crossOrigin = "Anonymous";
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

//compress(string);

const compress = function(string) {
 "Credit: https://www.youtube.com/channel/UCBN-A5WNEb-edAmGvq68wMQ";
 if (typeof string === "string" && /^[\x00-\x7F]*$/.test(string)) {
  let charC = (String.fromCharCode);
  let revUni = function(letter) {
   if (letter == undefined) {
    return 9216;
   };
   return letter.charCodeAt(0);
  };
  string = string.split("");
  let newstring = "";
  for (let i = 0; i < string.length; i++) {
   let str = (string[i]);
   let str2 = (string[i + 1]);
   if (revUni(str) < 100 && revUni(str2) < 100) {
    if (str2 != undefined) {
     string[i] = charC(9216);
     string[i + 1] = charC(9216);
	};
	newstring += charC(10000 + (revUni(str) * 100) + revUni(str2));
   } else {
    if (revUni(str) >= 100 && revUni(str2) >= 100 && str != charC(9216) && str2 != charC(9216)) {
     if (str2 != undefined) {
      string[i] = charC(9216);
      string[i + 1] = charC(9216);
  	 };
	 if (str2 != undefined) {
	  str = charC(revUni(str) - 100);
	  str2 = charC(revUni(str2) - 100);
	  newstring += charC(20000 + (revUni(str) * 100) + revUni(str2));
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

//decompress(string);

const decompress = function(string) {
 "Credit: https://www.youtube.com/channel/UCBN-A5WNEb-edAmGvq68wMQ";
 if (typeof string === "string") {
  let charC = (String.fromCharCode);
  let revUni = function(letter) {
   if (letter == undefined) {
    return 9216;
   };
   return letter.charCodeAt(0);
  };
  string = string.split("");
  let newstring = "";
  for (let i = 0; i < string.length; i++) {
   let str = (string[i]);
   if (revUni(str) >= 10000 && revUni(str) < 20000) {
	let string0 = ("" + (revUni(str) - 10000)).split("");
	let string1 = charC(((string0[0] - 1 + 1) * 10) + (string0[1] - 1 + 1));
	let string2 = charC(((string0[2] - 1 + 1) * 10) + (string0[3] - 1 + 1));
    newstring += string1 + string2;
   } else {
	if (revUni(str) >= 20000) {
	 let string0 = (("" + revUni(str)).split(""));
	 let string1 = charC(((string0[1] - 1 + 1) * 10) + (string0[2] - 1 + 1) + 100);
	 let string2 = charC(((string0[3] - 1 + 1) * 10) + (string0[4] - 1 + 1) + 100);
     newstring += string1 + string2;
	} else {
     newstring += str;
	};
   };   
  };
  return newstring;
 };
};