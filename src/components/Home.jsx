import { useState, useEffect } from "react";
import FlipCell from './FlipCell';


function Home() {
    const [tick, setTick] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 100);
    return () => clearInterval(timer);
    }, []);
    return (
        <div className="home">
            <div className="home_title">
                <span>
                    Varkit: Solution for whole exome sequencing data
                </span>
                <div className="home_title_actions">
                    <button className="explore_button">
                        Explore Now
                    </button>
                    <button className="install_button">
                        Install
                    </button>
                </div>
            </div>
            <div className="home_design">
                <div className="grid">
                    {/* Column I */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={200} interval={12000} />
                    <FlipCell tick={tick} delay={400} interval={12000} />
                    <FlipCell tick={tick} delay={600} interval={12000} />
                    <FlipCell tick={tick} delay={800} interval={12000} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column II */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={1000} interval={12000} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column III */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={1200} interval={12000} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column IV */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={1400} interval={12000} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column V */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={1600} interval={12000} />
                    <FlipCell tick={tick} delay={1800} interval={12000} />
                    <FlipCell tick={tick} delay={2000} interval={12000} />
                    <FlipCell tick={tick} delay={2200} interval={12000} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column VI */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column VII */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={2400} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} delay={2600} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} delay={2800} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} delay={3000} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} delay={3200} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} delay={3400} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column VIII */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={3600} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column IX */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={3800} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={4000} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    {/* Column X */}
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={4200} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} rotate={false} />
                    <FlipCell tick={tick} delay={4400} interval={12000} frontColor = "#ffffff" backColor = "#565656" />
                    <FlipCell tick={tick} rotate={false} />
                </div>
            </div>

        </div>
    );
}

export default Home;