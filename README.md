# Backend of My Portfolio - [Jonathan Leiva G](https://www.jonathanleivag.cl)

This repository contains the source code for the backend of my personal portfolio, **JonathanLeivaG**, which provides the necessary functionality to manage the data displayed in the portfolio's frontend.

## Description
The backend is built with [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/). Its main function is to provide a REST API that manages information about projects, skills, and other relevant data displayed in the portfolio. Additionally, it uses [MongoDB](https://www.mongodb.com/) as the database, leveraging the official [MongoDB driver for Node.js](https://www.npmjs.com/package/mongodb) and [Resend](https://resend.com) for email sending. Security and efficiency measures are included to ensure proper operation.

> **Note:** This project is developed and tested with Node.js v22.12.0. Make sure to use this version to avoid compatibility issues.

## Installation
Follow the steps below to run the backend locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jonathanleivag/jonathanleivag-v2-backend
   cd jonathanleivag-v2-backend
   ```

2. **Install dependencies:**
   Ensure that [Node.js](https://nodejs.org/) is installed.
   ```bash
   npm i
   ```

3. **Set environment variables:**
   Create a `.env` file in the root directory of the project with the following variables:
   ```env
   PORT= # 3000
   MONGODB_URI= # URL of your MongoDB
   DATABASE= # Name of your database
   URI= # URL of your website
   NODE_ENV= # DEV | PROD
   KEY_RESEND= # API KEY of Resend
   CONTENT_RESEND= # Content of the email that will be sent
   NAME= # Name of the contact
   FROM= # From email
   TO= # To email
   SUBJECT= # Subject of the email
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The server will be available at `http://localhost:3000`.

5. **Start the production server:**
   ```bash
   npm run build
   npm run start
   ```

## Routes
The backend provides the following main routes:

### Hero
| Method | Route             | Description                        | Authentication |
|--------|-------------------|------------------------------------|-----------------|
| GET    | /api/hero/        | Retrieves the application's hero   | No              |

### About Me
| Method | Route             | Description                        | Authentication |
|--------|-------------------|------------------------------------|-----------------|
| GET    | /api/about/       | Retrieves the application's about me | No              |

### Contact
| Method | Route                  | Description                                       | Authentication |
|--------|------------------------|---------------------------------------------------|-----------------|
| GET    | /api/contact/          | Displays sent emails                              | No              |
| POST   | /api/contact/send/email | Sends an email to the user and a copy to me       | No              |

## Author
**Jonathan Leiva G**
- [Portfolio](https://jonathanleivag.cl)
- [GitHub](https://github.com/jonathanleivag)
- [LinkedIn](https://www.linkedin.com/in/jonathanleivag)

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
