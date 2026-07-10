import { missionData } from "../Data/mission";

function MissionCard({ icon: Icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="max-w-60 p-6 rounded-xl bg-slate-900 text-white hover:scale-105 border hover:border-green-300"
    >
      <Icon className="text-4xl text-white mb-4" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function MissionGrid({ onCommand }) {
  return (
    <div className="grid gap-6 grid-cols-2 xl:grid-cols-3">
      {missionData.map((mission) => (
        <MissionCard
          key={mission.id}
          icon={mission.icon}
          title={mission.title}
          description={mission.description}
          onClick={() => onCommand(mission.command)}
        />
      ))}
    </div>
  );
}
