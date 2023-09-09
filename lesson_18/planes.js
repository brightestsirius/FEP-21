//       Plane

// Airliner   Aerobatic

// Boeing737   Extra330    YAK-52

// The Boeing 737 has a maximum crosswind component of 35 knots if the runway is perfectly dry, or 15 knots if the runway is wet.
// The Boeing 737: 108 to 215 passengers.

// Extra 330 has a maximum crosswind component of 14 knots if the runway is perfectly dry, or 12 knots if the runway is wet.

const CROSSWIND = 13;
const RUNAWAY = `dry`;
const BIRDS = false;

const PASSENGERS = 100;

const planes = [
    {
        name: `Boeing 737`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 108,
            max: 215
        }
    },
    {
        name: `Airbus 300`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 100,
            max: 215
        }
    },
    {
        name: `Extra 330`,
        type: `Aerobatic`,
        crosswind: {
            dry: 14,
            wet: 12
        }
    },
    {
        name: `YAK-52`,
        type: `Aerobatic Old`,
        crosswind: {
            dry: 12,
            wet: 9
        }
    }
];

class Plane{
    constructor(obj){
        Object.assign(this, obj);
    }

    getCrosswindApprove(){
        let crosswindApprove = true;

        if(RUNAWAY === `dry` && CROSSWIND>this.crosswind.dry){
            crosswindApprove = false;
        } else if(RUNAWAY === `wet` && CROSSWIND>this.crosswind.wet){
            crosswindApprove = false;
        }

        return crosswindApprove;
    }

    getTakeoffApproves(){
        let approves = [this.getCrosswindApprove(), this.getBirdsApprove()];
        return approves;
    }

    getBirdsApprove(){
        return BIRDS ? false : true;
    }

    getTakeOff(){
        let finalApprove = this.getTakeoffApproves().every(item=>item);

        return `Takeoff for ${this.name} is ${finalApprove ? `approved` : `NOT approved`}.`;
    }
}

class Airliner extends Plane{
    constructor(obj){
        super(obj);
    }

    getTakeoffApproves(){
        let approves = super.getTakeoffApproves(); // [crosswind, birds]
        approves.push(this.getPassengersApprove())

        return approves; // [crosswind, birds, passengers]
    }

    getPassengersApprove(){
        let passengersApprove = true;
        if(PASSENGERS>this.passengers.max || PASSENGERS<this.passengers.min){
            passengersApprove = false;
        }
        return passengersApprove;
    }
}

class Aerobatic extends Plane{
    constructor(obj){
        super(obj);
    }
}

const PLANE_TYPES = {
    "Airliner": obj => new Airliner(obj),
    "Aerobatic": obj => new Aerobatic(obj)
}

planes
    .map(plane => {
        // if(PLANE_TYPES[plane.type]){
        //     return PLANE_TYPES[plane.type](plane);
        // } else{
        //     return new Plane(plane);
        // }

        return PLANE_TYPES[plane.type] 
            ? PLANE_TYPES[plane.type](plane) 
            : new Plane(plane);
    })
    .map(plane => {
        console.log(plane);
        return plane;
    })
    .forEach(plane => console.log(plane.getTakeOff()));