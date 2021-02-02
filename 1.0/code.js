var dir = "compress";

function newdir(element) {
 if (element.innerText === "~~>") {
  dir = "decompress";
  element.innerText = "<~~";
 } else if (element.innerText === "<~~") {
  dir = "compress";
  element.innerText = "~~>";
 };
};

function comp() {
 var inp = document.getId("input");
 var out = document.getId("output");
 var txt = document.getId("textarea");
 if (dir === "compress" && ASCII.test(inp.value)) {
  out.value = compress(inp.value);
  var valA = inp.value.length - 1 + 1;
  var valB = out.value.length - 1 + 1;
  var valC;
  if (valB > valA) {
   valC = valA;
   valB = valA;
   valC = valB;
  };
  txt.innerText = "\n";
  txt.innerText += "Compressed Text: " + out.value.length + "\n";
  txt.innerText += "Uncompressed Text: " + inp.value.length + "\n";
  txt.innerText += "Rate: " + Math.round(-(((valB / valA) * 100) - 100)) + "%";
 };
 if (dir === "decompress") {
  inp.value = decompress(out.value);
  var valA = inp.value.length - 1 + 1;
  var valB = out.value.length - 1 + 1;
  var valC;
  if (valB > valA) {
   valC = valA;
   valB = valA;
   valC = valB;
  };
  txt.innerText = "\n";
  txt.innerText += "Compressed Text: " + out.value.length + "\n";
  txt.innerText += "Uncompressed Text: " + inp.value.length + "\n";
  txt.innerText += "Rate: " + Math.round(-(((valB / valA) * 100) - 100)) + "%";
 };
};

function randomchar() {
 return uni(tools.random_number(95) + 31);
};

function moregarbage() {
 var str = "";
 for (var i = 0; i < document.getId("count").value - 1 + 1; i++) {
  str += randomchar();
 };
 document.getId("input").value += str;
};

function checkvalue() {
 var counter = document.getId("count");
 counter.value = Math.round(counter.value - 1 + 1);
 if (counter.value - 1 + 1 < 1) {
  counter.value = 1;
 };
 if (counter.value - 1 + 1 > 99) {
  counter.value = 99;
 };
};

if (tools.random_number(20) == 1) {
 localizeImage("https://lh3.googleusercontent.com/a-/AOh14GikqF6HX65Zmo_7S_M7VcNyalAsz-nDeuhp5TBFOg=s600-k-no-rp-mo", function() {
  document.getId("output").value = compress(output + "#https://youtube.com/channel/UCBN-A5WNEb-edAmGvq68wMQ?");
 }, "png");
};