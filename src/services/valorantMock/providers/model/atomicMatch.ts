import {LocationDto, FinishingDamageDto, DamageDto, EconomyDto, AbilityDto, TeamDto} from './matchInterface';
import { generateRandomBoolean, generateRandomNumber, armors, weapons } from './../../utils/utils';
export interface Base {
    generate() : any;
}

export class Location implements Base {
    generate() : LocationDto {
        let location = {} as LocationDto;
        location.x = generateRandomNumber(0, 200);
        location.y = generateRandomNumber(0, 200);
        return location;
    }
}

export class FinishingDamage implements Base {
    generate() : FinishingDamageDto {
        let finishingDamage = {} as FinishingDamageDto;
        finishingDamage.damageType = "unknown";
        finishingDamage.damageItem = weapons[Math.floor(Math.random() * weapons.length)];
        finishingDamage.isSecondaryFireMode = generateRandomBoolean();
        return finishingDamage;
    }
}

export class Damage implements Base {
    receiver : string;
    constructor(receiver : string) {
        this.receiver = receiver;
    }

    generate() : DamageDto {
        let damage = {} as DamageDto;
        damage.receiver = this.receiver;
        damage.damage = generateRandomNumber(0, 150);
        damage.legshots = generateRandomNumber(0, 40);
        damage.bodyshots = generateRandomNumber(0, 50);
        damage.headshots = generateRandomNumber(0, 150);
        return damage;
    }
}

export class Economy implements Base {
    generate() : EconomyDto {
        let economy = {} as EconomyDto;
        economy.loadoutValue = generateRandomNumber();
        economy.weapon = weapons[Math.floor(Math.random() * weapons.length)];
        economy.armor = armors[Math.floor(Math.random() * weapons.length)];
        economy.remaining = generateRandomNumber(0, 2700);
        economy.spent = generateRandomNumber(0, 1500);
        return economy;
    }
}

export class Ability implements Base {
    generate() : AbilityDto {
        let ability = {} as AbilityDto;
        ability.ability1Effects = "unknown";
        ability.ability2Effects  = "unknown";
        ability.grenadeEffects = "unknown";
        ability.ultimateEffects = "unknown";
        return ability;
    }
}

export class Team implements Base {
    generate() : TeamDto {
        let team = {} as TeamDto;
        team.roundsPlayed = generateRandomNumber(1, 13);
        team.roundsWOn = generateRandomNumber(1, 13);
        return team;
    }
}