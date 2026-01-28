interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeader = ({ badge, title, highlight, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
          {badge}
        </span>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h1>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
