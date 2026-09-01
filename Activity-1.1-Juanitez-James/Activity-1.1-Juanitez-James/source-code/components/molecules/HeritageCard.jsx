import ImagePlaceholder from "../atoms/Image";
export default function HeritageCard({name,location,description}) {
 return <article className="card"><ImagePlaceholder alt={`${name} placeholder image`}/><div className="card-body"><h3>{name}</h3><small>{location}</small><p>{description}</p><a className="learn" href="#heritage">Learn more →</a></div></article>;
}