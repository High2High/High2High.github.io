import { FaMicrophone, FaSpotify, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import georgeAndJessImage from "../assets/george-and-jess.png";

export default function Home() {
  const socialPlatforms = [
    {
      name: "YouTube",
      icon: FaYoutube,
      color: "bg-[#FF0000] hover:bg-[#FF0000]/90",
      url: "#"
    },
    {
      name: "Spotify",
      icon: FaSpotify,
      color: "bg-[#1DB954] hover:bg-[#1DB954]/90",
      url: "#"
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
      url: "#"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      color: "bg-gradient-to-r from-[#E4405F] to-[#F77737] hover:from-[#E4405F]/90 hover:to-[#F77737]/90",
      url: "#"
    },
    {
      name: "X",
      icon: FaTwitter,
      color: "bg-[#000000] hover:bg-[#000000]/90",
      url: "#"
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      color: "bg-black hover:bg-black/90",
      url: "#"
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in mb-8">
            {/* Show Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              <span className="gradient-text">Not Seeing High 2 High</span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-right mb-8">
              <p className="text-lg md:text-xl text-[hsl(var(--dark-secondary))] font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Join the sessh with George & Jess
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-8 bg-[hsl(30,35%,85%)]/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src={georgeAndJessImage} 
              alt="George and Jess from Not Seeing High 2 High podcast" 
              className="rounded-2xl shadow-xl max-w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark))] mb-4">
            Connect & Follow
          </h2>
          <p className="text-xl text-[hsl(var(--dark-secondary))] mb-12 max-w-2xl mx-auto">
            Stay updated with our latest episodes and join our growing community
          </p>
          
          {/* Social Platforms */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a 
                  key={platform.name}
                  href={platform.url} 
                  className={`group ${platform.color} text-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  <IconComponent className="text-3xl mb-3 mx-auto block" />
                  <span className="font-semibold">{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark))] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-[hsl(var(--dark-secondary))] max-w-2xl mx-auto">
              Have a story to share or want to be a guest? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <div className="glass-effect border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-xl mb-6">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--dark))] mb-4">Email Us</h3>
                <p className="text-[hsl(var(--dark-secondary))] mb-6">Send us your ideas, feedback, or collaboration requests</p>
                <a 
                  href="mailto:hi2hi420@gmail.com" 
                  className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors duration-300"
                >
                  hi2hi420@gmail.com
                </a>
              </div>
            </div>
            
            {/* Phone Contact */}
            <div className="glass-effect border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-xl mb-6">
                  <FaPhone className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--dark))] mb-4">Message Hotline</h3>
                <p className="text-[hsl(var(--dark-secondary))] mb-6">Ready to share your story? Message us to discuss</p>
                <a 
                  href="tel:984-444-5438" 
                  className="text-secondary hover:text-secondary/80 font-semibold text-lg transition-colors duration-300"
                >
                  98-HIGH-KIDS (984-444-5438)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[hsl(var(--dark))] text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Logo and Name */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4">
              <FaMicrophone className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Not Seeing High 2 High</h3>
          </div>
          
          {/* Copyright and Links */}
          <div className="border-t border-[hsl(var(--dark-secondary))]/30 pt-8">
            <p className="text-[hsl(var(--light-gray))] mb-4">
              © 2024 Not Seeing High 2 High Podcast. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-[hsl(var(--light-gray))] hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-[hsl(var(--light-gray))] hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-[hsl(var(--light-gray))] hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
