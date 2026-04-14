import { Helmet } from "react-helmet-async";
import { usePageTitle } from "@/hooks/usePageTitle";

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export default function PageHelmet({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType,
}: Props) {
  usePageTitle(title);

  return (
    <Helmet>
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogType && <meta property="og:type" content={ogType} />}
    </Helmet>
  );
}