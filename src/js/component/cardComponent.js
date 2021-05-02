import React from "react";
import "../../styles/card.scss";
import { CardPrueba } from "../component/card.js";

const datos = [
	{
		id: 1,
		nombre: "enero",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis arcu nisl consequat ad odio ut urna, euismod risus felis porttitor enim phasellus. Porta etiam luctus lectus suscipit senectus accumsan, pharetra mattis vestibulum sollicitudin ut nibh vulputate, nisl sodales pulvinar phasellus maecenas. Porttitor pharetra non feugiat facilisis tellus viverra tempor sed potenti"
	},
	{
		id: 2,
		nombre: "febrero",
		description:
			" phasellus ornare condimentum turpis aenean nunc mauris eu suscipit mattis, parturient ante sociosqu habitant per ultrices imperdiet mollis."
	},
	{
		id: 3,
		nombre: "marzo",
		description:
			"condimentum turpis aenean nunc mauris eu suscipit mattis, parturient ante soc"
	}
];
export const Tarjetas = () => {
	return (
		<div className="row mt-5  ml-5">
			{datos.map(propiedad => {
				return (
					<div
						className="col-4 marginMisPropiedades pb-3"
						key={propiedad.id}>
						<CardPrueba
							nombre={propiedad.nombre}
							descripcion={propiedad.description}
						/>
					</div>
				);
			})}
		</div>
	);
};
