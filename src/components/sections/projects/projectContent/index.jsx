import { usePortfolioContext } from '../../../../hooks';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {
  ContentProject,
  DescriptionProject,
  DetailsProject,
  GridProject,
} from './styles';
import { Spinner } from '../../../ui';

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
        <img src={imageURL} alt={`Portada sitio web ${title}`} />

        <ContentProject>
          <h3>Descripción</h3>
          <DescriptionProject>
            <BlocksRenderer content={description} />
          </DescriptionProject>
          <h3>Información adicional</h3>
          <DetailsProject>
            <li>
              <p><span>Cliente:</span> {client}</p>
            </li>
            <li>
              <p><span>URL:</span> <a href={siteURL} target='_blank'>{siteURLText}</a></p>
            </li>
            {
              (repoURL) && (
                <>
                  <li>
                    <p><span>Repositorio:</span> <a href={repoURL} target='_blank'>{repoURLText}</a></p>
                  </li>
                </>
              )
            }
          </DetailsProject>
        </ContentProject>
      </GridProject>
    </>
  )
}