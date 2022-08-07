const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Nicole", id: "05" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Nicole");
    expect(zookeeper.id).toBe("05");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "01",
            name: "Elijah",

        },
        {
            id: "02",
            name: "Jennifer",

        },

        {
            id: "03",
            name: "Alex",

        },

        {
            id: "04",
            name: "Robert",

        },
    ];

    // const updatedZookeepes = filterByQuery({ species: "gorilla" }, startingAnimals);

    // expect(updatedAnimals.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "01",
            name: "Elijah",
        },
        {
            id: "02",
            name: "Jennifer",
        },

        {
            id: "03",
            name: "Alex",
        },

        {
            id: "04",
            name: "Robert",
        },
    ];

    const result = findById("03", startingZookeepers);

    expect(result.name).toBe("Alex");
});

