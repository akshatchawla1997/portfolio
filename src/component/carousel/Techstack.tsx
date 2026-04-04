import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiAmazonaws,
  SiGooglecloud,
  SiDigitalocean,
  SiTensorflow,
  SiFastapi,
} from "react-icons/si";

const stackItems = [
  { name: "React", icon: <SiReact className="h-10 w-10 text-sky-400" />, label: "React" },
  { name: "Next.js", icon: <SiNextdotjs className="h-10 w-10 text-slate-200" />, label: "Next.js" },
  { name: "JavaScript", icon: <SiJavascript className="h-10 w-10 text-yellow-400" />, label: "JavaScript" },
  { name: "Node.js", icon: <SiNodedotjs className="h-10 w-10 text-green-500" />, label: "Node.js" },
  { name: "Express", icon: <SiExpress className="h-10 w-10 text-slate-300" />, label: "Express" },
  { name: "Python", icon: <SiPython className="h-10 w-10 text-sky-500" />, label: "Python" },
  { name: "Django", icon: <SiDjango className="h-10 w-10 text-emerald-400" />, label: "Django" },
  { name: "FastAPI", icon: <SiFastapi className="h-10 w-10 text-cyan-400" />, label: "FastAPI" },
  { name: "AWS", icon: <SiAmazonaws className="h-10 w-10 text-amber-400" />, label: "AWS" },
  { name: "GCP", icon: <SiGooglecloud className="h-10 w-10 text-blue-400" />, label: "GCP" },
  { name: "DigitalOcean", icon: <SiDigitalocean className="h-10 w-10 text-cyan-500" />, label: "DigitalOcean" },
  { name: "TensorFlow", icon: <SiTensorflow className="h-10 w-10 text-orange-400" />, label: "TensorFlow" },
];

function TechStack() {
  return (
    <section className="py-10">
      <div className="mb-8">
        <h2 className="text-4xl font-semibold">Tech Stack I work with</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Modern development across frontend, backend, cloud, and AI platforms.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {stackItems.map((stack) => (
          <div
            key={stack.name}
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              {stack.icon}
            </div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{stack.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack
