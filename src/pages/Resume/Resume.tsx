import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SitePrimaryButton } from '../../theme/theme';
import ProfilePicture from '../../img/layne.png';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';
import {
  ResponsiveContent,
  ResponsiveContentType
} from '../../components/ResponsiveContent/ResponsiveContent';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

const GoogleDriveResumeLink =
  'https://docs.google.com/document/d/1ntg-qp8GKCgLZqkCdXmn6jiNTcvupTqnP4o6Cp7Zqe4/edit';

const GitHubLink = 'https://github.com/laynebritton';

const LinkedInLink = 'https://www.linkedin.com/in/layne-britton-85339b149/';

const Resume: FC = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_ABOUT);

  return (
    <>
      <Container>
        <Row>
          <ResponsiveContent type={ResponsiveContentType.COLUMN}>
            <br />
            <h1>Layne Britton</h1>

            <br />

            <h5>{'Software Engineer'}</h5>
            <h5>{'B.A. in Computer Science, Columbia University'}</h5>

            <br />

            <Button
              href={GoogleDriveResumeLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_RESUME);
              }}
            >
              Resume
            </Button>
            <br />
            <br />

            <Button
              href={GitHubLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_GITHUB);
              }}
            >
              GitHub
            </Button>
            <br />
            <br />

            <Button
              href={LinkedInLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_LINKEDIN);
              }}
            >
              LinkedIn
            </Button>
            <br />
            <br />
          </ResponsiveContent>
          <Col sm="4">
            <img
              style={{ width: '100%', borderRadius: '50%' }}
              src={ProfilePicture}
            />
          </Col>
        </Row>
        <ResponsiveContent type={ResponsiveContentType.ROW}>
          <h2>Bio</h2>
          <p>
            {
              "Hello! My name is Layne. I'm an engineer currently living in Brooklyn, NY."
            }
          </p>
          <br />
          <p>
            {
              'I am currently a Software Engineer at Yahoo, working on platform engineering.'
            }
          </p>
          <br />
          <p>
            {
              'I previously was a Software Engineer at Ribbon Home, building a platform to help regular people win offers on homes against investment banks and house flippers. I also spent time at BCG Digital Ventures where I built, launched, and handed-off startups to our clients. Before then I was at the Japan Research Institute America, upgrading and developing financial systems. Learn more in my resume.'
            }
          </p>
          <br />
          <span>
            <p>
              {"I'm"} passionate about engineering quality and extensible
              products that improve lives. My favorite tech stack is React
              Typescript with Python or Java. My favorite engineering book is{' '}
              <i>Clean Code</i> by Bob Martin.
            </p>
          </span>
          <br />
          <p>
            {
              "Very interested in how technology intersects with society. Areas of interest are urban development, sustainability, cosmology, education, and political activism. Please reach out if you know of any interesting projects in these spaces, especially if they're open source!"
            }
          </p>
        </ResponsiveContent>
        {/* Placing empty div here for better navigation auto-scroll */}
        <div id="projects" />
      </Container>
      <Container style={{ marginTop: '5%' }}>
        <Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Projects</h1>
          </div>
          <Col xs={1} sm={1}></Col>
          <Col xs={10} sm={10}>
            <Row>
              <ProjectCard
                title={'Infinite Dogs'}
                description={
                  'Scroll through dogs instead of doomscrolling. I loved the designs and theming I created for this, so I updated this site to use them too!'
                }
                media={
                  'https://s3.amazonaws.com/laynebritton.net-media/public/infinite-dogs-square-thumbnail.png'
                }
                projectUrl={'https://laynebritton.github.io/dog-project/'}
                githubUrl={'https://github.com/laynebritton/dog-project'}
                eventName={ANALYTICS_CONSTANTS.CLICK_INFINITE_DOGS}
              />
              <ProjectCard
                title={'LayneBritton.net'}
                description={
                  'This website. Built in React Typescript. Includes internal analytics. Hosted using Google Cloud. Check it out on mobile and desktop.'
                }
                media={
                  'https://s3.amazonaws.com/laynebritton.net-media/public/square-analytics-thumbnail.png'
                }
                projectUrl={'http://www.laynebritton.net/'}
                projectUrlLabel={'Recursion'}
                githubUrl={
                  'https://github.com/laynebritton/laynebritton.net-v2'
                }
                eventName={ANALYTICS_CONSTANTS.CLICK_LAYNE_BRITTON_NET}
              />
              <ProjectCard
                title={'Lit Hum: The Fighting Game'}
                description={
                  <>
                    <span>
                      A 2D fighting video game featuring classic literature
                      protagonists. Winner of the{' '}
                      <a
                        href="https://www.college.columbia.edu/core/scholars/reflection/4135"
                        target="_"
                      >
                        2020 Core Scholar award at Columbia University
                      </a>
                      . Built in a custom game engine I wrote and with art I
                      spliced together from the MET, paintings, and book covers.
                    </span>
                  </>
                }
                media={
                  'http://www.columbia.edu/~lmb2289/lit-hum-game/images/troy-battle.JPG'
                }
                projectUrl={
                  'https://www.college.columbia.edu/core/scholars/reflection/4135'
                }
                githubUrl={'https://github.com/laynebritton/lit-hum-game'}
                eventName={ANALYTICS_CONSTANTS.CLICK_LIT_HUM_GAME}
              />
              <ProjectCard
                title={'JL Fast Treecapitator'}
                description={
                  <>
                    <span>
                      An open-source mod for{' '}
                      <a href="https://www.minecraft.net/en-us" target="_">
                        Minecraft
                      </a>{' '}
                      to chop down trees and mine ore in one swoop. Runs on all
                      platforms and consoles. Written in TypeScript. Utilizes
                      modified Depth-first-search for better speed and hardware
                      performance than comparable mods.
                    </span>
                  </>
                }
                media={
                  'https://user-images.githubusercontent.com/21363865/253672687-ad5bfb36-c16f-40e8-853f-b1d7cdb4e88d.gif'
                }
                // projectUrl={
                //   'https://github.com/laynebritton/jl-fast-treecapitator'
                // }
                githubUrl={
                  'https://github.com/laynebritton/jl-fast-treecapitator'
                }
                eventName={ANALYTICS_CONSTANTS.CLICK_LIT_HUM_GAME}
              />
              {/* <ProjectCard
                title={'QuickAttunement for Foundry Virtual Table Top'}
                description={
                  'A mod I made for the tool my friends and I use to play Dungeons and Dragons. Simplifies a common user flow without introducing any new UI. See those flows in action on GitHub.'
                }
                media={
                  'https://s3.amazonaws.com/laynebritton.net-media/public/d%26dfoundry-sqaure-thumbnail.png'
                }
                githubUrl={
                  'https://github.com/laynebritton/QuickAttunement-FoundryVTT'
                }
                eventName={ANALYTICS_CONSTANTS.CLICK_GITHUB}
              /> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
