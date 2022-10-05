# Snippet med multi-command i VSCode

##### En key för att lägga till console.log(); med eller utan något markerat genom flera kommandon och en snippet med hjälp av extensionen multi-command

1. I extensions till vänster sök efter multi-command och installera
2. öppna Command Palette (View - Command Palette... ) och sök efter Settings, öppna Open Settings (JSON) (inte default!)
3. Lägg till följande längst ned (lägg till komma om det inte finns)
```"multiCommand.commands": [
        {
            "command": "multiCommand.createConsoleLog",
            "sequence": [
                "cursorHome",
                "cursorEndSelect",
                {   
                    "command": "editor.action.insertSnippet",
                    "args": {
                        "snippet": "console.log(${TM_SELECTED_TEXT}$1);"
                    }
                },
                "leaveSnippet"

            ]
        }        
      ],
```
Detta kommand kör fyra kommandon:
 1. cursorHome (som att trycka på Home för att hoppa längst till vänster)
 2. cursorEndSelect (som att trycka shift+End för att markera allt till höger på raden)
 3. editor.action.insertSnippet med argumentet "console.log(${TM_SELECTED_TEXT}$1);" för att lägga till en console.log med den markerade texten (om den finns) och sätta cursor  location till $1 som är innanför ()
 4. leaveSnippet för att "hoppa ut" ur snippeten så man får tillbaka autocomplete igen (vanligtvis stängs det av i snippets så man inte autocompletar allt möjligt av misstag när man tabbar mellan alla fält)

4. öppna Command Palette (View - Command Palette... ) och sök efter Keyboard, öppna Open Keyboard Shortcuts (JSON) (inte default!)
5. Lägg till följande längst ned (lägg till komma om det inte finns)
```
{
        "key": "ctrl+l",
        "command": "multiCommand.createConsoleLog",
        "when": "editorLangId == javascript && editorTextFocus",
    },
```
6. ändra "key": om det behövs (tror att ctrl+l är något annat default) alternativt öppna Edit - Preferences - Keyboard Shortcuts, sök efter ctrl+l och ta bort den funktionen som fanns där innan
7. I en .js-fil tryck på ctrl+l (eller din key) för att lägga till en console.log(); där du direkt kan skriva in vad du vill logga
Du kan också köra den på en rad där kod redan finns för att lägga in koden i en console.log();
8. Success!

Tips: man kan också lägga till nya multicommands, lägg till kommandnamnet och alla commands i settings.json och "key",  "command och "when" i keybindings.json
Mer info om snippets https://code.visualstudio.com/docs/editor/userdefinedsnippets