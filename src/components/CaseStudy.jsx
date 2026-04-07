import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudy() {
	const { slug } = useParams();
	const lang = localStorage.getItem("lang") || "id";
	const project = projects[slug];

	if (!project) return <p>Project tidak ditemukan.</p>;

	const { title, desc, content } = project[lang] ?? project["id"];

	return (
		<div>
			<h1>{title}</h1>
			<p>{desc}</p>
			<p>{content}</p>
		</div>
	);
}
