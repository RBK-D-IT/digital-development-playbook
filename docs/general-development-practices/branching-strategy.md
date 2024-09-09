# Branching Strategy and Git Workflow

## Overview

Our team follows a modified version of **GitHub Flow** as our primary branching strategy, which integrates **release branches** to manage production readiness and releases more effectively. This strategy encourages frequent collaboration and continuous integration, with **feature branches** for development, **release branches** for preparing production releases, and deployments managed through GitHub and CI/CD pipelines.

## Key Concepts

1. **`main` Branch**:

   - The `main` branch reflects the **latest stable development version** of the code.
   - Merging into `main` automatically deploys the code to the **development environment** (dev), where internal testing is performed.
   - **Production readiness** is determined through a separate release process. Code in `main` is not deployed to production until it has passed all tests and is approved via a formal GitHub Release.

2. **Feature Branches**:

   - Each new feature or bug fix is developed in a separate branch created off of `main`.
   - Feature branches should be named descriptively, including an issue ticket reference if applicable (e.g., `feature/AB-123-web-content-updates`, `feature/login-page` or `bugfix/fix-header-alignment`).
   - All changes are tested locally or in feature-specific environments before being merged into `main`.

3. **Pull Requests (PRs)**:

   - Once a feature or fix is complete, create a pull request (PR) to merge the changes into the `main` branch.
   - PRs must be reviewed and approved by at least one other team member before merging.
   - Automated tests (via CI pipelines) will run against each PR to ensure stability.

4. **Merging to `main`**:

   - After a pull request is approved and all tests pass, the feature branch is merged into the `main` branch.
   - Merging to `main` triggers an automatic deployment to the **development environment** for internal testing and iteration.

5. **Release Branches**:

   - When the code in `main` is considered stable and ready for further testing, a release branch is created.
   - The release branch isolates the version of the code that is intended for production, allowing ongoing work in `main` without affecting the release.
   - Example release branch naming convention: `release/v1.1.0`.
   - The release branch undergoes thorough testing in the **test environment**, including **User Acceptance Testing (UAT)**, before being tagged for production.

6. **Release Process**:
   - The code in `main` becomes **production-ready** only after it has passed testing in the **test environment** via promotion to a **release branch**.
   - If the release branch passes all tests, it is tagged as a **production release** and deployed to the **production environment**.
   - For details on the release and deployment process, refer to the [Deployment Process](../devops-and-automation/deployment-process.md) document.

## Workflow Example

1. **Create a Branch**:

   - From the `main` branch, create a feature branch:
     ```bash
     git checkout -b feature/your-feature-name
     ```

2. **Work on Your Feature**:

   - Make meaningful commits to the feature branch, following the [Conventional Commits](../general-development-practices/coding-standards.md#commit-message-standards-conventional-commits) specification for commit messages.
   - Commit messages should include a type (e.g., `feat`, `fix`) and a short description of the change.

3. **Push Your Branch to GitHub**:

   - Push your branch to the remote repository:
     ```bash
     git push origin feature/your-feature-name
     ```

4. **Open a Pull Request**:

   - Once the feature is complete, open a pull request to merge your feature branch into `main`.

5. **Review and Merge**:

   - After your pull request has been reviewed and approved, and all CI tests pass, merge the feature branch into `main`.
   - This will trigger an automatic deployment to the **development environment**.

6. **Create a Release**:
   - Once the code in `main` is stable and ready for production, follow the release process to create a release and deploy it to **test** and eventually **production**.
   - For detailed instructions on creating releases, see the [Release Process](../devops-and-automation/release-process.md).
