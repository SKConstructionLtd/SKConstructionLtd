'use client';

import { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      preferredContact: formData.get('preferredContact'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Request Submitted Successfully!',
          description: 'We will get back to you within 24 hours.',
        });
        formRef.current?.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Smith"
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+44 1234 567890"
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="service">Service Interested In</Label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Select a service</option>
          <option value="house-building">Complete House Building</option>
          <option value="groundwork">Site Preparation & Groundwork</option>
          <option value="driveways">Driveways & Patios</option>
          <option value="extensions">Extensions & Renovations</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
        <div className="mt-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              defaultChecked
              className="mr-2"
            />
            Email
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              className="mr-2"
            />
            Phone
          </label>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          rows={5}
          className="mt-2"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
      >
        {isSubmitting ? 'Submitting...' : 'Send Message'}
        <Send className="ml-2" size={20} />
      </Button>
    </form>
  );
}