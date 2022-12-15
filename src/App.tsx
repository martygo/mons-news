import React, { useEffect } from "react";

const API_BASE =
	"https://newsapi.org/v2/top-headlines?country=br&category=technology&pageSize=5&apiKey=";
const API_ENDPOINT_CATEGORY =
	"https://newsapi.org/v2/top-headlines?country=br&category=business&pageSize=5&apiKey=";
const API_KEY = "d607f83907ef497fb3b7e014e3547a18";

type IStories = {
	title: string;
	urlToImage: string;
	content?: string;
};

function App() {
	const [stories, setStories] = React.useState<IStories[]>();
	const [business, setBusiness] = React.useState<IStories[]>();

	useEffect(() => {
		const fetchStories = async () => {
      const responses = await Promise.all([fetch(`${API_BASE}${API_KEY}`), fetch(`${API_ENDPOINT_CATEGORY}${API_KEY}`)])

			const topTrends = await responses[0].json() 
			const categorys = await responses[1].json();

			setStories(topTrends.articles);
      setBusiness(categorys.articles);
		};

		fetchStories().catch(console.error);
	}, []);

	return (
		<div className="app">
			<div className="stories">
				{stories?.map((story) => {
					return (
						<div className="stories-article" key={story.title}>
							<div className="stories-article-wrap">
								<div className="article-wrap-picture">
									<img
										className="wrap-picture-img"
										src={story.urlToImage}
										alt={story.title}
									/>
								</div>
								<div className="article-wrap-content">
									<div className="wrap-content-text">
										<h2>
											<a
												href={story.urlToImage}
												className="content-title title-large"
											>
												{story.title}
											</a>
										</h2>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="stories">
				{business?.map((story) => {
					return (
						<div className="stories-article" key={story.title}>
							<div className="stories-article-wrap">
								<div className="article-wrap-picture">
									<img
										className="wrap-picture-img"
										src={story.urlToImage}
										alt={story.title}
									/>
								</div>
								<div className="article-wrap-content">
									<div className="wrap-content-text">
										<h2>
											<a
												href={story.urlToImage}
												className="content-title title-large"
											>
												{story.title}
											</a>
										</h2>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
