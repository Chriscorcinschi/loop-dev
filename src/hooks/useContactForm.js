import { useState } from "react";

export const useContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      timeline: "",
      budget: "",
      message: "",
   });

   const [status, setStatus] = useState({ type: "", message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));

      if (errors[name]) {
         setErrors((prev) => ({
            ...prev,
            [name]: "",
         }));
      }
   };

   const validateForm = () => {
      const newErrors = {};

      if (!formData.name.trim()) {
         newErrors.name = "Please enter your name.";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
         newErrors.email = "Please enter a valid email address.";
      }

      if (!formData.subject.trim()) {
         newErrors.subject = "Please enter a subject.";
      }

      if (!formData.message.trim()) {
         newErrors.message = "Please enter your message.";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus({ type: "", message: "" });
      setErrors({});

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
         console.log("Sending emails with data:", formData);
         const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  service_id: "service_vzxt76s",
                  template_id: "template_m8hfjbh",
                  user_id: "dIOgjb3sqL6APxyOG",
                  template_params: {
                     name: formData.name,
                     email: formData.email,
                     phone: formData.phone || "Not provided",
                     subject: formData.subject,
                     timeline: formData.timeline || "Not specified",
                     budget: formData.budget || "Not specified",
                     message: formData.message,
                  },
               }),
            }
         );

         if (response.ok) {
            setStatus({
               type: "success",
               message:
                  "Your message has been sent successfully! We'll be in touch soon.",
            });

            setFormData({
               name: "",
               email: "",
               phone: "",
               subject: "",
               timeline: "",
               budget: "",
               message: "",
            });
            setErrors({});

            setTimeout(() => {
               setStatus({ type: "", message: "" });
            }, 2000);
         } else {
            throw new Error("Failed to send email");
         }
      } catch (error) {
         // ← Questo dovrebbe funzionare
         setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return {
      formData,
      status,
      isSubmitting,
      errors,
      handleChange,
      handleSubmit,
      setFormData,
   };
};
