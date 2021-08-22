//jawaban no 1
const btn_1 = document.getElementById("buttonSatu");
btn_1.addEventListener("click", function () {
  for (var n = 0; n <= 14; n++) {
    const p = document.querySelectorAll("p")[n];
    p.style.backgroundColor = "#00BFFF";
  }
});

//jawaban no 2
const btn_2 = document.getElementById("buttonDua");
btn_2.addEventListener("click", function () {
  btn_2.style.backgroundColor = "yellow";
  btn_2.style.color = "red";
});

//jawaban no 3
const btn_3 = document.getElementById("buttonTiga");
btn_3.addEventListener("click", function () {
  for (var n = 0; n <= 14; n++) {
    const p = document.querySelectorAll("p")[n];
    p.style.color = "#00BFFF";
    p.style.fontFamily = "Impact,Charcoal,sans-serif";
  }
});

//jawaban no 4
const btn_4 = document.getElementById("buttonEmpat");
btn_4.addEventListener("click", function () {
  for (var n = 0; n <= 14; n++) {
    const p = document.querySelectorAll("p")[n];
    p.style.fontSize = "x-large";
  }
});

//jawaban no 5
const btn_5 = document.getElementById("buttonLima");
btn_5.addEventListener("click", function () {
  const container = document.getElementById("container");
  container.style.backgroundColor = "gray";
});

//jawaban no 6
const btn_6 = document.getElementById("buttonEnam");
btn_6.addEventListener("click", function () {
  const p1 = document.querySelector("#a .p1");
  const h2 = document.createElement("h2");
  const text = document.createTextNode("Selamat datang User Dojo.id");
  h2.appendChild(text);
  const sectionA = document.getElementById("a");
  sectionA.replaceChild(h2, p1);
});

//jawaban no 7
const btn_7 = document.getElementById("buttonTujuh");
btn_7.addEventListener("click", function () {
  const newLI = document.createElement("li");
  const isi = document.createTextNode("Ruben Ambarita");
  newLI.appendChild(isi);

  const wadahli = document.querySelector("#b ul");
  const ruben = wadahli.querySelector("li:nth-child(4)");
  const jojo = wadahli.querySelector("li:nth-child(1)");
  wadahli.insertBefore(newLI, ruben);
  wadahli.removeChild(jojo);
});

//jawaban no 8
const btn_8 = document.getElementById("buttonDelapan");
btn_8.addEventListener("click", function () {
  const h1 = document.createElement("h1");
  const isi = document.createTextNode("Post Test");
  h1.appendChild(isi);

  const wadah = document.getElementsByTagName("Body")[0];
  const h2 = document.getElementById("judul");
  wadah.replaceChild(h1, h2);
});

// jawaban no 9
const btn_9 = document.getElementById("buttonSembilan");
btn_9.addEventListener("click", function () {
  const a = document.getElementsByTagName("a")[0];
  a.remove();
});

// jawaban no 10
const btn_10 = document.getElementById("buttonSepuluh");
btn_10.addEventListener("click", function () {
  const a_baru = document.createElement("a");
  const isi = document.createTextNode("Github Ruben");
  a_baru.appendChild(isi);
  a_baru.href = "https://github.com/RubenAmbarita";
  a_baru.onclick = "loadScript()";
  const a = document.getElementById("a");
  a.appendChild(a_baru);
});
