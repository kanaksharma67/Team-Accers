
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-300" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:unseencare834@gmail.com", color: "hover:text-purple-400" }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
        </div>

        {/* Section header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Ready to build the future together? Reach out to us for partnerships, 
            project collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact form */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-purple-900/30 border-purple-500/30 text-white placeholder-purple-400 focus:border-purple-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-purple-900/30 border-purple-500/30 text-white placeholder-purple-400 focus:border-purple-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-purple-900/30 border-purple-500/30 text-white placeholder-purple-400 focus:border-purple-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-purple-900/30 border-purple-500/30 text-white placeholder-purple-400 focus:border-purple-400 resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 glow-hover disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info and social */}
          <div className="space-y-8">
            {/* Contact info */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Ready to innovate?</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Whether you have a challenging problem to solve, a revolutionary idea to build, 
                    or just want to connect with fellow innovators, we'd love to hear from you.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">What we can help with:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      AI/ML Development & Consulting
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      Blockchain & Web3 Solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      IoT & Smart Systems Development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      Full-Stack Web Applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Connect with us</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`group flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-full border border-purple-500/30 transition-all duration-300 ${social.color} hover:border-purple-400/50 hover:bg-purple-600/30 glow-hover`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-purple-300 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-purple-500/30">
                <p className="text-gray-400 text-sm">
                  <strong className="text-purple-300">Email:</strong> unseencare884@gmail.com<br />
                  <strong className="text-purple-300">Response time:</strong> Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
