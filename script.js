var links="";
for (var i=0; i<document.getElementsByClassName("fileThumb").length; i++) {
	links = links + document.getElementsByClassName("fileThumb")[i].href + "<br>";
}
document.write(links);
