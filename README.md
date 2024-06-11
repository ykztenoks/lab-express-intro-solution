# ExpressJS Lab Exercise

Welcome to the ExpressJS lab! In this exercise, you'll be creating a basic Express app from scratch. The purpose of this lab is to get you familiar with setting up an Express server, handling routes, and using a JSON file as a mock database. Follow the instructions below carefully, and don't hesitate to ask for help if you get stuck.

## Getting Started

### _Most of the configuration is provided to you,_

### _but use it as a reference and write the code yourself to practice and get that muscle memory going_ 😉

1. **Initialize a npm package**

   ```sh
   npm init -y
   ```

2. **Install Express**

   ```sh
   npm install express
   ```

3. **Install Morgan**

   ```sh
   npm install morgan
   ```

4. **Install Nodemon (if you haven't yet)**

   ```sh
   npm install -g nodemon
   ```

   _The `-g` flag installs Nodemon globally, so you can use it in any project without needing to install it every time._

5. **Add a `dev` script to `package.json`**
   Open your `package.json` file and add the following under the `scripts` section:

   ```json
   "scripts": {
     "dev": "nodemon app.js"
   }
   ```

6. **Create `app.js` file**
   In the root of your project directory, create a new file named `app.js`.

## Setting Up Your Server

7. **Import Express using `require`**

   ```js
   const express = require("express");
   ```

8. **Instantiate Express in a variable `app`**

   ```js
   const app = express();
   ```

9. **Require Morgan**

   ```js
   const morgan = require("morgan");
   ```

10. **Create a variable `logger` that instantiates Morgan**

    ```js
    const logger = morgan("dev");
    ```

11. **Import data from db.json file**

    ```js
    const data = require("./db.json");
    ```

12. **Define a `PORT` variable**

    ```js
    const PORT = 8080;
    ```

13. **Tell the app to listen to the port and add a callback with a console.log for feedback**

    ```js
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

14. **Use the logger as middleware**

    ```js
    app.use(logger);
    ```

15. **Run the server**
    ```sh
    npm run dev
    ```
    _You should see the console log feedback indicating the server is running correctly._

## Defining Routes

Now that your server is set up, it's time to define some routes.

1. **Define a GET route to `/`**

   - Create a route that responds to GET requests to the root URL (`/`). The response should be a JSON object with a welcome message.

2. **Define a route `/people` to return all data from `db.json`**

   - Create a route that responds to GET requests to `/people`. Read the `db.json` file and return its content as a JSON response.

3. **Define a route `/people/:personId` to get a single person by ID**

   - Create a route that responds to GET requests to `/people/:personId`. Use the ID from the request parameters to find and return the corresponding person from `db.json`.

4. **Define a route `/people/country/:country` to get all people from a specific country**

   - Create a route that responds to GET requests to `/people/country/:country`. Use the country from the request parameters to filter and return the people from that country.

5. **Define a route `/people/age/:age` to get all people that match or are over a certain age**

   - Create a route that responds to GET requests to `/people/age/:age`. Use the age from the request parameters to filter and return the people who are of that age or older.

6. **Define a route `/people/profession/:profession` to get all people that match a profession**
   - Create a route that responds to GET requests to `/people/profession/:profession`. Use the profession from the request parameters to filter and return the people with that profession.

## Testing Your Routes

To test your routes, use Postman, Insomnia, or even your browser (for GET requests). This will help you verify that your endpoints are working as expected.

Happy coding!
