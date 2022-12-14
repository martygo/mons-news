import React, { useEffect } from "react";

type IStories = {
	title: string;
	urlToImage: string;
	content?: string;
};

function App() {
	const [stories, setStories] = React.useState<IStories[]>();

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/top-headlines?country=br&apiKey=d607f83907ef497fb3b7e014e3547a18",
		)
			.then((res) => res.json())
			.then((data) => setStories(data.articles));
	}, []);

	return (
		<div className="App">
			<main className="home-stories">
				{stories?.map((story) => {
					return (
						<article className="article">
							{story.title} - {story.urlToImage}
						</article>
					);
				})}
			</main>
		</div>
	);
}

export default App;
