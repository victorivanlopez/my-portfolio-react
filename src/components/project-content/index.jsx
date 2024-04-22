import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { usePortfolioContext } from '../../hooks';
import {
  ContainerProject,
  ContentProject,
  DescriptionProject,
  DetailsProject,
  GridProject,
  LinksProject
} from './styles';
import { Spinner } from '../ui';

export const ProjectContent = () => {
  const { project, isLoading } = usePortfolioContext();

  if ((isLoading)) return <Spinner />

  const { title, description, client, repoURL, siteURL, cover } = project?.attributes;

  const imageURL = cover.data.attributes.formats.small.url;

  return (
    <ContainerProject>
      <h2>{title}</h2>

      <GridProject>
        <img src={imageURL} alt={`Portada sitio web ${title}`} />

        <ContentProject>
          <h3>Descripción</h3>
          <DescriptionProject>
            <BlocksRenderer content={description} />
          </DescriptionProject>
          <h3>Detalles adicionales</h3>
          <DetailsProject>
            <li>
              <p><span>Cliente:</span> {client}</p>
            </li>
            {/* <li>
              <p><span>Técnologías:</span> Desarrollador Web</p>
            </li> */}
          </DetailsProject>
          <h3>Enlaces</h3>
          <LinksProject>
            <a href={siteURL} target='_blank'>Ver sitio</a>
            {
              (repoURL) && <a href={repoURL} target='_blank'>Repositiorio en Github</a>
            }
          </LinksProject>
        </ContentProject>
      </GridProject>
    </ContainerProject>
  )
}