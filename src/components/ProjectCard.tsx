import { Github, FlaskConical, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="cyber-card rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyber-green/10">
            <FlaskConical className="h-5 w-5 text-cyber-green" />
          </div>
          <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
            {environment}
          </span>
        </div>
      </div>

      <h3 className="font-bold text-xl text-foreground mb-3">{title}</h3>

      <p className="text-sm text-muted-foreground mb-4 flex-1">{objectives}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
            Methodology
          </h4>
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
          <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
            Tools Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {(githubUrl || reportUrl || liveUrl) && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-border">
            {githubUrl && (
              <Button variant="cyber-outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </span>
                </a>
              </Button>
            )}

            {reportUrl && (
              <Button variant="secondary" size="sm" asChild>
                <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    Report
                  </span>
                </a>
              </Button>
            )}

            {liveUrl && (
              <Button variant="default" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </span>
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
