const getUser = async (userId) => {
  return { id: userId, name: "John Doe" };
};

const getPosts = async (userId) => {
  return [
    { id: 1, userId: userId, title: "Post 1" },
    { id: 2, userId: userId, title: "Post 2" },
  ];
};

const getComments = async (userId) => {
  return [
    { id: 1, postId: 1, text: "Comment 1 for Post 1" },
    { id: 2, postId: 1, text: "Comment 2 for Post 1" },
    { id: 3, postId: 2, text: "Comment 1 for Post 2" },
  ];
};

async function processUserData(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(userId);
    const comments = await getComments(userId);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);

    return { user, posts, comments };
  } catch (error) {
    console.error("Error processing user data:", error);
    throw error;
  }
}

async function main() {
  try {
    const result = await processUserData(1);
    console.log("Result:", result);
  } catch (error) {
    console.error("Main function error:", error);
  }
}

main();
