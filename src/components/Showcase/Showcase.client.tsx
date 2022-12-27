import yum from "./assets/yum-yum.webp"
import ice from "./assets/ice-cream.webp"
import milk from "./assets/milkshake.webp"
import cotton from "./assets/cotton-candy.webp"
import cake from "./assets/strawberry-cake.webp"
import taste from "./assets/taste-the-rainbow.webp"
import { Image } from "@shopify/hydrogen"
import { ChevronRight, ChevronLeft } from "react-feather"
import { useMemo, useCallback, useState, useRef } from "react"

export const Showcase = () => {
    const sliderRef = useRef<HTMLUListElement | null>(null)
    const [sliderPosition, setSliderPosition] = useState(0)
    const slideWidth: number = 216
    const slides: number = 5

    const currentSlide = useMemo(() => {
        return Math.floor(sliderPosition / slideWidth)
    }, [sliderPosition])

    const scrollToSlide = (
        slider: HTMLUListElement | null,
        slideIndex: number
    ) => {
        if (!slider) return
        slider.scrollTo({
            left: slideIndex * slideWidth,
            behavior: "smooth",
        })
    }

    const scrollLeft = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide - 1)
    }, [currentSlide])

    const scrollRight = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide + 1)
    }, [currentSlide])

    return (
        <>
            <div className="card">
                {/* <div className="card" style={{ boxShadow: "0 0 24px 4px" }}> */}
                <h2 className="text-center font-semibold pt-6 pb-2">
                    Fresh Summer Drip
                </h2>
                <ul
                    className="carousel carousel-center py-6 px-32 space-x-4 rounded-box h-64"
                    ref={sliderRef}
                    onScroll={(e) => {
                        setSliderPosition(e.currentTarget.scrollLeft)
                    }}
                >
                    <li className="carousel-item">
                        <Image
                            src={yum}
                            alt="yum yum"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li className="carousel-item">
                        <Image
                            src={ice}
                            alt="ice cream"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li className="carousel-item">
                        <Image
                            src={milk}
                            alt="milkshake"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li className="carousel-item">
                        <Image
                            src={cotton}
                            alt="cotton candy"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li className="carousel-item">
                        <Image
                            src={taste}
                            alt="tase the rainbow"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li className="carousel-item">
                        <Image
                            src={cake}
                            alt="strawberry cake"
                            width={200}
                            height={200}
                        />
                    </li>
                </ul>
                <div className="flex flex-row justify-center gap-6 pb-6">
                    <button
                        className="btn btn-outline btn-circle btn-sm btn-secondary"
                        onClick={scrollLeft}
                        disabled={currentSlide === 0}
                    >
                        <ChevronLeft size={16} />
                        <span className="sr-only">Scroll Left</span>
                    </button>
                    <button
                        className="btn btn-outline btn-circle btn-sm btn-secondary"
                        onClick={scrollRight}
                        disabled={currentSlide === slides}
                    >
                        <ChevronRight size={16} />
                        <span className="sr-only">Scroll Right</span>
                    </button>
                </div>
            </div>
        </>
    )
}
