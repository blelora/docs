import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Device Firmware',
    Svg: require('@site/static/img/one_part.svg').default,
    description: (
      <>
        Example Arduino Firmware
      </>
    ),
  },
  {
    title: 'Flashing & OTA Tools',
    Svg: require('@site/static/img/two_parts.svg').default,
    description: (
      <>
       Cross platform CLI tools for flashing and OTA firmware updates.
      </>
    ),
  },
  {
    title: 'Crossplatform Mobile App',
    Svg: require('@site/static/img/three_parts.svg').default,
    description: (
      <>
        Example mobile app for Android and iOS, capable of configuration, control, and firmware updates over BLE. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
