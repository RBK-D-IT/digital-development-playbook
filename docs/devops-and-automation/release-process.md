# Release Process

**Overview**:  
Our release process ensures that code is properly tested and validated before deployment to production. It includes creating **release candidates**, managing **production releases**, and implementing a **rollback strategy** to maintain application stability.

## 1. Release Candidate (RC)

- Created from the `main` branch once all features and fixes are ready for testing.
- Once a release candidate is created, it will be deployed to the **test environment** as outlined in the [Deployment Process](deployment-process.md).
- Tagged using **semantic versioning** (e.g., `v1.0.0-rc1`).

## 2. Production Release

- Once the release candidate passes testing, a production release is created and deployed to the **production environment** as outlined in the [Deployment Process](deployment-process.md).
- Tagged using **semantic versioning** as a final version (e.g., `v1.0.0`).

## 3. Semantic Versioning

We use **semantic versioning** to label all releases:

- **MAJOR.MINOR.PATCH** format:

  - **MAJOR**: Increases when breaking changes are introduced.
  - **MINOR**: Increases when new features are added.
  - **PATCH**: Increases for backward-compatible bug fixes.

- Release candidates use a suffix (e.g., `v1.0.0-rc1` for the first release candidate of version `1.0.0`).

## 4. Rollback Strategy

- If issues arise in production, we use a rollback mechanism to revert to the last stable release.
- Rollbacks can be automated through the CI/CD pipeline or performed manually when needed.
- Rollbacks are handled during deployment as described in the [Deployment Process](deployment-process.md). Ensure that any rollback follows the defined strategy for minimizing downtime and issues.
