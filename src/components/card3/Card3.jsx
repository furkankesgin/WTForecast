import React from 'react';
import Graph from './Graph';
import { Card } from 'react-bootstrap'

const Card3 = (props) => {
	return (
		<Card className="card-color1 mt-3 pb-2 mb-3">
			<Graph allList={props.forecast} unit={props.unit} />
		</Card>
	);
}

export default Card3;
