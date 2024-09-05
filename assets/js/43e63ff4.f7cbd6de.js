"use strict";(self.webpackChunkdigital_development_playbook=self.webpackChunkdigital_development_playbook||[]).push([[640],{750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(4848),r=s(8453);const l={},t="Code Review Process and Standards",o={id:"general-development-practices/code-review-process-and-standards",title:"Code Review Process and Standards",description:"Overview",source:"@site/docs/general-development-practices/code-review-process-and-standards.md",sourceDirName:"general-development-practices",slug:"/general-development-practices/code-review-process-and-standards",permalink:"/digital-development-playbook/general-development-practices/code-review-process-and-standards",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/general-development-practices/code-review-process-and-standards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branching Strategy and Git Workflow",permalink:"/digital-development-playbook/general-development-practices/branching-strategy"},next:{title:"Coding Standards",permalink:"/digital-development-playbook/general-development-practices/coding-standards"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Code Review Workflow",id:"code-review-workflow",level:2},{value:"Code Review Guidelines",id:"code-review-guidelines",level:2},{value:"For Reviewers",id:"for-reviewers",level:3},{value:"For Authors",id:"for-authors",level:3},{value:"Merge Strategy",id:"merge-strategy",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"code-review-process-and-standards",children:"Code Review Process and Standards"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Code reviews are a critical part of our development workflow, ensuring code quality, consistency, and sharing of knowledge across the team. Every pull request (PR) must be reviewed and approved before being merged into the ",(0,i.jsx)(n.code,{children:"main"})," branch. The review process helps catch bugs, improve design, and ensure maintainability."]}),"\n",(0,i.jsx)(n.h2,{id:"code-review-workflow",children:"Code Review Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Submit a Pull Request"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After completing a feature or bug fix, submit a pull request (PR) targeting the ",(0,i.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,i.jsxs)(n.li,{children:["Include the following in the PR description:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A clear summary of the changes made."}),"\n",(0,i.jsx)(n.li,{children:"Issue ticket reference (if applicable)."}),"\n",(0,i.jsx)(n.li,{children:"Screenshots, logs, or any other supporting information when necessary."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Review the PR"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"At least one team member must review the PR before it can be merged."}),"\n",(0,i.jsxs)(n.li,{children:["The reviewer will:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Check for Code Quality"}),": Ensure that the code is clean, well-structured, and follows the team's ",(0,i.jsx)(n.a,{href:"/digital-development-playbook/general-development-practices/coding-standards",children:"coding standards"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Test Coverage"}),": Confirm that the new code has appropriate unit tests, and ensure that existing tests pass."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Functionality"}),": Verify that the feature works as expected by testing locally when applicable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security"}),": Check for potential security vulnerabilities, especially when dealing with sensitive data (e.g., authentication, authorization)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance"}),": Look for possible performance optimizations, especially for high-impact areas like database queries or API calls."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Address Feedback"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the reviewer requests changes, the author should update the code in the same branch and notify the reviewer once the changes are complete."}),"\n",(0,i.jsx)(n.li,{children:"Keep the feedback loop fast by responding promptly and addressing issues as clearly as possible."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Approval and Merge"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once the reviewer is satisfied, they will approve the PR."}),"\n",(0,i.jsx)(n.li,{children:"Ensure all CI checks (tests, linters, etc.) have passed before merging."}),"\n",(0,i.jsxs)(n.li,{children:["Merge the PR into ",(0,i.jsx)(n.code,{children:"main"}),", and delete the feature branch to keep the repository clean."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Continuous Integration (CI) Checks"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before merging, the PR must pass all automated CI checks, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unit tests"}),"\n",(0,i.jsx)(n.li,{children:"Integration tests"}),"\n",(0,i.jsx)(n.li,{children:"Linting (e.g., ESLint, Pylint)"}),"\n",(0,i.jsx)(n.li,{children:"Any other configured tests (e.g., end-to-end tests)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-review-guidelines",children:"Code Review Guidelines"}),"\n",(0,i.jsx)(n.h3,{id:"for-reviewers",children:"For Reviewers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Be Constructive"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Provide clear, actionable feedback."}),"\n",(0,i.jsx)(n.li,{children:"Use comments to suggest improvements rather than just point out problems."}),"\n",(0,i.jsx)(n.li,{children:"Encourage learning by explaining why something should be done differently if necessary."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Focus on the Code, Not the Person"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Review the code objectively. Avoid criticizing the author personally."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Be Timely"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aim to review PRs as soon as possible, ideally within 24 hours."}),"\n",(0,i.jsx)(n.li,{children:"A delayed review can hold up the progress of a feature and affect the team's velocity."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Test Locally"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the change is significant or affects a key part of the application, pull the branch locally and test the functionality yourself."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ensure Alignment with Team Standards"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify that the code aligns with team conventions and coding standards, such as code formatting, naming conventions, and architectural patterns."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"for-authors",children:"For Authors"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Keep PRs Small and Focused"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PRs should address a single issue or feature to make them easier to review. Avoid bundling multiple changes into one PR."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Provide Context"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Write clear PR descriptions. Assume the reviewer is not familiar with the full context of your changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Be Open to Feedback"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Code reviews are an opportunity to learn. Be receptive to suggestions and improvements."}),"\n",(0,i.jsx)(n.li,{children:"Discuss and clarify feedback where necessary, but always keep the review process respectful and productive."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Write Meaningful Commit Messages"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/digital-development-playbook/general-development-practices/coding-standards#commit-message-standards-conventional-commits",children:"Conventional Commits"})," specification to ensure your commit history is clean and informative."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ensure All Tests Pass"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run all applicable tests locally before pushing your branch to GitHub. Ensure that automated tests pass as well before requesting a review."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"merge-strategy",children:"Merge Strategy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We use ",(0,i.jsx)(n.strong,{children:"squash and merge"})," for pull requests to keep the ",(0,i.jsx)(n.code,{children:"main"})," branch history clean and avoid clutter with numerous small commits."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the final commit message after squashing follows the ",(0,i.jsx)(n.a,{href:"/digital-development-playbook/general-development-practices/coding-standards#commit-message-standards-conventional-commits",children:"Conventional Commits"})," format."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);