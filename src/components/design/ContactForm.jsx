import { InputField, TextareaField } from "../ui/FormFields";
import Button from "../ui/Button";
import { useContactForm } from "../../hooks/useContactForm";

export const ContactForm = () => {
   const {
      formData,
      status,
      isSubmitting,
      errors,
      handleChange,
      handleSubmit,
   } = useContactForm();
   return (
      <div className="w-full max-w-2xl mx-auto px-6 bg-n-8 border border-n-6 rounded-[2rem] py-8">
         <form method="POST" className="mx-auto mt-3 max-w-xl sm:mt-4 ">
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-5">
               <InputField
                  id="full-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  label="Full name"
                  error={errors.name}
                  required
               />
               <InputField
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email Address"
                  error={errors.email}
                  required
               />
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-5">
               <InputField
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Phone Number"
                  error={errors.phone}
               />
               <InputField
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  label="Subject"
                  error={errors.subject}
                  required
               />
            </div>

            {/* Timeline & Subject */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-5">
               <InputField
                  id="timeline"
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  error={errors.timeline}
                  label="Timeline"
               />
               <InputField
                  id="budget"
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  label="Budget (€)"
                  error={errors.budget}
               />
            </div>

            {/* Message*/}
            <div className="mb-5">
               <TextareaField
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  label="Message"
                  required
                  error={errors.message}
               />
            </div>

            {/* Status Messages */}
            {status.message && (
               <div
                  className={`flex items-center gap-3 rounded-lg border p-3 text-sm mb-3 ${
                     status.type === "success"
                        ? "border-green-500/30 bg-green-500/10 text-n-1/70"
                        : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
               >
                  <span className="text-xl">
                     {status.type === "success" ? "✓" : "✕"}
                  </span>
                  <p>{status.message}</p>
               </div>
            )}
            {/* submit button*/}
            <Button
               white
               className="w-full"
               type="button"
               onClick={handleSubmit}
               disabled={isSubmitting}
            >
               {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
         </form>
      </div>
   );
};
