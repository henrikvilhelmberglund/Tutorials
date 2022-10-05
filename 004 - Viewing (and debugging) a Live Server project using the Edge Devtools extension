# Viewing (and debugging) a Live Server project using the Edge Devtools extension

#### (Note: Slightly janky)

## Purpose: to view (or debug) a Live Server project in an embedded Edge browser in VSCode itself with console, elements and so on also visible

### Viewing
0a. If you don't already have Live Server, in extensions in the left side panel search for Live Server and install it.
0b. If you don't have Edge (Dev version), go to https://www.microsoftedgeinsider.com/en-us/download to download it .
1. In extensions in the left side panel search for Edge Devtools and install it.
2. Now we need a launch.json for the project, click the Microsoft Edge Tools icon in the left side panel and in your code folder (workspace) click Generate launch.json.
3. Some entries will be added to the launch.json file but we need one more for starting Edge Devtools without debugging.
4. Open Run and Debug in the left side panel and click the Open launch.json icon.
5. In there paste the following at the top inside of configurations.
```
{
        "name": "Open App (Headless)",
        "request": "launch",
        "type": "vscode-edge-devtools.debug",
        "url": "http://localhost:5500",
        "webRoot": "${workspaceFolder}"
      },
```
6. This command will launch the Edge Devtools as an embedded browser along with developer tools but without debugging functionality. This is useful for just viewing your web project as you're building it.
7. Go to Keyboard Shortcuts and a shortcut key for Debug: Start Debugging and make sure Open App (Headless) is selected in the dropdown. This isn't really headless anymore by the way so you can change the name if you want to.
8. To make the Live Server experience even better when using Edge Devtools, go to Settings and search for auto save, change Auto Save to afterDelay and the Auto Save Delay to 400ms.
9. Next search for live server delay and change Live Server Wait to 410ms. By doing this your unsaved files will auto save after 400ms after changes are made and Live Server will automatically reload the page after 410ms. This means you can see your changes as you are coding.
10. Success! (for viewing, just press the shortcut key)

### Debugging
0. Start with Viewing if you didn't do it yet to set up the basics.
1. Open an .html file in your project and then Go Live to start the Live Server if it wasn't started yet.
2. Click the Microsoft Edge Tools icon in the left side panel and then Launch Project. If it says Launch Instance you may need to open your project as a folder. 
3. This should start debugging for your project (you can see a small bar with different buttons).
For more information on debugging itself see https://code.visualstudio.com/docs/editor/debugging
4. When you are done debugging click the red button and Edge Devtools will close. This is the janky part.
5. To get back Edge Devtools for viewing the project without debugging press your shortcut key for Debug: Start Debugging.
6. Success!