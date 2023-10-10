import {
  ResumeContainer,
  ResumeExperience,
  ResumeSkill,
  Tabs,
  TabsButtons
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export const ResumeSection = () => {

  const [currentTab, setCurrentTab] = useState('experience');

  const onChangeTab = ({ target }) => {
    setCurrentTab(target.dataset.tab);
  }

  return (
    <section className="section container">
      <h2>Experiencia y Habilidades</h2>
      <p className="section-description">La experiencia y habilidades que he adquirido desarrollando proyectos</p>

      <Tabs>
        <TabsButtons
          type="button"
          className={currentTab === 'experience' ? 'current' : ''}
          data-tab="experience"
          onClick={onChangeTab}
        >
          Experiencia
        </TabsButtons>
        <TabsButtons
          type="button"
          className={currentTab === 'skill' ? 'current' : ''}
          data-tab="skill"
          onClick={onChangeTab}
        >
          Habilidades
        </TabsButtons>
      </Tabs>

      <ResumeContainer>
        {
          (currentTab === 'experience')
            ? (
              <>
                <ResumeExperience>
                  <p className="dates">2021 - 2023</p>
                  <h3>Freelancer</h3>
                  <p className="company">victorivanlopez.com</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem minima velit quibusdam vero.</p>
                </ResumeExperience>

                <ResumeExperience>
                  <p className="dates">2018 - 2020</p>
                  <h3>Coordinador de Informática</h3>
                  <p className="company">ASIPONA Manzanillo</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem minima velit quibusdam vero.</p>
                </ResumeExperience>

              </>
            )


            : (
              <>
                <ResumeSkill>
                  <FontAwesomeIcon icon={faFigma} size="2xl" />
                  <h3>Maquetación y Diseño</h3>
                </ResumeSkill>
                <ResumeSkill>
                  <FontAwesomeIcon icon={faReact} />
                  <h3>Desarrollo con React</h3>
                </ResumeSkill>
              </>
            )
        }
      </ResumeContainer>
    </section>
  )
}