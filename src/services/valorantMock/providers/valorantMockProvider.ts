import { ContentDto } from './model/contentInterface';
import { MatchProvider } from './matchProvider'
import * as data from './repository/content.json';

export const valContentV1 = async() => {
    return data;
};

export const valMatchV1 = async(matchId : string) => {
    var m = new MatchProvider(matchId);
    return m.generate();
}