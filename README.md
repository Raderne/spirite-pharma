# Spirit Pharma France

**Spirit Pharma France** is a modern, responsive website designed to showcase the company's products and news while providing a seamless user experience. The site leverages **Next.js** for its high-performance frontend and **Sanity CMS** for managing dynamic content like products and news articles. It also features elegant animations powered by **GSAP** to enhance interactivity and user engagement.

## Live Demo and Repository

- **Live Site**: [Spirit Pharma France](https://spirite-pharma-france.vercel.app/)
- **Repository**: [GitHub - Raderne/spirite-pharma](https://github.com/Raderne/spirite-pharma)

## Features

- **Product Management**:
  - Browse company products by categories.
  - View detailed information about individual products.
- **News Section**: Dynamically managed articles to keep users updated with the latest company news.
- **Contact Form**: Reach out to the company directly through a built-in contact form.
- **Content Management**: Add, edit, and delete products or articles via **Sanity CMS**.
- **Animations**: Smooth and engaging animations created with **GSAP**.
- **Responsive Design**: Optimized for all screen sizes, providing a seamless experience across devices.

## Technologies Used

### Frontend

- **Framework**: Next.js
- **Styling**: CSS Modules

### Content Management

- **CMS**: Sanity CMS

### Animations

- **Library**: GSAP (GreenSock Animation Platform)

## Screenshots

![Home Page](/screenshots/spirit__1.png)
![Products Page](/screenshots/spirit__3.png)

<p align="center">
  <img src="/screenshots/spirit__4.png" alt="Product Details Page" width="49%" />
  <img src="/screenshots/spirit__5.png" alt="News Page" width="49%" />
</p>

## Installation and Setup

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js and npm/yarn installed on your system.
- Access to the **Sanity CMS** project data (API key and project ID).

### Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/Raderne/spirite-pharma.git
cd spirite-pharma
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the following (replace with your own **Sanity CMS** credentials):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-30
```

#### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## Contact

For any questions or collaboration opportunities, feel free to reach out via [Linkedin](https://www.linkedin.com/in/reda-elmarzouki-98a89ba0/).
