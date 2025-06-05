const quotes = [
    "జీవితమే గొప్ప గురువు.",
    "కొన్ని సార్లు బాధని దాచాలి అనుకున్నప్పుడే, నిజాన్ని దాచాల్సిన పని ఉంటుంది !!",
    "ప్రశ్నలు అడగటం ఓ కళ… కానీ సమాధానాలను వినిపించకుండానే అర్థం చేసుకోవడమే జీవితం !",
    "గెలుపు ఒక్క అడుగు దూరంలోనే ఉందని తెలిసినా,ఆ అడుగు వేయకుండా ఆగిపోయిన క్షణం... ఎందుకంటే నా ఓటమిలో,నా అనుకున్నవాళ్లగెలుపు ఉందని తెలిసినప్పుడు ఆగిపోవడమే నిజమైన  ప్రేమంటే",
    "గెలుపు మలుపు తీసుకున్నదానికంటే, మనసు మలుపు తీసుకున్న ప్రతిసారి నిజమైన విజయమే",


"కష్టం ఎంతైనా తీరిపోతుంది, కానీ తట్టుకున్న ధైర్యం, నేర్చుకున్న పాఠం మాత్రం జీవితాంతం నీతోనే ఉంటుంది.",
  ];
  
  const quoteBox = document.getElementById('quote-box');
  
  function showQuote() {
    if (!quoteBox) return;
    let index = 0;
  
    quoteBox.style.display = 'block';
  
    function displayNextQuote() {
      quoteBox.classList.remove('visible');
      setTimeout(() => {
        quoteBox.textContent = quotes[index];
        quoteBox.classList.add('visible');
        index = (index + 1) % quotes.length;
      }, 1000); // 1s fade out
    }
  
    displayNextQuote(); // Initial quote
    setInterval(displayNextQuote, 8000); // every 8 seconds
  }
  
  // Bell Sound
  const bellButton = document.getElementById('bell-button');
  const bellAudio = document.getElementById('bell-audio');
  
  bellButton?.addEventListener('click', () => {
    bellAudio.currentTime = 0;
    bellAudio.play();
  });