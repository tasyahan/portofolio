import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python",
    "fastapi",
    "php",
    "laravel",
    "git",
    "github",
    "html5",
    "css3",
    "typescript",
    "javascript",
    "react",
    "express",
    "nextjs",
    "mysql",
    "elastic-search",
    "ollama",
    "comfyui",
    "huggingface",
    "minio",
    "sequelize",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
