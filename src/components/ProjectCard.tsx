import { Github, FlaskConical, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  environment: string;
  objectives: string;
  methodology: string[];
  tools: string[];
  githubUrl?: string;
  reportUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  environment,
  objectives,
  methodology,
  tools,
  githubUrl,
  reportUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="cyber-card rounded-xl p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        boxShadow: "0 22px 44px rgba(0, 255, 200, 0.08)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {/* Icon block */}
          <motion.div
            className="p-2 rounded-lg bg-cyber-green/10"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <FlaskConical className="h-5 w-5 text-cyber-green" />
          </motion.div>

          {/* Environment pill */}
          <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
            {environment}
          </span>
        </div>
      </div>

      <h1 className="font-bold text-xl text-foreground mb-3">{title}</h1>

      <p className="text-sm text-muted-foreground mb-4 flex-1">{objectives}</p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
            Methodology
          </h2>

          <ul className="text-sm text-muted-foreground space-y-1">
            {methodology.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
            Tools Used
          </h3>

          {/* Tool tags with a subtle stagger on hover */}
          <motion.div
            className="flex flex-wrap gap-1.5"
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={{
              rest: { transition: { staggerChildren: 0 } },
              hover: { transition: { staggerChildren: 0.03 } },
            }}
          >
            {tools.map((tool) => (
              <motion.span
                key={tool}
                variants={{
                  rest: { opacity: 1, y: 0 },
                  hover: { opacity: 1, y: -1 },
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Action Buttons */}
        {(githubUrl || reportUrl || liveUrl) && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-border">
            {githubUrl && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="cyber-outline" size="sm" asChild className="w-full">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center justify-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </span>
                  </a>
                </Button>
              </motion.div>
            )}

            {reportUrl && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="secondary" size="sm" asChild className="w-full">
                  <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center justify-center gap-2">
                      <FileText className="h-4 w-4" />
                      Report
                    </span>
                  </a>
                </Button>
              </motion.div>
            )}

            {liveUrl && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="default" size="sm" asChild className="w-full">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </span>
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
