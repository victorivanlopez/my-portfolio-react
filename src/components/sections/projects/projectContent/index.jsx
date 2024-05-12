import { usePortfolioContext } from '../../../../hooks';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {
  ContentProject,
  DescriptionProject,
  DetailsProject,
  DetailsProjectItem,
  GridProject,
} from './styles';
import { Spinner } from '../../../ui';
import { ProjectTechnologies } from '../projectTechnologies';

export const ProjectContent = () => {
  const { project, isLoading } = usePortfolioContext();

  if ((isLoading)) return <Spinner />

  const { title, description, client, repoURL, siteURL, cover } = project?.attributes;

  const imageURL = cover.data.attributes.formats.small.url;
  const siteURLText = siteURL?.split('//')[1];
  const repoURLText = repoURL?.split('https://github.com/')[1];

  return (
    <>
      <h2>{title}</h2>

      <GridProject>
        <div>
          <img src={imageURL} alt={`Portada sitio web ${title}`} />
          <DetailsProject>
            <DetailsProjectItem>
              <span>Cliente:</span>
              <p>{client}</p>
            </DetailsProjectItem>
            <DetailsProjectItem>
              <span>URL:</span>
              <a href={siteURL} target='_blank'>{siteURLText}</a>
            </DetailsProjectItem>
            {
              (repoURL) && (
                <>
                  <DetailsProjectItem>
                    <span>Repositorio:</span>
                    <a href={repoURL} target='_blank'>{repoURLText}</a>
                  </DetailsProjectItem>
                </>
              )
            }
          </DetailsProject>
        </div>

        <ContentProject>
          <h3>Descripción</h3>
          <DescriptionProject>
            <BlocksRenderer content={description} />
          </DescriptionProject>
        </ContentProject>
      </GridProject>
    </>
  )
}