import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { SitePrimaryButton } from '../../theme/theme';
import { TrackEvent } from '../../util/Analytics';

export type ProjectCardProps = {
  title: string;
  description: string | React.ReactNode;
  media?: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  githubUrl?: string;
  eventName?: string;
};

export const ProjectCard = ({
  title,
  description,
  media,
  projectUrl,
  projectUrlLabel = 'Project',
  githubUrl,
  eventName = 'UNAMED_PROJECT'
}: ProjectCardProps) => {
  return (
    <Col xs={12} sm={6} style={{ marginBottom: '1rem' }}>
      <Card bg={'dark'}>
        {media && (
          <>
            <Card.Img
              variant="top"
              src={media}
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1 / 1'
              }}
            />
          </>
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {projectUrl && (
            <>
              <Button
                href={projectUrl}
                target="_blank"
                style={SitePrimaryButton}
                onClick={() => {
                  TrackEvent(eventName);
                }}
              >
                {projectUrlLabel}
              </Button>{' '}
            </>
          )}
          {githubUrl && (
            <>
              <Button
                href={githubUrl}
                target="_blank"
                style={SitePrimaryButton}
                onClick={() => {
                  TrackEvent(eventName + ' GitHub');
                }}
              >
                GitHub
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
