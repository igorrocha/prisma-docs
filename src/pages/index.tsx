import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import { Icon } from "@site/src/components/Icon";
import {
  CommunityLinksData,
  DatabaseData,
  ORMGeneralLinkData,
  ORMCardLinkData,
  ProductLinkData,
} from "@site/src/data/indexData";

import styles from "./index.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import DarkImg from "../theme/DarkImg";

function HomepageCard({
  className,
  heading,
  body,
  links,
}: {
  className: string;
  heading: JSX.Element;
  body: JSX.Element;
  links: JSX.Element[];
}): JSX.Element {
  return (
    <div className={className}>
      {heading}
      {body}
      <div className={styles.linkGrid}>{links}</div>
    </div>
  );
}

function HomepageProductCards() {
  return (
    <div className={styles.homepageTopSection}>
      <div className={styles.productCardsWrapper}>
        {Object.keys(ProductLinkData).map((e: keyof typeof ProductLinkData) => {
          const cardHeader = (
            <Heading as="h3" className={styles.h3}>
              <div className={styles.icon}>
                <Icon icon={`fa-solid fa-${ProductLinkData[e].icon}`} size="22px" color="white" />
              </div>
              {ProductLinkData[e].title}
            </Heading>
          );
          const cardBody = <div className={styles.body}>{ProductLinkData[e].description}</div>;
          const cardLinks = ProductLinkData[e].links.map((link) => (
            <Link to={link.url}>
              {link.title} {link.external ? <>&#8599;</> : <>&#8594;</>}
            </Link>
          ));
          return (
            <HomepageCard
              className={e === "porm" ? styles.productCardIndigo : styles.productCardTeal}
              heading={cardHeader}
              body={cardBody}
              links={cardLinks}
            />
          );
        })}
      </div>
    </div>
  );
}

function HomepageORMLinksSection() {
  return (
    <div className={styles.ormLinkSectionWrapper}>
      <Heading as="h4" className={styles.h4}>
        Resources
      </Heading>
      <div>
        {ORMGeneralLinkData.map((link, index) => (
          <Link key={index} to={link.url} className={styles.ormLinkWrapper}>
            <div className={styles.icon}>
              <Icon icon={link.icon} color="inherit" size="22px" className="light" />
            </div>
            <div>
              <h5>
                {link.title} <span>&#8594;</span>
              </h5>
              <p>{link.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HomepageORMCards() {
  return (
    <div className={styles.ormCardsSection}>
      <div className={styles.ormCardsWrapper}>
        {Object.keys(ORMCardLinkData).map((e) => {
          const cardHeader = (
            <Heading as="h4" className={styles.h4}>
              {ORMCardLinkData[e].title}
            </Heading>
          );
          const cardBody = <div className={styles.body}>{ORMCardLinkData[e].description}</div>;
          const cardLinks = ORMCardLinkData[e].links.map((link) => (
            <Link to={link.url}>
              {link.title} {link.external ? <>&#8599;</> : <>&#8594;</>}
            </Link>
          ));
          return (
            <HomepageCard
              className={styles.productCardIndigo}
              heading={cardHeader}
              body={cardBody}
              links={cardLinks}
            />
          );
        })}
      </div>
    </div>
  );
}

function HomepageDatabasesSection() {
  return (
    <div className={styles.databasesSection}>
      <Heading as="h4" className={styles.h4}>
        Databases
      </Heading>
      <div className={styles.body}>
        Prisma ORM works seamlessly across most popular databases and service providers. Refer to
        our <Link to="/orm/reference/database-features">Database features matrix</Link> for
        information about supported features and types for each database.
        <br />
        To explore supported databases for Accelerate, visit the{" "}
        <Link to="/accelerate/getting-started#prerequisites">prerequisites section</Link>. For
        Pulse, see the <Link to="/pulse/database-setup">database setup documentation</Link>.
      </div>
      <div className={styles.databaseGrid}>
        {DatabaseData.map((e) => (
          <Link to={e.url} className={styles.linkCardWrapper}>
            <div className={styles.databaseEntry}>
              <DarkImg
                icon={useBaseUrl(e.icon)}
                darkIcon={useBaseUrl(e.darkIcon)}
                style={{
                  height: `100%`,
                  width: e.icon.endsWith("sqlite.svg") ? `55px` : `auto`,
                  marginRight: e.icon.endsWith("sqlite.svg") ? `-30px` : 0,
                }}
              />
              <span>{e.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HomepageCommunitySection() {
  return (
    <div className={styles.communityLinksSection}>
      <div>
        <div className={styles.sectionHero}>
          <Heading as="h3" className={styles.h3}>
            Join our Community
          </Heading>
          <p>
            We have multiple channels where you can get help from members of our community as well
            as the Prisma team.
          </p>
        </div>
        <div className={styles.communityLinksRow}>
          {CommunityLinksData.map((communityInfo) => (
            <div key={communityInfo.id} className={styles.communityLinkCard}>
              <Link
                to={communityInfo.link}
                rel="noreferrer"
                target="_blank"
                className={clsx(styles.communityLinkWrapper, styles.content)}
              >
                <Icon icon={communityInfo.icon} color="VAR HERE" size="22px" />
                <div>
                  <div>
                    <h4>{communityInfo.title}</h4>
                    <div className={styles.body}>{communityInfo.description}</div>
                  </div>
                  <div className={styles.link}>
                    <span>{communityInfo.linkText}</span>
                    <span> &#8599;</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  return (
    <Layout description="Get started with Prisma in the official documentation, and learn more about all Prisma's features with reference documentation, guides, and more.">
      <Head>
        <link rel="canonical" href="https://www.prisma.io/docs" />
      </Head>
      <main className={styles.mainHome}>
        <HomepageProductCards />
        <HomepageORMLinksSection />
        <HomepageORMCards />
        <HomepageDatabasesSection />
        <HomepageCommunitySection />
      </main>
    </Layout>
  );
}
