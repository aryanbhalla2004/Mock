import html2pdf from "html2pdf.js";

var opt = {
  margin: 0,
  filename: "billofsales.pdf",
  html2canvas: { 
    dpi: 192,
    scale:4,
    letterRendering: true,
    useCORS: true,
    scrollY: 0 
  },
  jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
};

export const print = async () => {
  var element = document.querySelector("#printable-aggreement").cloneNode(true);
  element.style.maxHeight = "none";
  var signBox = element.querySelector(".sign-concent-name").remove();
  // element.classList.remove("shadow-sm");
  // element.classList.remove("mt-5");

  // var smallerText = element.querySelectorAll(".pdf-edit-title-small");
  // smallerText.forEach(elem => {
  //  elem.style.fontSize = ".7rem";
  //  elem.style.fontWeight = "500";
  // });

  // var smallerText = element.querySelectorAll(".pdf-edit-small-not");
  // smallerText.forEach(elem => {
  //  elem.style.fontSize = ".9rem";
  //  elem.style.fontWeight = "500";
  // });

  // var remPad = element.querySelectorAll(".remove-tp-b-pad");
  // remPad.forEach(elem => {
  //   elem.style.padding = "10px ";
  //  });

  // var itemsSize = element.querySelectorAll(".item-size-pdf");
  // itemsSize.forEach(elem => {
  // elem.style.fontSize = ".6rem";
  // elem.style.fontWeight = "500";
  // });

  // var itempadding = element.querySelectorAll(".remove-padding-tops-item-pdf");
  // itempadding.forEach(elem => {
  //   elem.style.padding = "0px ";
  //   elem.style.marginBottom = "0px ";
  // });

  const data = await html2pdf().from(element).set(opt).outputPdf().then(function (p) {
    return p
  });

  return btoa(data);
  // google.script.run.savePdf(file, fileName);
  // window.print();
  // google.script.host.close();
}