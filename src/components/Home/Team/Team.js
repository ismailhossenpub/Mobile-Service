import React from "react";
import TeamMember1 from "../../../images/Team1.jpg";
import TeamMember2 from "../../../images/Team2.jpg";
import TeamMember3 from "../../../images/Team3.jpg";
import TeamDetail from "../TeamDetail/TeamDetail";

const Team = () => {
  const TeamData = [
    {
      name: "Symphony Mobile Team",
      img: TeamMember1,
    },
    {
      name: "Samsung Mobile Team",
      img: TeamMember2,
    },
    {
      name: "Vivo Mobile Team",
      img: TeamMember3,
    },
  ];
  return (
    <section className="Team-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>Our Team Members</h5>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-3 pt-5">
          {TeamData.map((team) => (
            <TeamDetail team={team}></TeamDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
