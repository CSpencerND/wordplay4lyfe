import yum from "./assets/yum-yum.webp"
import ice from "./assets/ice-cream.webp"
import milk from "./assets/milkshake.webp"
import cotton from "./assets/cotton-candy.webp"
import cake from "./assets/strawberry-cake.webp"
import taste from "./assets/taste-the-rainbow.webp"
import { Image } from "@shopify/hydrogen"
import { ChevronRight, ChevronLeft } from "react-feather"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault()

const images = [
    <Image
        src={yum}
        alt="yum yum"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
    <Image
        src={ice}
        alt="ice cream"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
    <Image
        src={milk}
        alt="milkshake"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
    <Image
        src={cotton}
        alt="cotton candy"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
    <Image
        src={taste}
        alt="tase the rainbow"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
    <Image
        src={cake}
        alt="strawberry cake"
        width={200}
        height={200}
        onDragStart={handleDragStart}
        role="presentation"
        className="carousel-image"
    />,
]

export const Showcase = () => {
    return (
        <>
            <div className="card">
                <h2 className="text-center text-accent font-semibold py-6">
                    Fresh Summer Drip
                </h2>
                <AliceCarousel
                    items={images}
                    infinite
                    keyboardNavigation
                    mouseTracking
                    paddingLeft={64}
                    paddingRight={64}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        640: {
                            items: 2,
                        },
                        1024: {
                            items: 3,
                        },
                        1280: {
                            items: 4,
                        },
                    }}
                    renderPrevButton={() => {
                        return (
                            <ChevronLeft
                                className="btn btn-outline btn-circle btn-sm btn-secondary p-1.5 my-3.5 mr-1"
                                aria-controls="alice-carousel"
                            />
                        )
                    }}
                    renderNextButton={() => {
                        return (
                            <ChevronRight
                                className="btn btn-outline btn-circle btn-sm btn-secondary p-1.5 my-3.5 ml-1"
                                aria-controls="alice-carousel"
                            />
                        )
                    }}
                />
            </div>
        </>
    )
}
