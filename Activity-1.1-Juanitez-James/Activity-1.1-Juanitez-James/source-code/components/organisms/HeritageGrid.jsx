import HeritageCard from "../molecules/HeritageCard";
const sites=[
 {name:"Hundred Islands",location:"Alaminos City",description:"A famous island group known for its beautiful limestone islands and clear waters."},
 {name:"Bolinao Lighthouse",location:"Bolinao",description:"A historic lighthouse and a popular coastal landmark overlooking the West Philippine Sea."},
 {name:"Balungao Hot Spring",location:"Balungao",description:"A relaxing natural attraction known for its warm spring water and scenic surroundings."}
];
export default function HeritageGrid(){return <div className="grid">{sites.map(s=><HeritageCard key={s.name}{...s}/>)}</div>}