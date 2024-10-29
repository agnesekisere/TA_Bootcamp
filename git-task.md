# Easy Git Guide: Hands-On Exercises
 
---
 
## Table of Contents
 
-   [Easy Git Guide: Hands-On Exercises](#easy-git-guide-hands-on-exercises)
    -   [Table of Contents](#table-of-contents)
    -   [Introduction to Git and GitHub](#introduction-to-git-and-github)
    -   [Setting Up Your Environment](#setting-up-your-environment)
        -   [Register on GitHub](#register-on-github)
        -   [Install Git](#install-git)
        -   [Install VS Code](#install-vs-code)
    -   [Creating a New Repository on GitHub](#creating-a-new-repository-on-github)
    -   [Setting Up Branch Protection](#setting-up-branch-protection)
    -   [Cloning the Repository in VS Code](#cloning-the-repository-in-vs-code)
    -   [Working with Branches](#working-with-branches)
        -   [Creating a New Branch](#creating-a-new-branch)
        -   [Making Changes and Committing](#making-changes-and-committing)
    -   [Pushing Changes and Creating Pull Requests](#pushing-changes-and-creating-pull-requests)
    -   [Merging Pull Requests](#merging-pull-requests)
    -   [Creating and Resolving Merge Conflicts](#creating-and-resolving-merge-conflicts)
        -   [Creating Conflicting Changes](#creating-conflicting-changes)
        -   [Attempt to Merge and Resolve Conflict](#attempt-to-merge-and-resolve-conflict)
 
---
 
## Introduction to Git and GitHub
 
**Git** is a distributed version control system that allows multiple people to work on the same codebase simultaneously without overwriting each other's changes. **GitHub** is a web-based platform that hosts Git repositories and provides tools for collaboration.
 
---
 
## Setting Up Your Environment
 
### Register on GitHub
 
1.  **Visit GitHub**: Go to [github.com](https://github.com/).
2.  **Sign Up**: Click on the **"Sign up"** button.
3.  **Create an Account**: Follow the on-screen instructions to create your account.
    -   **Username**
    -   **Email Address**
    -   **Password**
4.  **Verify Email**: GitHub will send a verification email. Click the link in the email to verify your account.
 
### Install Git
 
1.  **Download Git**:
    -   **Windows**: [git\-scm.com/download/win](https://git-scm.com/download/win)
    -   **macOS**: [git\-scm.com/download/mac](https://git-scm.com/download/mac)
    -   **Linux**: Use your distribution's package manager (e.g., `sudo apt-get install git`).
2.  **Install Git**:
    -   Run the installer and follow the default settings.
 
### Install VS Code
 
1.  **Download VS Code**: Go to [code.visualstudio.com](https://code.visualstudio.com/) and download the installer for your operating system.
2.  **Install VS Code**:
    -   Run the installer and follow the default settings.
 
---
 
## Creating a New Repository on GitHub
 
1.  **Log In**: Log in to your GitHub account.
2.  **Create New Repository**:
    -   Click the **"+"** icon in the top-right corner and select **"New repository"**.
3.  **Repository Settings**:
    -   **Repository Name**: Enter a name, e.g., `my-first-repo`.
    -   **Description**: Optional.
    -   **Public/Private**: Choose **Public** or **Private**.
    -   **Initialize Repository**: Check **"Add a README file"**.
4.  **Create Repository**: Click **"Create repository"**.
 
---
 
## Setting Up Branch Protection
 
To prevent direct pushes to the `master` branch without a pull request:
 
1.  **Go to Settings**:
    -   In your repository, click on the **"Settings"** tab.
2.  **Branch Protection Rules**:
    -   Click on **"Branches"** in the left sidebar.
    -   Under **"Branch protection rules"**, click **"Add rule"**.
3.  **Configure Rule**:
    -   **Branch name pattern**: Enter `master`.
    -   **Protect against pushes**: Check **"Require pull request reviews before merging"**.
    -   **Include administrators**: Check this to apply the rule to admins as well.
4.  **Save Changes**: Click **"Create"** or **"Save changes"**.
 
---
 
## Cloning the Repository in VS Code
 
1.  **Copy Repository URL**:
 
    -   Click on the **"Code"** button in your repository.
    -   Copy the **HTTPS URL**.
 
2.  **Open VS Code**:
 
    -   Open VS Code on your computer.
 
3.  **Clone Repository**:
 
    -   **Option 1**: Use Command Palette
        -   Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
        -   Type **"Git: Clone"** and select it.
        -   Paste the repository URL.
        -   Choose a local folder to clone into.
    -   **Option 2**: Use Source Control Panel
        -   Click on the **Source Control** icon on the left sidebar.
        -   Click **"Clone Repository"**.
        -   Paste the repository URL.
        -   Choose a local folder to clone into.
 
4.  **Open the Cloned Repository**:
 
    -   When prompted, open the cloned repository.
 
---
 
## Working with Branches
 
### Creating a New Branch
 
1.  **Open Terminal in VS Code**:
 
    -   Go to **"Terminal"** > **"New Terminal"**.
 
2.  **Check Current Branch**:
 
    `git branch`
 
    -   You should see `* master`.
 
3.  **Create and Switch to a New Branch**:
 
    `git checkout -b feature-branch`
 
    -   This creates a new branch called `feature-branch` and switches to it.
 
### Making Changes and Committing
 
1.  **Open README.md**:
 
    -   Locate and open `README.md` in VS Code.
 
2.  **Edit File**:
 
    -   Add a new line: `This is a change in the feature branch.`
 
3.  **Save the File**:
 
    -   Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS).
 
4.  **Stage the Changes**:
 
    -   In VS Code, go to the **Source Control** panel.
    -   You should see the modified `README.md`.
    -   Click the **"+"** icon next to the file to stage it.
 
5.  **Commit the Changes**:
 
    -   In the **Source Control** panel, enter a commit message like `Added a line in feature-branch`.
    -   Click the **"✔"** icon or press `Ctrl+Enter` to commit.
 
---
 
## Pushing Changes and Creating Pull Requests
 
1.  **Push the Branch to GitHub**:
 
    `git push -u origin feature-branch`
 
    -   This pushes your `feature-branch` to GitHub and sets the upstream branch.
 
2.  **Create a Pull Request**:
 
    -   Go to your repository on GitHub.
    -   You'll see a prompt: **"Compare & pull request"**. Click it.
    -   **Review the PR**:
        -   Check the base branch (`master`) and compare branch (`feature-branch`).
        -   Add a description if needed.
    -   **Create PR**: Click **"Create pull request"**.
 
---
 
## Merging Pull Requests
 
1.  **Review the PR**:
 
    -   Optionally, request a review or assign reviewers.
 
2.  **Merge the PR**:
 
    -   Click **"Merge pull request"**.
    -   Confirm by clicking **"Confirm merge"**.
 
3.  **Delete the Branch** (optional):
 
    -   Click **"Delete branch"** after merging.
 
4.  **Update Local Repository**:
 
    -   In VS Code terminal:
 
        `git checkout master git pull`
 
    -   This updates your local `master` branch with the latest changes.
 
---
 
## Creating and Resolving Merge Conflicts
 
### Creating Conflicting Changes
 
1.  **Create a New Branch**:
 
    `git checkout -b conflict-branch`
 
2.  **Edit README.md in conflict-branch**:
 
    -   Change a line to: `This line is edited in conflict-branch.`
 
3.  **Commit Changes**:
 
    -   Stage and commit the changes as before.
 
4.  **Push conflict-branch to GitHub**:
 
    `git push -u origin conflict-branch`
 
5.  **Switch to master and Create Conflicting Change**:
 
    `git checkout master`
 
6.  **Edit README.md in master**:
 
    -   Change the same line to: `This line is edited in master.`
 
7.  **Commit and Push Changes in master**:
 
    -   Stage and commit the changes.
 
    `git push`
 
### Attempt to Merge and Resolve Conflict
 
1.  **Switch back to conflict-branch**:
 
    `git checkout conflict-branch`
 
2.  **Merge master into conflict-branch**:
 
    `git merge master`
 
    -   Git will report a merge conflict.
 
3.  **Resolve the Conflict**:
 
    -   Open `README.md`.
    -   You'll see conflict markers like:
 
        `<<<<<<< HEAD This line is edited in conflict-branch. ======= This line is edited in master. >>>>>>> master`
 
    -   Decide which change to keep or combine them.
    -   For example:
        -   Keep both changes: `This line is edited in conflict-branch and master.`
 
4.  **Stage the Resolved File**:
 
    -   In the Source Control panel, stage `README.md`.
 
5.  **Complete the Merge Commit**:
 
    -   Commit the merge with a message like `Resolved merge conflict`.
 
6.  **Push the Resolved Branch**:
 
    `git push`
 
7.  **Create a Pull Request to Merge conflict-branch into master**:
 
    -   On GitHub, create a PR as before.
    -   Since conflicts are resolved, you can merge the PR.