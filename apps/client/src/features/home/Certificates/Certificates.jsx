import { Section } from "../../../components/layout";
import useCertificates from "../../certificates/hooks/useCertificates";
import { Skeleton } from "../../../components/feedback";
import {
  Button,
  Card,
  ImageCarousel,
  Reveal,
} from "../../../components/common";
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
          {items.map((certificate, index) => (
            <Reveal delay={index * 0.05}>
              <Card key={certificate.id} className="certificate">
                <ImageCarousel
                  image={certificate.image}
                  alt={certificate.name}
                />
                <div className="certificate__body">
                  <h3 className="certificate__title">{certificate.name}</h3>
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
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}
