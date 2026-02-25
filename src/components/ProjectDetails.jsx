import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-violet-950 border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl"
        />

        <div className="p-4 sm:p-5">
          <h5 className="mb-2 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h5>

          <p className="mb-3 text-sm font-normal text-neutral-400 sm:text-base">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 text-sm font-normal text-neutral-400 sm:text-base"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 sm:size-10 hover-animation"
                />
              ))}
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium sm:text-base cursor-pointer hover-animation"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-3 sm:size-4"
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;