# Personal Website

This repository contains the code for my personal portfolio website, built with a React frontend, Django REST API backend, and Azure Blob Storage for media files.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Link](#live-link)
- [User Stories](#user-stories)
- [Database Structure](#database-structure)
- [API Endpoints](#api-endpoints)
- [Bugs and Fixes](#bugs-and-fixes)
- [Credits](#credits)
- [Target Audience](#target-audience)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Overview
This project is a personal portfolio website to showcase my skills, experience, and projects. It features animations, a project gallery, a contact form, and dynamically rendered content from a backend API.

## Features
- Dynamic portfolio gallery with project details
- Contact form integrated with backend API
- Parallax and scroll animations
- Responsive design for all screen sizes
- Media storage using Azure Blob Storage

## Technologies Used
- **Frontend:** React, Framer Motion, React Router
- **Backend:** Django REST Framework, PostgreSQL
- **Storage:** Azure Blob Storage
- **Other Tools:**
  - React-Burger-Menu for mobile navigation
  - Axios for API calls
  - Azure for deployment and media storage

## Live Link
You can visit the live website here:
[Portfolio Website](#) <!-- Add the live link once the site is deployed -->

## User Stories
1. **As a visitor,** I want to view a gallery of projects with their details, so I can see the developer's work.
2. **As a potential employer,** I want to view the developer's skills and experience, so I can evaluate their fit for a job role.
3. **As a client,** I want to contact the developer through a form, so I can inquire about potential collaborations.
4. **As a visitor,** I want to explore the site smoothly with animations and transitions, so I have a good user experience.

## Database Structure

- **Skill Model:**
  - `name` (string, max 100 characters) – Name of the skill.
  - `proficiency` (integer, 1 to 10) – Proficiency level.
  - `icon` (file, optional) – SVG file representing the skill.
  - `description` (text, optional) – Detailed description of the skill.
  - `category` (choice field) – Category of the skill, options are:
    - `code`
    - `toolbox`
    - `soft`

- **Project Model:**
  - `title` (string, max 200 characters) – Title of the project.
  - `description` (text) – Detailed description of the project.
  - `technology` (many-to-many with Skill) – Skills/technologies used in the project.
  - `github_link` (URL) – Link to the project’s GitHub repository.
  - `completed_date` (date, optional) – Completion date of the project.
  - `status` (choice field) – Project status, options are:
    - `in_progress`
    - `completed`
  - `is_code_institute` (boolean) – Indicates if the project was completed as part of Code Institute.

- **ProjectImage Model:**
  - `project` (foreign key to Project) – Related project.
  - `images` (image) – Images related to the project, saved under `projects/<project_folder>/<filename>`.

- **Company Model:**
  - `name` (string, max 200 characters) – Name of the company.
  - `logo` (image, optional) – Company logo, uploaded to `experiences/logos/`.

- **Role Model:**
  - `company` (foreign key to Company) – Associated company.
  - `title` (string, max 200 characters) – Title or position held.
  - `start_date` (date) – Start date of the role.
  - `end_date` (date, optional) – End date of the role; can be left blank for ongoing roles.
  - `description` (text) – Description of responsibilities and achievements.

- **Contact Model:**
  - `name` (string, max 100 characters) – Sender's name.
  - `email` (email) – Sender's email address.
  - `subject` (string, max 200 characters) – Subject of the message.
  - `message` (text) – Content of the message.
  - `created_at` (datetime) – Timestamp of when the message was sent.

## API Endpoints
- `/api/projects/` – Retrieve all projects
- `/api/experience/` – Retrieve all projects
- `/api/skills/` – Retrieve all skills
- `/api/contact/` – Submit a contact form

## Bugs and Fixes
- **Fixed Issue 1:** Resolved an issue where the project images wouldn't load from Azure Blob Storage due to incorrect container permissions.
- **Fixed Issue 2:** Fixed a bug causing form submissions to fail if the email field contained special characters.

## Credits:
- https://www.npmjs.com/package/react-icons  (documentation for react-icons library)
- https://www.framer.com/motion/ (documentation for FramerMotion libary)
- Photo by Life Of Pix: https://www.pexels.com/photo/gray-rock-8892/ (background image)

## Target Audience
- Employers looking to hire full-stack developers
- Clients seeking web development services
- Fellow developers for collaboration and inspiration

## Future Improvements
- Add multi-language support
- Complete the experiences page
- Include a blog section for writing about development experiences