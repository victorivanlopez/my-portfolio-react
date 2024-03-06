import { useState } from 'react';
import {
  ButtonContainer,
  ButtonPrimary,
  ResumeContainer,
  Tabs,
  TabsButtons
} from './styles';
import { ExperiencesList } from './experiences';
import { SkillsList } from './skills';

export const ResumeSection = () => {

  const [currentTab, setCurrentTab] = useState('experience');

  const onChangeTab = ({ target }) => {
    setCurrentTab(target.dataset.tab);
  }

  return (
    <section id='resume' className="section container observer">
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

      <ResumeContainer $current={currentTab}>
        {
          (currentTab === 'experience')
            ? <ExperiencesList />
            : <SkillsList />
        }
      </ResumeContainer>

      <ButtonContainer>
        <ButtonPrimary href="#">Descargar mi CV</ButtonPrimary>
      </ButtonContainer>
    </section>
  )
}