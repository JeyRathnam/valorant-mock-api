export let mapId : number[] = [1, 2, 3, 4];
export let gameLenghtMinMax = {min : 1800000, max : 2300000};
export const weapons = ["phantom", "operator", "vandal", "odin"];
export const armors = ["none", "light", "heavy"];

export let generateRandomString = () :string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export let generateRandomNumber = (min : number = 0, max : number = 100) : number => {
    return Math.floor(Math.random() * (min - max) + min);
}

export let generateRandomBoolean = () => {
    return !Math.round(Math.random());
}