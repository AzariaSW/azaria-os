import { Section } from "../../../components/layout";
import useSkills from "../../skills/hooks/useSkills";
import { Skeleton } from "../../../components/feedback";
import { Card, Reveal } from "../../../components/common";
import "./Skills.css";

export default function Skills() {
  const { data: skills = [], isLoading, isError } = useSkills();
  const { items } = skills;
  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return (
      <section id="skills" className="failed">
        Failed to load skills.
      </section>
    );
  }

  if (!items.length) {
    return (
      <section id="skills">
        <Section title="Skills" description="Technologies I use.">
          <p className="skills skills__none">No skills available.</p>
        </Section>
      </section>
    );
  }

  const groupedSkills = items.reduce((groups, skill) => {
    const category = skill.category || "Other";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(skill);

    return groups;
  }, {});

  return (
    <section id="skills">
      <Section
        title="Skills"
        description="Technologies I use to build scalable and maintainable software."
      >
        <div className="skills">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <Reveal delay={index * 0.05}>
              <div key={category} className="skills__group">
                <h3 className="skills__group-title">{category}</h3>
                <div className="skills__list">
                  {skills.map((skill) => (
                    <Card key={skill.id} className="skill">
                      <span className="skill__name">{skill.name}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}
