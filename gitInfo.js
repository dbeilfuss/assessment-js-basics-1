/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition =
  "Git is a program that tracks changes to files.  You dicide which folders you'd like to track, and have Git create a repository within that folder.  Then it will track any changes made within that folder, and sub-folders going forward.  You can commit your files to the git repository as often as you like; and each time you do, that commit functions as a kind of save point that you can always go back to.  Git is a really powerful way to store a complete version history of many files.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition =
  "GitHub is a popular, off-site (remote), cloud-based location for storing Git repositories.  When you push your Gits to GitHub, it stores a copy of the complete Git, with version history.  This means you still have access to your data, even if you no longer have access to your computer.  GitHub can also provides a powerful way to collaborate and share your data with others.  GitHub is a strong resource used by programmers across the world.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition =
  "'Git init' is the command you execute to create a Git Repository.  You execute this command in the terminal, from within the folder directory that you want to track.  it should be followed up with the 'git add .' and 'git commit' commands.  The '.' in 'git add .' indicates 'all files and folders'.  Using this command will stage all the files and folders contained in the current directory, making them ready to be committed.  You will then need to commit these files to the Git with the 'git commit' command.  Doing so adds the current version of the files to the Git repository, so you'll want to do it often.  None of this can happen unless you initiate the git repository in the first place, which is done with 'git init'.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition =
  "'git clone' creates a local copy of a remote git repository, placing the copy on your own computer.  By default, the local copy is connected to the remote copy - if you have the necessary permissions.  This allows you to easily syncronize changes to and from the remote repository.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition =
  "The command 'git status' is used to check the status of your current repository.  You can see which files have been changed/modified, and which staged/ready for the next commit.  It also tells you if there are any files and folders in the current directory that are not being tracked in your repository.  If these files exist, and you want them tracked, you'll want to add them with the 'git add' command.  'git status' gives you a quick snapshot of the current status of your git, what will change if you order a 'git commit', and what will not.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition =
  "I have already referenced 'git add' a couple of times above.  'git add' is a command used to stage files and folders.  Essentially, it tells git 'this is what I want to track.  Any files and folders not tracked will have no version history within the git repository, will not appear in the remote repository, indeed, as far as git is concerned, they do not exist.  This can be helpful if for some reason there are files you do not wish to track - perhaps they contain personal or sensitive data.  It is important though to track everything that is relevant to your project.  It'd be a shame to loose it.";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition =
  "The command 'git commit' is used to create a saved state of any files and folders that are being tracked by git in your git repository.  It creates a point that you can go back to in the future if you need to reference something, or if you have broken the functionality of your app.  Using 'git commit' often can save a huge amount of time, as you can simply revert to where you were instead of having to figure our what you changed.";
let gitCommitCode =
  "git commit -am 'added all kinds of amazing code to an already amazing app'";

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition =
  "The command 'git push' takes your local repository of git commits, and copies it to your remote repository in, for example, Git Hub.  This allows any changes you've made to be saved in an offsight location, and allows for collaboration.  In addition to 'git commit', you should run 'git push' with some regularity.  Imagine accidentally running over your computer and loosing everything.  I hope you recently 'git push'ed your repository to Git Hub.  If so, nothing is truly lost.";
