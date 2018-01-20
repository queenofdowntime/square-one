# Mac OSX Setup
(Do not worry too much about the commands we are running here: all will be explained soon, this is just to get your system ready to go. If you are curious, feel free to google to your heart's content.)

## iTerm
A [terminal](https://techterms.com/definition/terminal) emulator which is better than the one installed as standard.
1. Go to [iTerm2](https://www.iterm2.com/downloads.html) and follow installation instructions
1. Hold `cmd` and hit the spacebar.
1. Start typing `iTerm2` and hit return/enter when you see the app you want.
1. Type `cmd` + `,` to set colourscheme, font and other preferences.
1. Right click the iTerm icon in your dock, select `Options`, then `Keep in Dock`.
Use iTerm rather than Terminal in future.

## Command Line Tools
Apple's developer tools.
1. Copy and paste the following into your terminal and press Enter:

  `xcode-select --install`

1. Click `install`, `agree` and `done` when the various pop-ups appear.

## git
Git is a version control system which lets you publish your work online and save
versions of your code as you progress. Saving (or 'committing') work as you go
means that you never really lose earlier versions: you can return to a previous
state at any moment.
1. Type the following into your terminal and press Enter:

  ```
  git --version
  ```

1. Sign up for [Github](https://github.com/) if you have not already done so, and complete their beginner's guide.
1. Run the following two commands to save your login information to your computer. Every time you "push" (save) code to git, these credentials will be used to identify you.
(The things in caps are placeholders, please use your actual information.)

  ```
  git config --global user.email "YOUR EMAIL ADDRESS"
  git config --global user.name "YOUR GITHUB USERNAME or ACTUAL NAME"
  ```

1. Run `ssh-keygen -t rsa -b 4096 -C "YOUR EMAIL ADDRESS"`. (Hit return to any prompts until complete.)
1. Start the SSH agent with `eval "$(ssh-agent -s)"`. ([SSH](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys) is a form of security)
1. Add your new key to the agent: `ssh-add ~/.ssh/id_rsa`.
1. Copy your public key to the clipboard:

  ```
  # either
  pbcopy < ~/.ssh/id_rsa.pub
  # or
  cat ~/.ssh/id_rsa.pub | pbcopy
  # these commands are the equivalent of looking at the file and pressing <Command-C>
  ```

1. Login to Github in a browser. Go to `Settings > SSH and GPG keys > New SSH key / Add SSH key`.
1. Fill in the form fields with a name and your copied public key and click save.

## Homebrew
Homebrew is a 'package manager' for Mac: it allows you to install useful programs
to help you develop code and make your terminal prettier.
1. Copy and paste into your terminal

  ```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

1. Run `brew doctor`: it should return `Your system is ready to brew`.

## Atom
Atom is a Text Editor - the program you will use to write your code.
1. Go to [atom.io](https://atom.io/) and follow the installation instructions.
1. Right click the Atom icon in your dock, select `Options`, then `Keep in Dock`.


[source](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/)

