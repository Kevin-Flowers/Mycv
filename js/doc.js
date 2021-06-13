var inicio = document.getElementById("inicio");
var dp = document.getElementById("dp");
var mi = document.getElementById("mi"); 
var el = document.getElementById("el");
var ch = document.getElementById("ch");

const mediumBp = matchMedia('(max-width:800px)');
const changeSize = mql => {
   mql.matches
   ? document.getElementById("clop").innerHTML = "<a id="clop" onclick=""><span></span></a>"
   : document.getElementById("clop").innerHTML = "<div id="clop" onclick=""><span></span></div>"
}
mediumBp.addListener(changeSize);
changeSize(mediumBp);

function dap(){
   if (inicio.style.visibility === "visible"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "visible";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "visible" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "visible";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "visible" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "visible";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "visible" && ch.style.visibility === "hidden") {
       dp.style.visibility = "visible";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "visible") {
       dp.style.visibility = "visible";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
    else{
        dp.style.visibility = "visible";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";
    }
    }

function ini(){
   if (inicio.style.visibility === "visible"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "visible";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "visible" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "visible";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "visible" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "visible";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "visible" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
     inicio.style.visibility = "visible";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "visible") {
       dp.style.visibility = "hidden";
     inicio.style.visibility = "visible";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
     else{
        dp.style.visibility = "hidden";
       inicio.style.visibility = "visible";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";
    }}

function mini(){
   if (inicio.style.visibility === "visible"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "visible";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "visible" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "visible";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "visible" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "visible";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "visible" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "visible";
     el.style.visibility = "hidden";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "visible") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "visible";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";}
       else{
        dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "visible";
       el.style.visibility = "hidden";
       ch.style.visibility = "hidden";
    }}

function ele(){
   if (inicio.style.visibility === "visible"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "hidden";
     el.style.visibility = "visible";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "visible" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "visible";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "visible" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "visible";
       ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "visible" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "hidden";
     el.style.visibility = "visible";
     ch.style.visibility = "hidden";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "visible") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "visible";
       ch.style.visibility = "hidden";}
       else{
        dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "visible";
       ch.style.visibility = "hidden";
    }}

    function chu(){
   if (inicio.style.visibility === "visible"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
     dp.style.visibility = "hidden";
     inicio.style.visibility = "hidden";
     mi.style.visibility = "hidden";
     el.style.visibility = "hidden";
     ch.style.visibility = "visible";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "visible" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "visible";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "visible" && el.style.visibility === "hidden" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "visible";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "visible" && ch.style.visibility === "hidden") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "visible";}
   if (inicio.style.visibility === "hidden"  && dp.style.visibility === "hidden" && mi.style.visibility === "hidden" && el.style.visibility === "hidden" && ch.style.visibility === "visible") {
       dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "visible";}
       else{
        dp.style.visibility = "hidden";
       inicio.style.visibility = "hidden";
       mi.style.visibility = "hidden";
       el.style.visibility = "hidden";
       ch.style.visibility = "visible";
    }}


