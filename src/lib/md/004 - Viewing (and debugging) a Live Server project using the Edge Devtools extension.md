# Viewing (and debugging) a Live Server project using the Edge Devtools extension

#### (Note: Slightly janky)

## Purpose: to view (or debug) a Live Server project in an embedded Edge browser in VSCode itself with console, elements and so on also visible



### Viewing
0. If you don't already have Live Server, in extensions in the left side panel search for Live Server and install it.
1. If you don't have Edge (Dev version), go to https://www.microsoftedgeinsider.com/en-us/download to download it .
2. In extensions in the left side panel search for Edge Devtools and install it.
3. Now we need a launch.json for the project, click the Microsoft Edge Tools icon in the left side panel and in your code folder (workspace) click Generate launch.json.
4. Some entries will be added to the launch.json file but we need one more for starting Edge Devtools without debugging.
5. Open Run and Debug in the left side panel and click the Open launch.json icon.
6. In there paste the following at the top inside of configurations.
```
{
        "name": "Open App (Headless)",
        "request": "launch",
        "type": "vscode-edge-devtools.debug",
        "url": "http://localhost:5500",
        "webRoot": "${workspaceFolder}"
      },
```
7. This command will launch the Edge Devtools as an embedded browser along with developer tools but without debugging functionality. This is useful for just viewing your web project as you're building it.
8. Go to Keyboard Shortcuts and a shortcut key for Debug: Start Debugging and make sure Open App (Headless) is selected in the dropdown. This isn't really headless anymore by the way so you can change the name if you want to.
9. To make the Live Server experience even better when using Edge Devtools, go to Settings and search for auto save, change Auto Save to afterDelay and the Auto Save Delay to 400ms.
10. Next search for live server delay and change Live Server Wait to 410ms. By doing this your unsaved files will auto save after 400ms after changes are made and Live Server will automatically reload the page after 410ms. This means you can see your changes as you are coding.
11. Success! (for viewing, just press the shortcut key)

### Debugging
0. Start with Viewing if you didn't do it yet to set up the basics.
1. Open an .html file in your project and then Go Live to start the Live Server if it wasn't started yet.
2. Click the Microsoft Edge Tools icon in the left side panel and then Launch Project. If it says Launch Instance you may need to open your project as a folder. 
3. This should start debugging for your project (you can see a small bar with different buttons).
For more information on debugging itself see https://code.visualstudio.com/docs/editor/debugging
4. To open the console at the bottom of the DevTools window (if it's not there), press escape.
5. When you are done debugging click the red button and Edge Devtools will close. This is the janky part.
6. To get back Edge Devtools for viewing the project without debugging press your shortcut key for Debug: Start Debugging.
7. To add a shortcut key for debugging in Keyboard Shortcuts add a key for Microsoft Edge Tools: Launch project.
8. Success!


### Logpoints

- When debugging is active you can add logpoints by right clicking left of the line numbers to the left and clicking Add Logpoint. 

- It is important to note that these will need to be on a line below the variable definition if you want to log its value (or you will just get back undefined). 

- To get the value of a variable or any expression just surround it with curly braces, so if we had a variable myVariable it would be myVariable inside curly braces.

- One of the powerful features of logpoints is that it doesn't trigger a file save so you can keep your website state (without it refreshing your Live Server page) but it is still possible to add and edit all the logpoints. 

- So, instead of throwing console.log() everywhere and adding/changing our inputs in the site every time we want to see something in the console we can just have debugging running, add a logpoint anywhere in our code or even change our existing logpoints to log what we want without disrupting website/app state for easier debugging. Try it out! 