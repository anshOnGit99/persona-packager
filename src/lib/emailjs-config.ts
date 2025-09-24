// EmailJS Configuration
// To make the contact form functional, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS service ID (from EmailJS dashboard)
  serviceId: 'service_portfolio',
  
  // Your EmailJS template ID (from EmailJS dashboard)  
  templateId: 'template_contact',
  
  // Your EmailJS public key (from EmailJS dashboard)
  publicKey: 'your_public_key',
  
  // Template variables to use in your EmailJS template:
  // {{from_name}} - sender's name
  // {{from_email}} - sender's email
  // {{subject}} - message subject
  // {{message}} - message content
  // {{to_email}} - your email (recipient)
};

// Instructions for setting up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (e.g., Gmail)  
// 3. Create an email template with the variables above
// 4. Copy your service ID, template ID, and public key
// 5. Replace the placeholder values in this file
// 6. Update the import in Contact.tsx to use these values