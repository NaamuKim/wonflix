import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 4px;
	background-position: center center;
	transition: opacity 0.1s linear;
`;

const Rating = styled.span`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
	transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
	margin-bottom: 3px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;
const Title = styled.span`
	display: block;
	font-size: 12px;
	margin-bottom: 2px;
`;

const Season = ({ id, imageUrl, name }) => (
	<Container>
		<ImageContainer>
			<Image
				bgUrl={
					imageUrl
						? `https://image.tmdb.org/t/p/original${imageUrl}`
						: require("../Components/assets/noPosterSmall.png").default
				}
			/>
		</ImageContainer>
		<Title>{name}</Title>
	</Container>
);

Season.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default Season;
