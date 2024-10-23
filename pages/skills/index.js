import TypingAnimation from "@/components/ui/typing-animation";
import React from "react";

const SkillRoutes = () => {
  return (
    <div className="mt-2 ">
      <TypingAnimation
        className="text-4xl font-bold text-gray-300 dark:text-white"
        text="Skills grow , so will this section..."
      />
      <div className="max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mt-2"></div>
    </div>
  );
};

export default SkillRoutes;
