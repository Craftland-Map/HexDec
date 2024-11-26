
  function textToHex(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
  }

  function lengthToHex(length) {
    return length.toString(16).toUpperCase().padStart(2, '0');
  }

  let myText = document.getElementById("my-text");
  myText.addEventListener("input", () => {
    let text = myText.value;
    let hex = textToHex(text);
    let lengthHex = lengthToHex(text.length);

    document.getElementById("hex-output").textContent = `${lengthHex}${hex}`;
  });

  document.getElementById("hex-output").addEventListener("click", () => {
    let hexOutput = document.getElementById("hex-output").textContent;
    navigator.clipboard.writeText(hexOutput).then(() => {
      alert('Created by Starexx');
    });
  });
