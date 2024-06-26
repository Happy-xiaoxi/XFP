export default function imgSrcToElement(src, d) {
  var img = d.createElement("img");
  img.height = 1;
  img.width = 1;
  img.style.display = "none";
  img.src = src;
  img.alt = "";
  return img;
}