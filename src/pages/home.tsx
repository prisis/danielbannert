import type { FC } from "react";

import Footer from "../components/footer";
import GridBackground from "../components/grid_background";

const Home: FC = () => (
    <GridBackground>
        <section className="px-2 pt-10 md:px-0 relative">
            <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                    <span className="block">
                        Coming soon
                    </span>
                </h1>
            </div>
            <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" alt="Coming soon" />
            </div>
        </section>

        <Footer />
    </GridBackground>
);

export default Home;
