const Color = () => {
  // Hex Code
  const randomNum = Math.floor(Math.random() * 16777215);
  const randomHexCode = "#" + randomNum.toString(16);
  document.body.style.backgroundColor = randomHexCode;
  document.getElementById("color-code").innerText = randomHexCode;
};

//event call
document.getElementById("buttonClick").addEventListener("click", Color);

// init call
Color();
