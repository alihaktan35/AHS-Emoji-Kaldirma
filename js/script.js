function removeEmojisOnEnter(event) {
  if (event.keyCode === 13) { // Enter key
    removeEmojis();
  }
}

function removeEmojis() {
  const inputText = document.getElementById('inputText').value;
  const regex = /[\u{1F300}-\u{1FAD6}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FA73}\u{1F004}\u{1F0CF}\u{1F18E}\u{1F191}-\u{1F251}\u{1F300}-\u{1F3FA}\u{1F400}-\u{1F6D2}\u{1F6E0}-\u{1F6FC}\u{1F700}-\u{1F773}\u{1F780}-\u{1F7D4}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F900}-\u{1F90B}\u{1F910}-\u{1F93E}\u{1F940}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}-\u{1F9CB}\u{1F9CD}-\u{1F9FF}\u{1FA70}-\u{1FA74}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA86}\u{1FA90}-\u{1FAA8}\u{1FAD0}-\u{1FAD6}]/gu;
  const removedEmojis = inputText.replace(regex, '');
  const outputLink = document.getElementById('outputLink');

  if (removedEmojis) {
    outputLink.innerHTML = `<a href="${removedEmojis}" target="_blank">${removedEmojis}</a>`;
  } else {
    outputLink.textContent = 'Lütfen geçerli bir link girin.';
  }
}

document.getElementById('inputText').addEventListener('keypress', removeEmojisOnEnter);
