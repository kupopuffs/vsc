function hideActivityBar() {
    //command:workbench.action.toggleActivityBarVisibility
  vscode.commands.executeCommand('workbench.action.toggleActivityBarVisibility');
}

console.log("in vsc.js");
// setTimeout(hideActivityBar, 5000);