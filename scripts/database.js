export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "My Mom",
            power: "nagging"
        },
        {
            id: 2,
            name: "My Ex",
            power: "cheating"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}