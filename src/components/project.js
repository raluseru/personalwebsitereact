export default function Project ({ id, link,image }){
    return (
    <li>
      <a className="box3" href={link} target="_blank" rel="noreferrer">
        <img  src={image} alt="project logo"/>
      </a>
    </li>
)
}
