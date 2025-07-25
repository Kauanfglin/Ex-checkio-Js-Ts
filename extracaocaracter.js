function getSubstring(text, startMarker, endMarker) {
 let inicial = text.indexOf(startMarker);
 let final = text.indexOf(endMarker)
return text.slice(inicial + 1,final)

}