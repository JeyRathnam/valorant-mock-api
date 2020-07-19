export interface MatchDto {
    matchInfo : MatchInfoDto[];
    players : PlayerDto[];
    teams : TeamDto[];
    roundResults : RoundResultDto[];
}

export interface MatchInfoDto {
    matchId : string;
    mapId : string;
    gameLengthMillis : number;
    gameStartMillis : number;
    provisioningFlowId : string;
    isCompleted : boolean;
    customGameName : string;
    queueId : string;
    gameMode : string;
    isRanked : boolean;
    seasonId : string;
}

export interface PlayerDto {
    puuid : string;
    teamId : string;
    partyId : string;
    characterId : string;
    stats : PlayerStatsDto[];
    competitiveTier : number;
    playerCard : string;
    playerTitle : string;
}

export interface PlayerStatsDto {
    puuid : string;
    kills : KillDto[];
    damage : DamageDto[];
    score : number;
    economy : EconomyDto;
    ability : AbilityDto;
}

export interface KillDto {
    gameTime : number;
    roundTime : number;
    killer : string;
    victim : string;
    victimLocation : LocationDto;
    assistants : string[];
    playerLocations : PlayerLocationsDto[];
    finishingDamage : FinishingDamageDto;
}

export interface LocationDto {
    x : number;
    y : number;
}

export interface PlayerLocationsDto {
    puuid : string;
    viewRadians : number;
    location : LocationDto;
}

export interface FinishingDamageDto {
    damageType : string;
    damageItem : string;
    isSecondaryFireMode : boolean;
}

export interface DamageDto {
    receiver : string;
    damage : number;
    legshots : number;
    bodyshots : number;
    headshots : number;
}

export interface EconomyDto {
    loadoutValue : number;
    weapon : string;
    armor : string;
    remaining : number;
    spent : number;
}

export interface AbilityDto {
    grenadeEffects : string;
    ability1Effects : string;
    ability2Effects : string;
    ultimateEffects : string;
}

export interface TeamDto {
    teamId : string;
    won : boolean;
    roundsPlayed : number;
    roundsWOn : number;
}

export interface RoundResultDto {
    roundNum : number;
    roundResult : string;
    roundCeremony : string;
    winningTeam : string;
    bombPlanter : string;
    bombDefuser : string;
    plantRoundTime : string;
    plantPlayerLocations : PlayerLocationsDto[];
    plantLocation : LocationDto;
    plantSite : string;
    defuseRoundTime : number;
    defusePlayerLocations : PlayerLocationsDto[];
    defuseLocation : LocationDto;
    playerStats : PlayerStatsDto[];
    roundResultCOde : string;
}