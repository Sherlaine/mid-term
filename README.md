# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Final Application - Food Rescue 
!["Screenshot of landing page"] (https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/1.%20Landing.png)
!["Screenshot of the about page"] (https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/2.%20About.png)
!["Screenshot of markers connected to the database"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/3.%20List%20connected%20to%20Database.png)
!["Screenshot of create new list"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/4.%20Create%20New%20List.png)
!["Screenshot of add point on list"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/5.%20Add%20point%20on%20list.png)
!["Screenshot of point added on list"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/6.%20Point%20Added%20on%20list.png)
!["Screenshot of delete point on list"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/7.%20Delete%20point%20on%20list.png)
!["Screenshot of footer"](https://github.com/Sherlaine/mid-term/blob/master/public/screenshots/8.Footer.png)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
