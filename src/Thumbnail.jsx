export default function Thumbnail(props) {
  return (
    <div className="w-48">
      <a target="_blank" href={props.url}>
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className="w-48 h-48 mb-4 bg-cover bg-no-repeat border"
        >
        </div>
      </a>
      <a target="_blank" href={props.url} className="text-black">
        <h3>{props.title}</h3>
      </a>
      <p className="mb-2">{props.description || ''}</p>
      <a target="_blank" className="block" href={props.url}>{props.linkText || 'Learn More'}</a>
    </div>
  );
}