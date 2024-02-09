import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Container Grundlagen",
    Svg: require("@site/static/img/undraw_education_f8ru.svg").default,
    description: (
      <>
        Lerne, was Container sind, warum sie wichtig sind und wie sie die
        Softwareentwicklung und -bereitstellung revolutionieren.
      </>
    ),
  },
  {
    title: "Einleitung in Docker",
    Svg: require("@site/static/img/undraw_server_re_twwj.svg").default,
    description: (
      <>
        Erlerne die Grundlagen von Docker, einschliesslich der Erstellung und
        Verwaltung von Containern und Images.
      </>
    ),
  },
  {
    title: "Praktische Labore mit Docker",
    Svg: require("@site/static/img/undraw_coding_re_iv62.svg").default,
    description: (
      <>
        Wende deine neuen Kenntnisse in praxisnahen Laboren an und festige so
        den Umgang mit der Docker-Technologie.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
