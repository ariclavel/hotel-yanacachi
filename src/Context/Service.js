import { createContext, useState } from "react";
import SERVICES from "../components/ToBook/BookData";
import Directory from "../components/Directory/Directory";
import { useEffect } from "react";

export const ServicesContext = createContext({
    services: [],

});
export const ServicesProvider = ({children} ) => {
    const [services, setServices] = useState(SERVICES);
    const value = {services};

    //run once
    useEffect (() => {
        const changeService =  ((service) => {
            setServices(service);
        });
        return changeService;

    }, []);

    return <ServicesContext.Provider value= {value}> {children} </ServicesContext.Provider>
};
