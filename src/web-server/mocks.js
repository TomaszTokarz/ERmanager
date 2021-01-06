const mockedStartTime = new Date().getTime() - Math.random() * 3200000;

const rooms = [
    {
        name: 'Mistery of the Meth Man',
        roomPanels: 1,
        id: 'fakeId123',
        path: '/mistery',
        status: 'READY',
    },
    {
        name: 'Claustrophobic Hell',
        roomPanels: 1,
        id: 'fakeIdForNextRooMM666',
        path: '/hell',
        status: 'IN_GAME',
        hint: 'Turn around and cry',
        startTime: mockedStartTime,
        endTime: mockedStartTime + 3600000,
    },
];

module.exports = {
    rooms,
};
