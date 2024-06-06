import CricketHome from "./Cricket/CricketHome";
import CricketMatches from "./Cricket/CricketMatches";
import CricketPrediction from "./Cricket/CricketPrediction";
import FootBallHome from "./FootBall/FootBallHome";
import { FootBallMatches } from "./FootBall/FootBallMatches";
import FootBallPrediction from "./FootBall/FootBallPrediction";
import { useSport } from "./SportContext";

const MyMatchTab = () => {
    const { selectedSport, TabName, Toggle} = useSport();
  
    return (
      <>
     
        {TabName === "home" && selectedSport === "cricket" && Toggle === 1 ? (
          <CricketHome />
        ) : TabName === "home" && selectedSport === "cricket" && Toggle === 2 ? (
          <CricketPrediction />
        ) : TabName === "home" && selectedSport === "football" && Toggle === 1 ? (
          <FootBallHome />
        ) : TabName === "home" && selectedSport === "football" && Toggle === 2 ? (
          <FootBallPrediction />
        ) : TabName === "matches" && selectedSport === "cricket" ? (
          <CricketMatches />
        ) : TabName === "matches" && selectedSport === "football" ? (
          <FootBallMatches />
        ) : null}
      </>
    );
  };

  export default MyMatchTab