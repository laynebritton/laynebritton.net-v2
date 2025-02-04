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
import * as ROUTES from '../../util/Routes';

const GoogleDriveResumeLink =
  'https://docs.google.com/document/d/1ntg-qp8GKCgLZqkCdXmn6jiNTcvupTqnP4o6Cp7Zqe4/edit';

const GitHubLink = 'https://github.com/laynebritton';

export const LinkedInLink =
  'https://www.linkedin.com/in/layne-britton-85339b149/';

const Resume: FC = () => {
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
          <p>
            {
              "Hello! My name is Layne. I'm an engineer currently living in Brooklyn, NY."
            }
          </p>
          <br />
          <p>
            Right now I{"'"}m a software engineer at Amazon, working in Amazon
            Ads. I work in global big data, optimizing ad performance for
            advertisers on Amazon.com through robust data pipelines.
          </p>
          <br />
          <p>
            Before Amazon, I was at Yahoo, working on platform engineering. I
            primarily worked on a globally distributed NoSQL database with
            <b> millions</b> of reads & writes per second. Prior to that, I was
            a Software Engineer at Ribbon Home, building a web platform to help
            regular people win offers on homes against investment banks and
            house flippers. I also spent time at BCG Digital Ventures where I
            built, launched, and handed-off healthtech startups to our clients.
            Before then I was at the Japan Research Institute America, upgrading
            and developing financial systems. Learn more about these experiences
            in my <a href={ROUTES.RESUME_ANCHOR}>resume.</a>
          </p>
          <br />
          <span>
            <p>
              {"I'm"} passionate about engineering quality and extensible
              products that improve lives. My front-end framework of choice
              nowadays is React Typescript. I enjoy working in back-end Java,
              Javascript, Python, and C#. My favorite engineering design book is{' '}
              <i>Clean Code</i> by Bob Martin.
            </p>
          </span>
          <br />
          <p>
            Outside of work I love building interesting engineering projects.
            I&#39;m always tinkering with something new. You can see some
            published projects below. I enjoy exploring the intersection of
            technology and urban development, public transportation,
            sustainability, cosmology, education, gaming, and political
            activism. I{"'"}d love to hear about exciting projects in these
            spaces, especially open-source ones—feel free to reach out!
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
                title={'JL Fast Treecapitator'}
                description={
                  <>
                    <span>
                      An open-source mod for{' '}
                      <a href="https://www.minecraft.net/en-us" target="_">
                        Minecraft
                      </a>{' '}
                      to chop down trees and mine ore in one swoop. Runs on all
                      platforms and consoles. <b>20+ active users.</b> Written
                      in TypeScript. Utilizes optimized Depth-first-search for
                      faster speed and hardware performance than comparable
                      mods.
                    </span>
                  </>
                }
                media={
                  'https://user-images.githubusercontent.com/21363865/253672687-ad5bfb36-c16f-40e8-853f-b1d7cdb4e88d.gif'
                }
                githubUrl={
                  'https://github.com/laynebritton/jl-fast-treecapitator'
                }
                eventName={ANALYTICS_CONSTANTS.CLICK_JL_TREE_CAP}
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
                      . Built in a custom game engine I created from scratch and
                      with art I spliced together from the MET, paintings, and
                      book covers.
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
