import React from "react"
import LiveChannelItem from "./LiveChannelItem"
import Live1 from "../public/assets/live/live1.jpeg"
import Live2 from "../public/assets/live/live2.jpeg"
import Live3 from "../public/assets/live/live3.jpeg"
import Live4 from "../public/assets/live/live4.jpeg"
import Live5 from "../public/assets/live/live5.jpeg"
import Live6 from "../public/assets/live/live6.jpeg"
import Live7 from "../public/assets/live/live7.jpeg"
import Live8 from "../public/assets/live/live8.jpeg"
import Live9 from "../public/assets/live/live9.jpeg"
import Live10 from "../public/assets/live/live10.jpeg"

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
        <h2 className="text-xl font-bold px-2">
            <span className="text-[#9147ff]">Live Channels</span> we think you'll like
        </h2>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
            <LiveChannelItem 
                img={Live1}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/d7bab577-5fec-4ce7-9410-6bd46e0bce87-profile_image-70x70.png"
                title="CHARITY STREAM! JOIN IN!"
                user="Kyedae"
                game="VALORANT" 
            />
            <LiveChannelItem 
                img={Live2}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/14d8f9eb-73bc-4a00-9730-aa45b5522c4d-profile_image-70x70.png"
                title="Greatest Boomer Mechanics"
                user="Hiko"
                game="Apex legends" 
            />
            <LiveChannelItem 
                img={Live3}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/483a37ac-58fd-4e2f-8dc3-2c68a0164112-profile_image-70x70.png"
                title="grind 4 diamond."
                user="Caedrel"
                game="League of Legends" 
            />
            <LiveChannelItem 
                img={Live4}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-70x70.jpeg"
                title="CLICK HERE 4 BIGGEST DRAMA"
                user="xQc"
                game="Just Chatting" 
            />
            <LiveChannelItem 
                img={Live5}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/9e4e1de7-eb96-4722-b62e-8e7aadea90e4-profile_image-70x70.png"
                title="kafi thursday <3"
                user="KAFIII"
                game="Just Chatting" 
            />
            <LiveChannelItem 
                img={Live6}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/39da49ae-e57f-4fc2-b781-6371440847eb-profile_image-70x70.png"
                title="Road to 500 Subs!"
                user="Broxah"
                game="League of Legends" 
            />
            <LiveChannelItem 
                img={Live7}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/af6a5810-f745-45f8-94b2-189cdb3b7382-profile_image-70x70.png"
                title="THERAPY / ADVICE TIME"
                user="shabaee"
                game="Just Chatting" 
            />
            <LiveChannelItem 
                img={Live8}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/67d64a03-0457-4f90-9832-eea87ec17daa-profile_image-70x70.png"
                title="We chillin after dark"
                user="OhTossingHell"
                game="Call of Duty: Warzone" 
            />
            <LiveChannelItem 
                img={Live9}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/c806595c-4f14-47b5-b57b-e6b75ef336ba-profile_image-70x70.jpg"
                title="short stream !discord !rank"
                user="wkasmiki"
                game="osu!" 
            />
            <LiveChannelItem 
                img={Live10}
                profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/89e8c069-1862-423c-9136-1d5c77051853-profile_image-70x70.png"
                title="HIGHLIGHTS: OG vs 9z"
                user="valorant_latam"
                game="VALORANT" 
            />
        </div>
    </div>
  )
}

export default LiveChannels