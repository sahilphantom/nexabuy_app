import { useState } from "react"
import React from "react"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { img15, img16, img17 } from "../assets"

const TeamMemberCard = ({ image, name, position, socials }) => (
  <div className="flex flex-col items-start text-center p-4">
    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-[300px] object-cover" />
    </div>
    <h3 className="text-3xl font-medium items-start mb-1">{name}</h3>
    <p className="text-gray-600 items-start text-sm mb-4">{position}</p>
    <div className="flex items-start space-x-4">
      <a href={socials.twitter} className="text-gray-600 hover:text-black transition-colors">
        <Twitter className="w-5 h-5" />
      </a>
      <a href={socials.instagram} className="text-gray-600 hover:text-black transition-colors">
        <Instagram className="w-5 h-5" />
      </a>
      <a href={socials.linkedin} className="text-gray-600 hover:text-black transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
)

const teamMembers = [
  {
    image: img15,
    name: "Tom Cruise",
    position: "Founder & Chairman",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    image: img16,
    name: "Emma Watson",
    position: "Managing Director",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    image: img17,
    name: "Will Smith",
    position: "Product Designer",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // Additional team members for carousel
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rf1zJ8nD5815MeRglz8iYUneQ2SJ6x.png",
    name: "John Doe",
    position: "Marketing Director",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rf1zJ8nD5815MeRglz8iYUneQ2SJ6x.png",
    name: "Jane Smith",
    position: "Lead Developer",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesPerView = 3
  const totalSlides = Math.ceil(teamMembers.length / slidesPerView)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="container w-[90%] mx-auto px-4 py-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full">
            {teamMembers
              .slice(currentSlide * slidesPerView, currentSlide * slidesPerView + slidesPerView)
              .map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-red-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
export default Team;
