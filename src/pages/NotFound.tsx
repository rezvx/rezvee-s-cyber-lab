import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import PageHelmet from "@/components/PageHelmet";


const NotFound = () => {
  return (
    <Layout>
      
     <PageHelmet
                     title="404 Error | Rezvee Parvez"
                     description="The page you are looking for cannot be found. Explore Rezvee Parvez's cybersecurity projects, certifications, and contact information."
                     keywords="404 error, page not found, Rezvee Parvez, cybersecurity projects, certifications, contact"
                     ogTitle="404 Error | Rezvee Parvez"
                     ogDescription="The page you are looking for cannot be found. Explore Rezvee Parvez's cybersecurity projects, certifications, and contact information."
                     ogType="website"
                   />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10">
            <ShieldAlert className="h-7 w-7 text-primary" />
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            Page Not Found!
          </h1>

          <p className="text-muted-foreground mb-8 font-mono text-sm">
  Error: route_not_found<br />
  Status: 404<br />
  Action: navigate_back
</p>


          <div className="flex justify-center gap-3">
            <Button asChild variant="secondary">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="cyber-outline">
              <Link to="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
