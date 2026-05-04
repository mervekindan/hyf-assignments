import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [planetsWishlist, setPlanetsWishlist] = useState([]);

    const isPlanetInWishlist = (planetName) => {
        return planetsWishlist.some((planet) => planet.name === planetName);
    };

    const addPlanetToWishlist = (name, thumbnail) => {
        setPlanetsWishlist((prev) => [...prev, { name, thumbnail }]);
    };

    const removePlanetFromWishlist = (name) => {
        setPlanetsWishlist((prev) =>
            prev.filter((planet) => planet.name !== name),
        );
    };

    const wishlistCount = planetsWishlist.length;

    return (
        <WishlistContext.Provider
            value={{
                planetsWishlist,
                isPlanetInWishlist,
                addPlanetToWishlist,
                removePlanetFromWishlist,
                wishlistCount,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}
