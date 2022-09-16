# Snippets i VSCode

##### (inbyggd funktion som infogar kod för funktioner, if-else och mycket annat)

1. Kör ctrl+k ctrl+s för att öppna Keyboard Shortcuts, sök efter snippet och se hotkey för kommandet editor.action.showSnippets (jag glömde bort vad det var default)
2. I en .js-fil tryck på hotkeyn, du får en lista där du kan välja (och söka) efter en viss snippet
3. Sök efter t.ex function genom att skriva fu, tryck enter och du får följande 
```js
function name(params) {
  
}
```
4. "name" markeras och du kan börja skriva för att skriva över namnet med det du vill
5. Om du trycker på tab hoppar cursorn till "params" där du kan skriva över parameters också
6. Om du trycker på tab igen hoppar cursorn till nästa rad där du kan skriva själva funktionen
7. Innan du hoppar till {} kan du också trycka shift-tab för att hoppa tillbaka men när du har kommit till {} hoppar du ut ur snippeten så du får autocomplete igen
8. Success!

Mer info https://code.visualstudio.com/docs/editor/userdefinedsnippets