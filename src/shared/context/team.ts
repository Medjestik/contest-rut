import { createContext } from 'react';

export const initialTeam = { case: null, id: 0, name: '', current_stage: 0, university: null };

export const CurrentTeamContext = createContext(initialTeam);
