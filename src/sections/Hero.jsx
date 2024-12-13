import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md: pb-32'>
        <Element name="hero">
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                    <div className='caption small-2 uppercase text-p3'>Smart Banking</div>
                    <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 
                    max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                        Streamlined Banking
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                    Explore Xora | AI a Banking autopilot system that leverages AI to streamline operations, enhance customer experience, and improve decision-making.
                    </p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                    <Button icon="/images/zap.svg">Try It Now</Button>
                    </LinkScroll>
                </div>

                <div className='absolute -top-32 left-[calc(50%-340px)]'>
                   <img src="/images/hero.png" alt="hero" className='size-1230 max-lg:h-auto w-[1230px] pointer-events-none hero-img_res' />
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero