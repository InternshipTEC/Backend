
# Running the server

### Requirements
- Node version: 
- NPM version

### Install

```bash
npm install
```

### Set environment variables
- Rename sample.env to .env
- Update the values with your values

> Ask system administrator for your environment variables value, this will depend on your access privilege


### Start server
```bash
npm start
```

# Development

### Clone this repository
---

### Create new branch
From **master** branch, rename it using this format: `{version}-{feature-name}`

Example: `42.1-user-login` or `17.0-new-page`

> Read more about Git best practices [here](https://paper.dropbox.com/ep/redirect/external-link?url=https%3A%2F%2Fnvie.com%2Fposts%2Fa-successful-git-branching-model%2F&hmac=jQikoi7RyDCKcoU9Z1aLdLAf4KBmUvo6SOMrl14fbIY%3D).
---
### Set up your environment variables
We use .env for react and node projects [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

- Rename sample.env to .env
- Update the values with your values

> Ask system administrator for your environment variables value, this will depend on your access privilege

---
### Install dependencies

```
npm install
```

### Migrate the database

```bash
npm run migrate:generate -- -n [migration_file_name]
npm run migrate:run
```

---

### Run in development

```bash
npm run dev
```

---

### Start coding
This is where you do amazing things, implement features and functionalities.

---
### Commit changes
Commit at the smallest meaningful changes possible. Give clear and concise commit message:

1.  What has been created/modified
2.  What will be affected

This will help you and other team member to debug later when there’s a failure.

**Example commit:**

> Split finance page into two components

> Adding logs

> Removing console logs


### Run on your local

After making modifications, make sure you can run it on your local. Pay attention to warnings and errors and fix that before continue to next step.

---
### Push to your branch

Push your working modification to **your own branch**.

---
### Make a Pull Request

Create pull request to development or master branch directly from your branch. 

- Check out to the target branch, then pull origin to get latest commits
- Sync your branch to the latest origin branch that you want to merge
- Make sure your code still working and remove any conflict
- Create the PR

Give clear PR title message to **each** branch, let the other developer know what you’re trying to merge. Example PR title:

>   Fully functional goodbye message feature

>   Error handling

  
---
### Test and Deployment

We don’t need to manage deployment, it’s handled automatically using CI/CD mechanism. Once your PR is approved and merge, it will be deployed automatically to server. There are 3 servers provided depends on where you made the PR:

**1. development** branch will deploy to Development server  (PR, merged)

-   This branch is used to test your code in live environment
-   Can be accessed on dev.bukitvista.com
-   This server is using our development database and development back end

 **2. staging** branch will deploy to Staging server  (PR, merged)

-   Connected to production database, staging back end, staging front end
-   This server is for testing changes to front end or back end code and making sure it's fit the production database
-   Can be accessed at bigrr-dev.bukitvista.com  (staging branch)


**3. master** branch will deploy to Production server  (PR, merged by lead developer)

-   Used by real user
-   bigrr.bukitvista.com  (master branch)
-   This is our main application on production. The app is used to serve our clients to fulfill their tasks.

