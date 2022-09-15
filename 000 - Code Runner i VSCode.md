# Code Runner i VSCode

##### (för att köra och visa JavaScript i VSCode console istället för att ha console öppen i en browser)

1. Ladda ned och installera NodeJS https://nodejs.org/en/ (vi kommer antagligen använda det någon gång i framtiden)
2. I VSCode, hitta Extensions till vänster bland ikonerna och sök efter Code Runner
3. Klicka på Code Runner och sedan Install
4. Skapa en ny fil och copypastea `console.log("Success!");`
5. Tryck Ctrl+Alt+n för att köra koden och visa output
6. **Success!** (förhoppningsvis)

Tips 1: Man kan byta knappen i Ctrl+k Ctrl+s (sök efter Run Code)

Tips 2: Ifall man gör något som bara fungerar i en browser (t.ex komma åt document) kan man lägga till en if för att inte få error i VSCode console:

```js
//from https://flaviocopes.com/error-document-not-defined/
if (typeof window !== 'undefined') {
  //here `window` is available, so `window.document` (or simply `document`) is available too

  function editParagraphs() {
    let paragraph = document.querySelector("p");
    paragraph.innerText = "ändrad paragraphtext";
  }
  editParagraphs();
}
```