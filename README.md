# Portfolio Project Documentation

## Overview
Welcome to **my portfolio**, a personal project built using **Next.js**, a powerful React framework for building fast and scalable web applications. The project showcases my skills, projects, and professional experience, providing an easy way for users to connect with me.

---

## **Sections and Routes**

### 1. **Home**
- The landing page of my portfolio provides an overview of my professional profile.
- Includes a brief introduction, a call-to-action button, and quick links to other sections.
- There is a **Download Resume** button that allows you to download my latest resume.
- **Icon:** 🏠

### 2. **About**
- **Route:** `/about`
- Contains detailed information about my background, work experience, and education.
- **Icon:** 📖

### 3. **Skills**
- **Route:** `/skills`
- Highlights my technical skills and expertise using graphical icons and charts.
- Includes frameworks, programming languages, and tools I am proficient in.
- **Icon:** 💻

### 4. **Projects**
- **Route:** `/projects`
- Displays a portfolio of my projects with a title, description, and links to live demos or GitHub repositories.
- Each project card includes:
  - Title
  - Description
  - Tech stack used
  - Buttons for **Live Demo** and **GitHub Repo**.
- **Icon:** 📂

### 5. **Contact**
- **Route:** `/contact`
- A contact form where users can fill in their queries or feedback.
- **Features:**
  - Fields for **Name**, **Email**, and **Message**.
  - Email notifications enabled for receiving user queries.
  - Form submission is handled using an API route in Next.js.
  - **Icon:** 📧

---

## **Core Features**

### 1. **Responsive Design**
- My portfolio is fully responsive and optimized for mobile, tablet, and desktop screens.

### 2. **Email Notifications**
- **Implementation:**
  - Email notifications are enabled for queries submitted via the contact form.
  - Integration with an email service provider (e.g., **Nodemailer**).

### 3. **Dynamic Routing**
- Each section of my portfolio corresponds to a specific route, enabling easy navigation and modularity.

### 4. **Custom Icons**
- Relevant icons are used across sections for better visual appeal and user experience.

---

## **Technology Stack**

### Frontend:
- **Next.js**: React-based framework for server-side rendering and routing.
- **Tailwind CSS**: For styling and responsiveness.

### Backend:
- **API Routes**: Built-in Next.js API routes to handle form submissions.
- **Email Service**: Nodemailer/SendGrid for email integration.

---

## **How to Use the Contact Form**
1. Navigate to the **Contact** section or visit `/contact`.
2. Fill out the form fields:
   - Name
   - Email
   - Message
3. Submit the form.
4. Upon submission, you will receive a success message, and the query will be sent directly to my configured email address.

---

## **Future Enhancements**
- Add animations to transitions between sections.
- Integrate a blogging feature.

---

For any issues or suggestions regarding this portfolio, feel free to reach out using the **Contact** section.
