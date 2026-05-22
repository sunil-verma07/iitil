

import CaseStudiesHero from "./Section1";
import CaseStudyDetailCard from "./Section2";
import FinanceCaseStudyDetailCard from "./Section3";
import RetailCaseStudyDetailCard from "./Section4";
// import OurApproachSection from "./Section5";

export default function CaseStudies(){
    return(
        <>
        <CaseStudiesHero />
        <CaseStudyDetailCard />
        <FinanceCaseStudyDetailCard />
        <RetailCaseStudyDetailCard />

        </>
    );
}