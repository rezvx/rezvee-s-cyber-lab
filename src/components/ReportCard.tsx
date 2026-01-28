import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ReportCardProps {
  title: string;
  type: string;
  summary: string;
  date: string;
  pdfUrl?: string;
}

const ReportCard = ({ title, type, summary, date, pdfUrl }: ReportCardProps) => {
  return (
    <motion.div
      className="cyber-card rounded-xl p-6 group relative overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Soft glow overlay (only on hover) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at 30% 20%, rgba(255, 145, 0, 0.12), transparent 45%)",
        }}
      />

      {/* Border glow ring (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255, 145, 0, 0.18), 0 22px 44px rgba(255, 145, 0, 0.08)",
          borderRadius: "12px",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-4">
          <motion.div
            className="p-3 rounded-lg bg-cyber-orange/10 group-hover:bg-cyber-orange/20 transition-colors"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            style={{
              boxShadow: "0 0 0 rgba(255, 145, 0, 0)",
            }}
          >
            <FileText className="h-6 w-6 text-cyber-orange" />
          </motion.div>

          <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
            {type}
          </span>
        </div>

        <h1 className="font-bold text-lg text-foreground mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">{date}</span>

          <div className="flex gap-2">
            {/* View (Eye) - open in new tab */}
            {pdfUrl ? (
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  aria-label="View report"
                  className="hover:shadow-[0_0_0_4px_rgba(255,145,0,0.10)]"
                >
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View PDF"
                  >
                    <Eye className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ) : (
              <Button variant="ghost" size="sm" aria-label="View report" disabled>
                <Eye className="h-4 w-4" />
              </Button>
            )}

            {/* Download - force download */}
            {pdfUrl && (
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Button
                  variant="cyber-outline"
                  size="sm"
                  asChild
                  aria-label="Download PDF"
                  className="hover:shadow-[0_0_0_4px_rgba(255,145,0,0.10)]"
                >
                  <a href={pdfUrl} download title="Download PDF">
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReportCard;
