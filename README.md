# Personal Website

This repository contains the code for my personal portfolio website, built with a React frontend, Django REST API backend, and Azure Blob Storage for media files.

## Table of Contents
- [Demo](#demo)
- [UX](#ux)
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

## Demo <hr>

![Website look on different devices](./assets/readme_assets/responsive_design.png)

### A live demo to the website can be found [here](https://green-thumb1-5e1e889069e1.herokuapp.com/)

## UX <hr>

This website is designed primarily for prospective employers, clients, and collaborators who want to learn more about my background, projects, and skills. The aim is to create a visually engaging and user-friendly portfolio to showcase my experience and provide easy access to my work and contact information.

- **Prospective Employers**: Employers can explore my experience, skills, and projects to evaluate my qualifications for job opportunities. They can see relevant work, technologies used, and project descriptions, helping them make an informed hiring decision.

- **Potential Clients**: Individuals or businesses looking for web development services can view my portfolio to assess my skills and past projects. They can easily reach out through the contact form for inquiries or project proposals.

- **Collaborators**: Fellow developers or other professionals interested in collaboration can gain insights into my areas of expertise and past projects. This section provides an overview of the technologies I work with and the

The UX design focuses on clear navigation, responsive design, and dynamic content presentation. By utilizing animations, parallax effects, and a modern layout, this website provides an engaging experience that reflects my personal brand while meeting the needs of my target audience.

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

### Skill Model

| Field         | Type                   | Description                                       |
|---------------|------------------------|---------------------------------------------------|
| `name`        | String (100)           | Name of the skill                                 |
| `proficiency` | Integer (1–10)         | Proficiency level, ranging from 1 to 10           |
| `icon`        | File (optional)        | SVG file representing the skill                   |
| `description` | Text (optional)        | Detailed description of the skill                 |
| `category`    | Choice (code, toolbox, soft) | Category of the skill                   |

### Project Model

| Field             | Type                          | Description                                                       |
|-------------------|-------------------------------|-------------------------------------------------------------------|
| `title`           | String (200)                  | Title of the project                                              |
| `description`     | Text                          | Detailed description of the project                               |
| `technology`      | Many-to-many (Skill)          | Skills/technologies used in the project                           |
| `github_link`     | URL                           | Link to the project’s GitHub repository                           |
| `completed_date`  | Date (optional)               | Completion date of the project                                    |
| `status`          | Choice (in_progress, completed) | Project status                                                |
| `is_code_institute` | Boolean                     | Indicates if the project was completed as part of Code Institute  |

### ProjectImage Model

| Field        | Type                          | Description                                                    |
|--------------|-------------------------------|----------------------------------------------------------------|
| `project`    | Foreign key (Project)         | Related project                                                |
| `images`     | Image                         | Images related to the project, saved under `projects/<project_folder>/<filename>` |

### Company Model

| Field     | Type                   | Description                               |
|-----------|------------------------|-------------------------------------------|
| `name`    | String (200)           | Name of the company                       |
| `logo`    | Image (optional)       | Company logo, uploaded to `experiences/logos/` |

### Role Model

| Field         | Type                          | Description                                                    |
|---------------|-------------------------------|----------------------------------------------------------------|
| `company`     | Foreign key (Company)         | Associated company                                             |
| `title`       | String (200)                  | Title or position held                                         |
| `start_date`  | Date                          | Start date of the role                                         |
| `end_date`    | Date (optional)               | End date of the role; can be left blank for ongoing roles      |
| `description` | Text                          | Description of responsibilities and achievements               |

### Contact Model

| Field         | Type                   | Description                                       |
|---------------|------------------------|---------------------------------------------------|
| `name`        | String (100)           | Sender's name                                    |
| `email`       | Email                  | Sender's email address                           |
| `subject`     | String (200)           | Subject of the message                           |
| `message`     | Text                   | Content of the message                           |
| `created_at`  | Datetime               | Timestamp of when the message was sent           |

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