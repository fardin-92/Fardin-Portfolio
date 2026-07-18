import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; name?: string; message?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/khiranif47@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent.",
          description: "I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          >
            <Check className="w-8 h-8" />
          </motion.div>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">Message Sent!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
          Thank you for reaching out. Your message has been sent successfully. Fardin will get back to you soon.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="h-12 px-6 border-border hover:bg-secondary transition-all font-semibold"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 max-w-xl"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-xs uppercase tracking-wider text-muted-foreground flex justify-between"
        >
          <span>Name</span>
          {errors.name && <span className="text-[10px] text-destructive lowercase font-sans font-medium">{errors.name}</span>}
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          autoComplete="name"
          className={`bg-secondary border-border text-foreground placeholder:text-muted-foreground h-14 text-lg focus-visible:ring-1 transition-all ${
            errors.name ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-xs uppercase tracking-wider text-muted-foreground flex justify-between"
        >
          <span>Email</span>
          {errors.email && <span className="text-[10px] text-destructive lowercase font-sans font-medium">{errors.email}</span>}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete="email"
          className={`bg-secondary border-border text-foreground placeholder:text-muted-foreground h-14 text-lg focus-visible:ring-1 transition-all ${
            errors.email ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-wider text-muted-foreground flex justify-between"
        >
          <span>Message</span>
          {errors.message && <span className="text-[10px] text-destructive lowercase font-sans font-medium">{errors.message}</span>}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          className={`bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[200px] text-lg resize-none focus-visible:ring-1 transition-all ${
            errors.message ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
          placeholder="Tell me about your project..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-16 text-lg font-semibold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
