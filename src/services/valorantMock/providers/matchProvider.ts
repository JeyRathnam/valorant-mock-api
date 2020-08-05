import { MatchDto, MatchInfoDto, PlayerLocationsDto } from './model/matchInterface';
import { Base, Location } from './model/atomicMatch';
import { generateRandomBoolean, generateRandomNumber, generateRandomString, gameLenghtMinMax } from './../utils/utils';


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


class PlayerLocations implements Base {
    puuid : string;
    constructor(puuid : string) {
        this.puuid = puuid;
        
    }
    
    generate() : PlayerLocationsDto {
        let playerLocations = {} as PlayerLocationsDto;
        playerLocations.puuid = this.puuid;
        playerLocations.location = (new Location()).generate();
        playerLocations.viewRadians = generateRandomNumber(0, 200);
        return playerLocations;
    }
}

