import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => {
  return (
    <motion.div
      className="cyber-card rounded-xl p-6 group"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0, 255, 200, 0.08)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>

        <h1 className="font-semibold text-lg text-foreground">{title}</h1>
      </div>

      {/* Skills (VISIBLE by default) */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          rest: { transition: { staggerChildren: 0 } },
          hover: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              rest: { opacity: 1, y: 0 },
              hover: { opacity: 1, y: -1 },
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="px-3 py-1.5 text-xs font-medium bg-secondary rounded-full
                       text-muted-foreground hover:text-primary hover:bg-primary/10
                       transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
