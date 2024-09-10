---
sidebar_position: 2
---

# Release Process

**Overview**:  
Our release process ensures that code is properly tested and validated before deployment to production. It includes creating **release candidates**, managing **production releases**, and implementing a **rollback strategy** to maintain application stability.

## 1. Create Release for Testing

- Created from the `main` branch once all features and fixes are ready for testing.
- Once a release branch created, it will be deployed to the **test environment** as outlined in the [Deployment Process](deployment-process.md).
- Release branch is named using **semantic versioning** (e.g., `release/v1.0.0`).

## 2. Promote Release to Production

- Once the release passes testing, a tag is created on the release branch and deployed to the **production environment** as outlined in the [Deployment Process](deployment-process.md).
- Tagged using **semantic versioning** as a final version (e.g., `v1.0.0`).

## 3. Semantic Versioning

We use **semantic versioning** for release branch naming and labelling all releases:

- **MAJOR.MINOR.PATCH** format:

  - **MAJOR**: Increases when breaking changes are introduced.
  - **MINOR**: Increases when new features are added.
  - **PATCH**: Increases for backward-compatible bug fixes.

## 4. Rollback Strategy

- If issues arise in production, we use a rollback mechanism to revert to the last stable release.
- Rollbacks can be automated through the CI/CD pipeline or performed manually when needed.
- Rollbacks are handled during deployment as described in the [Deployment Process](deployment-process.md). Ensure that any rollback follows the defined strategy for minimizing downtime and issues.
