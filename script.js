
function show() {
    var pdfContainer = document.getElementById('pdf-container'); // i had to google this one...
    pdfContainer.style.display = 'block';
}


const correctPassword = '010124'; // makes sense...right

while (true) {
    const password = prompt("enter the password...no hints :3");

    if (password === correctPassword) {
        const gf= 'jo'; // :3

        const heartPattern = `
        @@@@@@@@@@@                @@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@@@@
                       @@@@@@@@@@@@
                            @@
`;

     function romanticize(name) {
         let result = heartPattern;

         while (result.includes('@')) {
             for (const letter of name) {
                 result = result.replace('@', letter); // it's clicking...
              }
         }

         return result;
      }

      function ily(name) {
          const romanticizedHeart = romanticize(name);

          return `<pre style="color: red;">${romanticizedHeart}</pre>
<p style="color: #e08a00; font-weight: bold;">i <3 you very much ${name}...happy valentine's day!</p>`;
      }

      const contentContainer = document.createElement('div');
      contentContainer.id = 'content-container';
      contentContainer.innerHTML = ily(gf);
      document.body.appendChild(contentContainer);

      // add pdf iframe
      const pdfContainer = document.createElement('iframe');
      pdfContainer.src = 'https://drive.google.com/file/d/0BzqamgVU2LXYRHZQSEMxdzg0Y2c1Vk5qMlVBTFZwNmRmSXZV/preview?resourcekey=0-L0CpNGOIOK_aoEiLO-8iXw'; 
      pdfContainer.id = 'pdf-container';
      pdfContainer.style.display = 'none'; // hide initially
      document.body.appendChild(pdfContainer);

      const showPdfButton = document.createElement('button');
      showPdfButton.innerText = "only click this when you're ready :)";
      showPdfButton.classList.add('button-style');
      showPdfButton.addEventListener('click', showPdf);
      contentContainer.appendChild(showPdfButton);

      function showPdf() {
          // call the show function to display the pdf...?
          show();
      }

      // add spotify playlist iframe
      const spotifyContainer = document.createElement('div');
      spotifyContainer.id = 'spotify-container';
      spotifyContainer.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4Um9ftAFBC2ASiTipJ40fT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      document.body.appendChild(spotifyContainer);

      // add snoops
      const picContainer = document.createElement('img');
      picContainer.src = 'assets/snoopy_card.jpeg'; 
      picContainer.id = 'pic-container';
      document.body.appendChild(picContainer);
	    
      break; // exit the loop once the correct password is entered
      } else {
          alert('wrong...try again silly :p');
      }
}
