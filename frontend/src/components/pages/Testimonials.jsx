import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call (replace later)
    setTimeout(() => {
      setTestimonials(getSampleData());
      setLoading(false);
    }, 800);
  }, []);

  const getSampleData = () => [
    {
      id: 1,
      name: "Raureen Smith",
      designation: "CEO, Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      description:
        "I am so grateful for all the help you gave me. Thank you for everything you did for my family.",
    },
    {
      id: 2,
      name: "Sagar Kayak",
      designation: "Marketing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      description:
        "You went above and beyond to ensure I got the perfect home. Truly outstanding service.",
    },
    {
      id: 3,
      name: "John Lopera",
      designation: "Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      description:
        "I was nervous at first, but you guided me perfectly. An amazing experience overall.",
    },
    {
      id: 4,
      name: "Marryl Heaman",
      designation: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      description:
        "Fantastic communication and follow-through. Everything was handled smoothly.",
    },
    {
      id: 5,
      name: "Lucy",
      designation: "Home Buyer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      description:
        "Professional, friendly, and reliable. Highly recommended for first-time buyers.",
    },
  ];

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
            Happy Clients
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* ROW / HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth">

          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 text-center flex-shrink-0"
            >
              {/* IMAGE */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-gray-100 mb-4"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />

              {/* TEXT */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {t.description}
              </p>

              <h3 className="text-blue-600 font-bold">{t.name}</h3>
              <p className="text-gray-400 text-xs mb-3">{t.designation}</p>

              {/* STARS */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
