import {
  ContainerProject,
  ContentProject,
  DescriptionProject,
  DetailsProject,
  GridProject,
  LinksProject
} from './styles';

export const ProjectContent = () => {
  return (
    <ContainerProject>
      <h2>TaskUnity</h2>

      <GridProject>
        <img src="/assets/projects/taskunity-cover.png" alt="TaskUnity Cover" />

        <ContentProject>
          <h3>Descripción</h3>
          <DescriptionProject>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit eos repudiandae rerum quis nam quos! Incidunt.
              </li>
              <li>
                Rem repellat cupiditate, nulla illo libero consectetur autem fugit laboriosam officia. Doloremque iusto quos laborum.
              </li>
              <li>
                Distinctio assumenda aliquid dicta libero, iste nam velit nihil autem perspiciatis enim? Aperiam ratione nobis tenetur.
              </li>
            </ul>
          </DescriptionProject>
          <h3>Detalles adicionales</h3>
          <DetailsProject>
            <li>
              <p><span>Cliente:</span> TaskUnity</p>
            </li>
            <li>
              <p><span>Técnologías:</span> Desarrollador Web</p>
            </li>
          </DetailsProject>
          <h3>Enlaces</h3>
          <LinksProject>
            <a href='#' target='_blank'>Ver sitio</a>
            |
            <a href='#' target='_blank'>Repositiorio en Github</a>
          </LinksProject>
        </ContentProject>
      </GridProject>
    </ContainerProject>
  )
}