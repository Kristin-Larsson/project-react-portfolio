import React, { useEffect, useState } from 'react';
import githubicon from '../icons/greengithub.png'
import { Title, MainText, Section } from '../styles/Main'
import { WrapProject, Wrapper, ProjectImage, ProjectTitle, Programs, ProgramsWrapper, Overlay, Icon } from '../styles/Projects'

const FeaturedProjects = () => {
  const selectedprojects = ['project-happy-thoughts', 'project-survey', 'project-labyrinth', 'project-todos']

  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Kristin-Larsson/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter(({ fork, name }) => fork && selectedprojects.includes(name)))
      })
  }, [])

  return (
    <Section>
      <Title>Featured Projects</Title>
      <Wrapper>
        {repos.map((repo, index) => {
          console.log(index)
          return (
            <div key={repo.id}>
              <WrapProject>
                <a href={repo.homepage}>
                <Overlay>
                  <p>{repo.name.replace(/-/g, ' ')}</p>
                  <ProjectImage src={`https://raw.githubusercontent.com/Kristin-Larsson/${repo.name}/master/code/portfolio.jpg`} alt="project" />
                </Overlay>
                  <ProjectImage src={`https://raw.githubusercontent.com/Kristin-Larsson/${repo.name}/master/code/backgroundportfolio.png`} alt="project" />
                  <div className='background'></div>
                  <ProjectTitle>{repo.name.replace(/-/g, ' ')}</ProjectTitle>
                </a>
                  <MainText>{repo.description}</MainText>
                  <MainText></MainText>
                <ProgramsWrapper>
                  <a href={`https://github.com/Kristin-Larsson/${repo.name}`}><Icon src={githubicon} alt="github Icon" /></a>
                  <Programs>{repo.topics[0]}</Programs>
                  <Programs>{repo.topics[1]}</Programs>
                  <Programs>{repo.topics[2]}</Programs>
                </ProgramsWrapper>
              </WrapProject>
            </div>
          )
        })}
      </Wrapper>
    </Section>
  );
}

export default FeaturedProjects;