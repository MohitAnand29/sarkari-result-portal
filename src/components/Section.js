import { Link } from "react-router-dom";

function Section({ title, items }) {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden">
      <h3 className="bg-red-600 text-white px-4 py-2 font-bold">{title}</h3>
      <ul className="p-4 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={`/detail/${item.id}`} className="text-blue-700 hover:text-blue-900 hover:underline">
              ➤ {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section;
