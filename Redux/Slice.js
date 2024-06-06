import { createSlice } from "@reduxjs/toolkit";
import { teamsArray } from "../jsondata/cskjson";

const initialState = {
playerProfileInfo:[],
finalPlayerSelected:[],
impactPlayerSelected:[],
impactPlayerLists:[]
}


const userSlice = createSlice({
        name:"fantasy",
        initialState,
        reducers:{
            initializePlayerLists: (state) => {
                const allPlayers = teamsArray.flatMap(team => team.players);
                state.playerProfileInfo = allPlayers;
                state.impactPlayerLists = allPlayers;
              },
            getplayerProfileInfo:(state,{payload}) =>{
                state.playerProfileInfo = payload;
            },
            getfinalPlayerSelected:(state,{payload}) =>{
                if (state.finalPlayerSelected.includes(payload)) {
                    state.finalPlayerSelected = state.finalPlayerSelected.filter(id => id !== payload);
                } else {
                    state.finalPlayerSelected.push(payload);
                }
               

            },
            resetFinalPlayerSelected: (state) => {
                state.finalPlayerSelected = [];
              },
              getImpactPlayerLists: (state, { payload }) => {
             

                const id = payload;
      const findid = state.finalPlayerSelected.find(
        (finalPlayerSelected) => finalPlayerSelected.id !== id
      );
      state.impactPlayerLists = findid;
              },
              getImpactPlayerSelected: (state, { payload }) => {
                // Clear the impactPlayerSelected array and then add the new impact player
                state.impactPlayerSelected = [payload];
            },
            
        }
})


export const {getplayerProfileInfo,getfinalPlayerSelected,resetFinalPlayerSelected,getImpactPlayerSelected,initializePlayerLists} = userSlice.actions;

export default userSlice.reducer;