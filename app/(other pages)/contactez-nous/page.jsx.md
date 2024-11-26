## 📝 Internal Code Documentation for Contact Us Page

### Table of Contents

- [Overview](#overview)
- [Dependencies](#dependencies)
- [State](#state)
- [Effects](#effects)
- [Handlers](#handlers)
- [UI](#ui)
- [Example Usage](#example-usage)

### Overview

The Contact Us page allows users to get in touch with the company. It includes a form for users to submit their inquiries, as well as contact information such as address, phone number, and email.

### Dependencies

- React
- Suspense
- useEffect
- useState
- Link from next/link
- FaLocationDot, FaFacebookF from react-icons/fa6
- MdEmail, MdWhatsapp from react-icons/md
- IoMdCall from react-icons/io
- Loading from "@/app/loading"
- Next.js's built-in font loader (use client)
- Google's Poppins font

### State

- `isLoading`: Used to toggle the loading state when submitting the form.
- `error`: Stores any errors that occur during form submission.
- `contactData`: Stores the contact information (address, phone number, email, social media links) fetched from Sanity.
- `phoneNum`: Stores the phone number as a string without any special characters for use in the WhatsApp link.

### Effects

- `useEffect`: Fetches the contact information from Sanity and sets the initial state.

### Handlers

- `submitForm`: Handles the form submission. Validates the form data, sends an email to the company email, and resets the form.

### UI

- The page is divided into two columns:
    - Left column contains the contact information and social media links.
    - Right column contains the form for submitting inquiries.
- The page uses the Poppins font from Google Fonts.
- The form fields are styled with a custom input container component.
- The phone number is linked to WhatsApp using the `mailto` protocol.

### Example Usage

```jsx
import ContactUsPage from "@/pages/contact-us";

export default function App() {
  return (
    <ContactUsPage />
  );
}
```