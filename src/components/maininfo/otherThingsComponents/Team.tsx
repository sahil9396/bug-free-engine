import Image from "next/image";
import React from "react";
import SmallerScreenFooter from "./SmallerScreenFooter";

const engineers = [
  {
    name: "Alice Johnson",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1570622294846-4ff922b50fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnN8ZW58MHx8MHx8fDA%3D",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus voluptatum repudiandae rerum a doloremque totam consectetur commodi maiores consequuntur animi voluptatem autem ipsam dignissimos exercitationem laudantium, beatae unde corrupti incidunt labore accusantium id. Dignissimos minus cupiditate quidem corrupti esse minima nisi sunt illo, distinctio accusamus ex architecto neque doloribus!",
  },
  {
    name: "Bob Williams",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1565110426846-2f694d651aaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus voluptatum repudiandae rerum a doloremque totam consectetur commodi maiores consequuntur animi voluptatem autem ipsam dignissimos exercitationem laudantium, beatae unde corrupti incidunt labore accusantium id. Dignissimos minus cupiditate quidem corrupti esse minima nisi sunt illo, distinctio accusamus ex architecto neque doloribus!",
  },
  {
    name: "John Smith",
    role: "CEO",
    image:
      "https://plus.unsplash.com/premium_photo-1679941668727-7664fef2b6c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnN8ZW58MHx8MHx8fDA%3D",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus voluptatum repudiandae rerum a doloremque totam consectetur commodi maiores consequuntur animi voluptatem autem ipsam dignissimos exercitationem laudantium, beatae unde corrupti incidunt labore accusantium id. Dignissimos minus cupiditate quidem corrupti esse minima nisi sunt illo, distinctio accusamus ex architecto neque doloribus!",
  },
];

const Team = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-white flex flex-col gap-6 rounded-lg">
      <h3 className="font-semibold text-xl md:text-2xl leading-[28.8px] text-[#0F1629]">
        Team
      </h3>
      <p className="text-[#3E424A] font-medium text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-6">
        {engineers.map((engineer) => (
          <Engineer engineer={engineer} key={engineer.name} />
        ))}
      </div>
      <div className="bg-white block lg:hidden">
        <SmallerScreenFooter />
      </div>
    </div>
  );
};

export default Team;

const Engineer = ({
  engineer,
}: {
  engineer: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div
      id="Team"
      className="flex flex-col md:flex-row items-center gap-4 p-4 border border-[#E5E5E5] rounded-lg bg-[#E8F4FD]"
    >
      {/* Image and Name Section */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-[7rem]">
        <Image
          src={engineer.image}
          alt={`${engineer.name}'s profile`}
          width={96}
          height={96}
          className="rounded-lg w-[96px] h-[96px] object-cover"
        />
        <div className="mt-4 md:mt-2 text-center md:text-left">
          <p className="text-base font-medium text-[#0F1629]">
            {engineer.name}
          </p>
          <p className="text-sm font-medium text-[#788F9B]">{engineer.role}</p>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-sm md:text-base text-[#0F1629] font-medium leading-relaxed ">
        {engineer.description}
      </p>
    </div>
  );
};
