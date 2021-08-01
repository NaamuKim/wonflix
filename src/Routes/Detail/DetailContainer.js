import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class detailState extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname },
		} = props;
		this.state = {
			result: null,
			externalId: null,
			loading: true,
			error: null,
			isMovie: pathname.includes("/movie/"),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;
		const { isMovie } = this.state;
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			return push("/");
		}
		let result = null;
		let externalId = null;
		try {
			if (isMovie) {
				({ data: result } = await moviesApi.movieDetail(parsedId));
				console.log(result);
			} else {
				({ data: result } = await tvApi.showDetail(parsedId));
				({ data: externalId } = await tvApi.externalId(parsedId));
			}
		} catch {
			this.setState({ error: "Can't find anything." });
		} finally {
			this.setState({ loading: false, result, externalId });
		}
	}

	render() {
		const { result, externalId, loading, error } = this.state;
		return (
			<DetailPresenter
				result={result}
				externalId={externalId}
				loading={loading}
				error={error}
			/>
		);
	}
}
