import React from "react"
import CategoriesItem from "./CategoriesItem"

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
        <h2 className="text-xl font-bold px-2">
            <span className="text-[#9147ff]">Categories</span> we think you'll like
        </h2>
        {/* Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" 
            title="Fortnite"
            viewers="42K"
            tag1="Shooter"
            tag2="RPG" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" 
            title="Just Chatting"
            viewers="291K"
            tag1="IRL"
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg" 
            title="VALORANT"
            viewers="87K"
            tag1="FPS"
            tag2="Shooter" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg" 
            title="League of Legends"
            viewers="185K"
            tag1="RPG"
            tag2="Strategy" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg" 
            title="Minecraft"
            viewers="48K"
            tag1="Simulation"
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg" 
            title="Counter Strike: GO"
            viewers="55K"
            tag1="FPS"
            tag2="Shooter" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/512998_IGDB-285x380.jpg" 
            title="The Legend of Zelda"
            viewers="32K"
            tag1="Adventure"
            tag2="Action" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg" 
            title="Call of Duty: Warzone"
            viewers="48.5K"
            tag1="FPS"
            tag2="Shooter" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg" 
            title="Dota 2"
            viewers="65K"
            tag1="Strategy"
            tag2="MOBA" 
            />
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg" 
            title="Apex Legends"
            viewers="105K"
            tag1="FPS"
            tag2="Action" 
            />
        </div>
    </div>
  )
}

export default Categories