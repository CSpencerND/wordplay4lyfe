import hero from "./hero.avif"
import city from "./city.webp"
import { Showcase } from "../components/Showcase"

export default function Home() {
    return <Hero />
}

const Hero = () => {
    return (
        <>
            <section className="pt-6">
                <div className="hero wrapper">
                    <figure className="aspect-video w-full">
                        <img
                            className={`aspect-video w-full object-cover object-top`}
                            src={hero}
                            alt="Man standing in front of graffiti"
                        />
                    </figure>
                    <div className={`hero-overlay bg-opacity-40`}></div>
                    <div className="hero-content text-center text-zinc-100">
                        <div>
                            <h1 className="mb-5 text-3xl lg:text-4xl font-medium uppercase drop-shadow-[-1px_2px_4px_rgb(0,0,0)]">
                                We play with words
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div */}
            {/*     aria-hidden */}
            {/*     className="h-24 dark-to-light" */}
            {/* ></div> */}

            <section id="showcase">
                {/* <section className="bg-base-content" id="showcase"> */}
                <div className="wrapper">
                    <Showcase />
                </div>
            </section>

            {/* <div */}
            {/*     aria-hidden */}
            {/*     className="h-24 light-to-dark" */}
            {/* ></div> */}

            <section className="pb-12">
                <div className="card lg:card-side wrapper">
                    <figure className="pt-6 pl-6 max-lg:pr-6 lg:pb-6 lg:w-1/3">
                        <img
                            className="h-full opacity-90"
                            src={city}
                            alt="city"
                            height={800}
                            width={1000}
                        />
                    </figure>
                    <article className="card-body lg:w-2/3">
                        <h2 className="card-title">Why we love what we do</h2>
                        <p>
                            When we think about WORDPLAY4LYFE, what comes to
                            mind is Artistic Expression - being able to express
                            yourself freely and not be judged. We use
                            our Imagination because the fact that you can come
                            up with different ideas for something that's yours
                            is just amazing. The fact that you can daydream
                            about those different ideas and bring them to life
                            is really exciting, which is an excellent way to
                            share my Creativeness with the rest of the world. We
                            want WORDPLAY4LYFE to represent Culture in all walks
                            of life because without culture there is no
                            WORDPLAY4LYFE.
                        </p>
                        <p>
                            Artistic Expression, Imagination, Creativeness and
                            Culture represents our brand. (AEICC)
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}
