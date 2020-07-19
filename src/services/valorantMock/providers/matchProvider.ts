import { MatchDto, MatchInfoDto } from './model/matchInterface';

let mapId : number[] = [1, 2, 3, 4];
let gameLenghtMinMax = {min : 1800000, max : 2300000};
let generateRandomString = () :string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

let generateRandomNumber = (min : number, max : number) : number => {
    return Math.floor(Math.random() * (min - max) + min);
}

let generateRandomBoolean = () => {
    return !Math.round(Math.random());
}

interface Base {
    generate() : any;
}

export class MatchProvider implements Base {  
    matchId : string;
    constructor(matchId : string) {
        this.matchId = matchId;
    }
    
    generate() : MatchDto{
        let a = {} as MatchDto;
        a.matchInfo = (new MatchInfo(this.matchId)).generate();
        return a;
    }   
};

class MatchInfo implements Base {
    matchId : string;
    constructor(matchId : string) {
        this.matchId = matchId;
    }

    generate() : MatchInfoDto[] {
        let a = {} as MatchInfoDto;
        a.matchId = this.matchId;
        a.mapId = generateRandomString();
        a.gameLengthMillis = generateRandomNumber(gameLenghtMinMax.min, gameLenghtMinMax.max);
        a.gameStartMillis = generateRandomNumber(gameLenghtMinMax.min, gameLenghtMinMax.max);
        a.provisioningFlowId = generateRandomString();
        a.isCompleted = generateRandomBoolean();
        a.customGameName = generateRandomString();
        a.queueId = generateRandomString();
        a.isRanked = generateRandomBoolean();
        a.seasonId = generateRandomString();
        return [a];
    }
}