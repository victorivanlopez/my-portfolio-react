import { useState } from 'react';
import {
  ButtonContainer,
  ButtonPrimary,
  ResumeContainer,
  Tabs,
  TabsButtons
} from './styles';
import { Experiences } from './experiences';
import { Skills } from './skills';

export const ResumeSection = () => {

  const [currentTab, setCurrentTab] = useState('experience');

  const onChangeTab = ({ target }) => {
    setCurrentTab(target.dataset.tab);
  }

  return (
    <section id='resume' className="section container observer">
      <h2>Experiencia y Habilidades</h2>
      <p className="section-description">La experiencia y habilidades que he adquirido desarrollando proyectos.</p>

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

      <ResumeContainer $current={currentTab}>
        {
          (currentTab === 'experience')
            ? <Experiences />
            : <Skills />
        }
      </ResumeContainer>

      <ButtonContainer>
        <ButtonPrimary
          href="/curriculum-victor-ivan-lopez.pdf"
          target='_blank'
        >
          Descargar mi CV
        </ButtonPrimary>
      </ButtonContainer>
    </section>
  )
}