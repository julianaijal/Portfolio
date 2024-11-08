const fetchPosts = async () => {
  const api = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.HYGRAPH_API_KEY}/master`;
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          externalPostsPluralized {
            title
            url
            symbol { url }
          }
        }`,
      }),
      next: {
        tags: ["external-articles-collection"],
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch posts:", response.statusText);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.data) {
      console.error("Invalid response format:", data);
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error);

    if (process.env.NODE_ENV === "production") {
      return { data: { externalPostsPluralized: [] } };
    }

    throw error;
  }
};

const fetchArticles = async () => {
  const api = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.HYGRAPH_API_KEY}/master`;
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          articles {
            id
            title
            subtitle
            content {
              html
              markdown
              text  
            }
          }
        }`,
      }),
    });

    if (!response.ok) {
      console.error("Failed to fetch article:", response.statusText);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.data) {
      console.error("Invalid response format:", data);
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error);

    if (process.env.NODE_ENV === "production") {
      return { data: { externalPostsPluralized: [] } };
    }

    throw error;
  }
};

const apiFunctions = { fetchPosts, fetchArticles };

export default apiFunctions;