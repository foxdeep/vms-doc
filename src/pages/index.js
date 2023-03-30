import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import UserProfile from '@site/static/img/user_profile.svg';
import Header from '@site/src/components/Header';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <div className="container">
        <Header />
      </div>
    </Layout >
  );
}
