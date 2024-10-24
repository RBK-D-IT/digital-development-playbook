---
sidebar_position: 3
---

# Naming Conventions

## Overview

This document outlines the **naming conventions** that our team follows across various aspects of development to ensure consistency, clarity, and maintainability. These guidelines apply to GitHub repositories, AWS resources, APIs, and other key components.

---

## 1. GitHub Repository Naming Conventions

All GitHub repositories must follow a consistent naming convention to improve organization and clarity. The following rules apply to all **GitHub repositories**.

**Repository Naming Convention Structure**

digital-[project-type]-[project-name]-[optional-context]

- `[project-type]`: The type of project (e.g., `api`, `app`, `web`, `cdk`, `lib`, `tool`, `template`).
- `[project-name]`: A descriptive name for the project.
- `[optional-context]`: (Optional) Further context if required to clarify the purpose of the repository.

**Project Types**

1. **API Projects:** `digital-api-[project-name]`
2. **Application Projects:** `digital-app-[project-name]`
3. **Web Projects:** `digital-web-[project-name]`
4. **CDK Projects:** `digital-cdk-[project-name]`
5. **Library Projects:** `digital-lib-[project-name]`
6. **Tool Projects:** `digital-tool-[project-name]`
7. **Template/Example Projects:** `digital-template-[project-type]-[context]`

**Examples of Each Project Type**

1. **API Projects:**

   - `digital-api-spatial-search`
   - `digital-api-middleman-waste`

2. **Application Projects:**

   - `digital-app-free-school-meals`
   - `digital-app-corporate-warnings`

3. **Web Projects:**

   - `digital-web-customer-platform-maps`
   - `digital-web-address-search`

4. **CDK Projects:**

   - `digital-cdk-api-deployment`
   - `digital-cdk-blazor-deployment`

5. **Library Projects:**

   - `digital-lib-authentication`
   - `digital-lib-logging`

6. **Tool Projects:**

   - `digital-tool-dtf-importer`
   - `digital-tool-code-generator`

7. **Template/Example Projects:**
   - `digital-template-api-enhanced`
   - `digital-template-app-crud-basic`

---

## 2. Git Branch and Commit Naming Conventions

Branch names should clearly indicate the type of work being done. They are structured to quickly convey the purpose of the branch and help organize tasks. While similar to conventional commit types, branch naming is broader and identifies a set of changes rather than individual updates. If applicable, the issue ticket reference should be prefixed to the branch name to ensure easy tracking between the code and the associated task or issue.

**Branch Naming Format**:

- `feature/`: For new features or enhancements. Examples: `feature/AB-123-add-login-page`, `feature/add-user-profile`
- `bugfix/`: For resolving bugs. Examples: `bugfix/AB-456-fix-header-alignment`, `bugfix/address-memory-leak`
- `hotfix/`: For urgent production fixes. Examples: `hotfix/critical-security-fix`, `hotfix/security-patch`
- `task/`: For all other tasks, including maintenance, refactoring, updates, and documentation. Examples: `task/AB-789-update-dependencies`, `task/refactor-auth-module`

By using these four prefixes, we ensure that branches are easy to understand and manage without overcomplicating the naming process.

**Commit Naming (Conventional Commits) Format**:

- For consistency, all commit messages should follow the Conventional Commits format.
- This structure helps to automate versioning, changelogs, and makes it easier to understand the purpose of each change.
- For more details on how to write proper commit messages, see the [Coding Standards](coding-standards.md#commit-message-standards-conventional-commits) page.

---

## 3. AWS Resource Naming Conventions

Consistent naming in AWS resources helps to quickly identify the purpose and environment of resources. The following conventions apply to common AWS services such as **IAM roles**, **Lambda functions**, and **S3 buckets**.

**General Guidelines**:

- Use **lowercase letters**, numbers, and **hyphens** (`-`) to separate words.
- **Prefix** resource names with the **environment** (`dev`, `test`, `prod`) to easily identify where resources are deployed.
- Include the **service type** in the name (e.g., `lambda`, `s3`, `iam`).
- Keep names **short** but **descriptive**.

**IAM Roles and Policies**

IAM roles and policies must follow a consistent naming convention to improve clarity and maintainability. The format for IAM roles and policies is as follows:

**Format**:

Digital-[purpose]-[Role|RolePolicy]

- `Digital-`: All IAM roles and policies start with `Digital-`.
- `[purpose]`: A descriptive term for the function of the role (e.g., `APILambdaDeployment`, `S3BackupManagement`).
- `[Role | RolePolicy]`: Ends with either `Role` or `RolePolicy` depending on whether it's a role or a policy.

**Examples**:

- **IAM Role**: `Digital-APILambdaDeploymentRole`
- **IAM Role Policy**: `Digital-APILambdaDeploymentRolePolicy`

**Lambda Functions**

Lambda function names follow a consistent pattern based on the **project name** and **function name**, ensuring clarity in identifying what each function does and to which project it belongs.

**Format**:

[project-name]-[function-name]

- `[project-name]`: The name of the project, representing the overall service or functionality.
- `[function-name]`: The specific name of the Lambda function, based on its purpose or the functionality it provides.

**Examples**:

- `BaseAPI-GetSystemStatus`
- `WasteAPI-AddUser`

**API Gateway (AWS)**

The **API Gateway** is responsible for managing and routing API requests to Lambda functions. In the **AWS infrastructure context**, we focus on how the **API Gateway** is named and structured.

**API Gateway Naming Convention**:

[project-name]Api

- `[project-name]`: The name of the project or service.

**Resource Path Naming**:

/api/[resource-path]

- `/api/`: Base path for all API resources.
- `[resource-path]`: Path based on the function and the resource being accessed.

**Examples**:

- **API Gateway Name**: `user-managementApi`
- **API Gateway Resource Path**: `/api/create-user`, `/api/orders/get-order`

**API Gateway Stage Names**:

The stage name is based on the environment (e.g., `dev`, `test`, `prod`).

**Examples**:

- **Stage Names**: `development`, `production`

---

## 4. API Design Naming Conventions

In this section, we focus on how to design and structure **API endpoints**, independent of the AWS infrastructure. This covers how APIs should be named and accessed from a development perspective.

**General Guidelines**:

- Use **nouns** to represent resources (e.g., `users`, `orders`).
- Use **HTTP methods** (GET, POST, PUT, DELETE) to indicate the action being performed.
- Use **lowercase letters** and **hyphens** (`-`) in URLs.
- Keep URLs short and descriptive.

**URL Structure**:

/api/[resource-name]/[resource-id] (for individual resources) /api/[resource-name] (for collections)

- `[resource-name]`: The resource being accessed (e.g., `users`, `orders`).
- `[resource-id]`: The unique identifier for individual resources (when applicable).

**Examples**:

- **Get all users**: `GET /api/users`
- **Get a single user**: `GET /api/users/[userId]`
- **Create a new user**: `POST /api/users`
- **Update a user**: `PUT /api/users/[userId]`
- **Delete a user**: `DELETE /api/users/[userId]`

---

## Conclusion

By maintaining consistent naming conventions across **GitHub repositories**, **AWS resources** (including **Lambda functions** and **API Gateway**), and **API design**, we improve clarity and maintainability throughout the development and deployment process. Team members should adhere to these guidelines to ensure consistency across projects.
