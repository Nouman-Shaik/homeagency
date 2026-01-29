

import React from "react";

import p1 from "../../assets/landing/p1.svg"
import p2 from "../../assets/landing/p2.svg"
import p3 from "../../assets/landing/p3.svg"
import p4 from "../../assets/landing/p4.svg"
import p5 from "../../assets/landing/p5.svg"
import pp1 from "../../assets/landing/pp11.svg"
import s1 from "../../assets/shapes/Subtract.svg"
import s2 from "../../assets/shapes/Subtract-4.svg"
import s3 from "../../assets/shapes/Subtract-5.svg"

const About = () => {
  const projects = [
    { id: 1, title: "Consultation", image: p1, location: "Project Name • Location" },
    { id: 2, title: "Design", image: p2, location: "Project Name • Location" },
    { id: 3, title: "Marketing & Design", image: p3, location: "Project Name • Location" },
    { id: 4, title: "Consultation & Marketing", image: p4, location: "Project Name • Location" },
    { id: 5, title: "Consultation", image: p5, location: "Project Name • Location" },
  ];

  return (
    <div className="w-full bg-gray-50">

      <div className="relative py-12 bg-white overflow-hidden">
       
          <img src={p1} alt=""className="w-60 absolute top-[10vh]  left-160 " />
          <img src={s1} alt="" className="relative left-202" />
          <img src={p2} alt="" className="w-30 absolute top-[5vh] left-120 " />
          <img src={s2} alt="" className="relative left-113 bottom-16" />
          <img src={p3} alt="" className="w-40 absolute top-[20vh] left-230 " />
          <img src={s3} alt="" className="relative left-265 top-9" />

          

      </div>

      
      <div className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
          About Us
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          With over 15 years of experience in the real estate industry, we are committed
          to delivering exceptional service and helping clients confidently buy or sell
          their properties.
        </p>

        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition">
          LEARN MORE
        </button>
      </div>

      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-10">
            Our Projects
          </h2>

         
          <div className="flex gap-6 overflow-x-auto pb-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="text-blue-600 font-bold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {project.location}
                  </p>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold transition">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
