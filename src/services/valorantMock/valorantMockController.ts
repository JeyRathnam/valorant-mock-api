import { valContentV1, valMatchV1 } from './providers/valorantMockProvider';

export const getValContentV1 = async () => {
    return await valContentV1();
};

export const getValmatchV1 = async(matchId : string) => {
    return await valMatchV1(matchId);
}

