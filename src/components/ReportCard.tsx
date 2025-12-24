import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportCardProps {
  title: string;
  type: string;
  summary: string;
  date: string;
  pdfUrl?: string;
}

const ReportCard = ({ title, type, summary, date, pdfUrl }: ReportCardProps) => {
  return (
    <div className="cyber-card rounded-xl p-6 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="p-3 rounded-lg bg-cyber-orange/10 group-hover:bg-cyber-orange/20 transition-colors">
          <FileText className="h-6 w-6 text-cyber-orange" />
        </div>
        <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
          {type}
        </span>
      </div>

      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{summary}</p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">{date}</span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
          {pdfUrl && (
            <Button variant="cyber-outline" size="sm" asChild>
              <a href={pdfUrl} download>
                <Download className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
