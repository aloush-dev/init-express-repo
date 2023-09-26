# Express App Generator

Create a new Express.js application with pre-configured controllers, models, a sample test, and a database setup for managing products.

## Features

- Set up a basic Express.js project structure with controllers and models.
- Includes a sample controller and model for managing products.
- Pre-configured sample test cases for the product controller.
- Database setup with sample data for development and testing.

## Installation

To use this package, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

- Run the following command to generate the Express.js app using this package:

  ```bash
   npx create-express-app your-project-name
  ```

> This will create a new Express.js project with the required directory structure, sample controller, model, test files, and database setup.

## Getting Started

Once you've generated your Express.js project, follow these steps to get started:

Install project dependencies:

```bash
    npm install
```

Set up your databases:

- This package will ask you for the names of your development and test databases during setup.
- Database configuration is stored in the .env.development and .env.test files.

## Project Structure

The generated project has the following directory structure:

- `controllers/`: Contains Express route controllers.
- `models/`: Defines models for data.
- `tests/`: Includes sample test cases for controllers.
- `db/`: Contains database setup files and data.
  - `data/`: Includes folders for `dev-data` and `test-data`.
    - `dev-data/`: Contains sample data for development.
    - `test-data/`: Contains sample data for testing.
  - `connection.js`: Sets up the database connection.

## Sample Controller and Model

A sample controller (`controllers/products.controller.js`) and model (`models/products.model.js`) for managing products are included as examples. You can modify or replace them to suit your project's requirements.

## Running Tests

Sample test cases for the product controller can be found in the tests/ directory. You can run the tests using the following command:

```bash
    npm test

```

## License

This package is licensed under the MIT License.

## Contributing

If you'd like to contribute to this project or report issues, please visit the GitHub repository.

## Author

- Ali Abdallah
- GitHub: [itsaliabdallah](https://github.com/itsaliabdallah)
