import React, { useState } from "react";
import SkillPic from "./SkillPic";
import {FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaPhp, FaFigma,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiCodeAiLine } from "react-icons/ri";
import { TbFileTypeSql, TbSettingsCode } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";

const skills = [
  {
    title: "FrontEnd",
    icon: RiCodeAiLine,
    skills: [
      { skill: FaHtml5, nama: "HTML" },
      { skill: FaCss3Alt, nama: "CSS" },
      { skill: IoLogoJavascript, nama: "JavaScript" },
      { skill: FaReact, nama: "React" },
      { skill: RiTailwindCssFill, nama: "Tailwind" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: MdOutlineDesignServices,
    skills: [{ skill: FaFigma, nama: "Figma" }],
  },
  {
    title: "BackEnd",
    icon: TbSettingsCode,
    skills: [
      { skill: FaPhp, nama: "PHP" },
      { skill: FaLaravel, nama: "Laravel" },
      { skill: TbFileTypeSql, nama: "SQL" },
    ],
  },
];

const SkillControl = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
<section className="skills-container text-white my-16 relative flex flex-col sm:text-center md:items-center" id="skills">
      <h2 className="text-6xl text-gradient bg-gradient-to-r from-[#62cdff] to-[#f042ff] mb-10">Technical Proficiency</h2>

      <div className="flex md:flex-row sm:flex-col gap-8 md:w-full  justify-center">
        {/* Kategori */}
        <div className="flex md:flex-col gap-4 self-center md:ml-[100px] ">
          {skills.map((item, index) => (
            <SkillPic
              key={item.title}
              title={item.title}
              Icon={item.icon}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Detail Skills */}
        <div className="flex justify-center w-full gap-4 px-9 md:ml-0">
          {activeIndex !== null && (
            <div className="border w-full max-w-[800px] px-6 py-6 text-center rounded-xl shadow-glow">
              {/* Title Kategori */}
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6 border-b-2">
              {skills[activeIndex].title}
              </h3>

              {/* List Skill Icons */}
              <div className="flex flex-wrap justify-center mt-20">
                {skills[activeIndex].skills.map((s, idx) => (
                    <div
                    key={idx}
                    className="flex flex-col items-center text-xl basis-1/3 mb-6"
                    >
                    <s.skill className="text-6xl mb-2" />
                    <span>{s.nama}</span>
                    </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SkillControl;
