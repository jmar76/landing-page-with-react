import React from "react";
import PropTypes from "prop-types";

export const CardPrueba = props => {
	return (
		<div className="card" style={{ width: 22 + "rem" }}>
			<div className="card-body">
				<img
					src="https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
					className="card-img-top"></img>
				<h5 className="card-title mt-3">nombre: {props.nombre}</h5>
				<h6 className="card-subtitle mb-2 text-muted"></h6>
				<p className="card-text">descripcion: {props.descripcion}</p>
			</div>
		</div>
	);
};
CardPrueba.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string
};
