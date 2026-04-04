const skills = [
  { name: "HTML & CSS", level: 95, color: "from-orange-400 to-amber-500" },
  { name: "JavaScript", level: 92, color: "from-yellow-400 to-orange-500" },
  { name: "React & Next.js", level: 90, color: "from-sky-400 to-blue-500" },
  { name: "Node.js", level: 88, color: "from-emerald-400 to-teal-500" },
  { name: "FastAPI & Django", level: 84, color: "from-cyan-400 to-sky-500" },
  { name: "Python", level: 88, color: "from-blue-400 to-indigo-500" },
  { name: "AI / ML", level: 80, color: "from-fuchsia-400 to-pink-500" },
  { name: "Cloud & DevOps", level: 82, color: "from-lime-400 to-emerald-500" },
];

const SkillsBarChart = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.name} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-slate-900 dark:text-slate-100">{skill.name}</span>
            <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBarChart;
