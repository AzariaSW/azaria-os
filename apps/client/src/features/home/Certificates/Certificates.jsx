import { Section } from "../../../components/layout";
import useCertificates from "../../certificates/hooks/useCertificates";
import { Skeleton } from "../../../components/feedback";
import { Button, Card, ImageCarousel } from "../../../components/common";
import formatDate from "../../../utils/formatDate";
import "./Certificates.css";

export default function Certificates() {
  const { data: certificates = [], isLoading, isError } = useCertificates();
  const { items } = certificates;

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return (
      <section id="experience" className="failed">
        Failed to load experience.
      </section>
    );
  }

  if (!items.length) {
    return (
      <section id="experience">
        <Section title="Experience" description="My professional journey.">
          <p className="experience experience__none">
            No experience available.
          </p>
        </Section>
      </section>
    );
  }

  return (
    <section id="certificates">
      <Section
        title="Certificates"
        description="Professional certifications and achievements."
      >
        <div className="certificates">
          {items.map((certificate) => (
            <Card key={certificate.id} className="certificate">
              <ImageCarousel
                image={certificate.image}
                alt={certificate.title}
              />
              <div className="certificate__body">
                <h3 className="certificate__title">{certificate.title}</h3>
                <p className="certificate__issuer">{certificate.issuer}</p>
                <p className="certificate__date">
                  {formatDate(certificate.issueDate)}
                </p>
                {certificate.url && (
                  <Button
                    as="a"
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    View Credential
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </section>
  );
}
