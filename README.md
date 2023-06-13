## WhispaLink

![Screenshot from 2023-06-13 17-54-43](https://github.com/ayush-raj13/WhispaLink/assets/113297899/6d145c35-b44b-477d-8d76-1681da36076c)


![Screenshot from 2023-06-13 17-54-11](https://github.com/ayush-raj13/WhispaLink/assets/113297899/632c67a0-0cb1-4729-b5fd-ab92cd564a15)


![Screenshot from 2023-06-13 17-53-44](https://github.com/ayush-raj13/WhispaLink/assets/113297899/728fb045-8dbc-4538-8176-e28037f605bb)


WhispaLink is a real-time messaging website created with Appwrite, VueJS and Tailwind CSS. I created this as a solution for Appwrite Hackathon 2023.

##  Appwrite Setup

Before using this application, make sure you have Appwrite server up and running. You can follow [Appwrite installation guide](https://appwrite.io/docs/installation).

1. Install [Appwrite CLI](https://appwrite.io/docs/command-line)
2. Login with `appwrite login`
3. Visit your Appwrite Console and create project with for this application
4. Run initial setup with `appwrite deploy --all`
5. In the `appwrite.json` file, change the function variables for `APPWRITE_FUNCTION_ENDPOINT` to the correct endpoint for your setup.

### Application setup

1. Navigate to the root of this project
2. Make sure that the values in `src/config.ts` are correct for your project
3. Run `npm i`
4. Run `npm run dev`
