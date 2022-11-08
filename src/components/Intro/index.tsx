import { IntroContainer, IntroContent } from './styles'
import introIgm from '../../assets/intro-img.png'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section></section>
        </div>

        <img src={introIgm} alt="Coffee" />
      </IntroContent>
    </IntroContainer>
  )
}
