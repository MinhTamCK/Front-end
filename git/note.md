#How to save user authentication / credentials in TortoiseGit.

For TortoiseGit 1.8.1.2 or later, there is a GUI to switch on/off credential helper.

It supports git-credential-wincred and git-credential-winstore.

TortoiseGit 1.8.16 add support for git-credential-manager (Git Credential Manager, the successor of git-credential-winstore)

For the first time you sync you are asked for user and password, you enter them and they will be saved to Windows credential store. It won't ask for user or password the next time you sync.

To use: Right click → TortoiseGit → Settings → Git → Credential. Select Credential helper: wincred - this repository only / wincred - current Windows user
![Image of stack overflow](http://i.stack.imgur.com/egH6L.png)
