import React from "react";

export interface Post {
  id: number;
  topic: string;
  topicIcon?: string;
  updatedAt: string;
  user: {
    id: string;
  };
  title: string;
  description: React.ReactNode;
  vote: number;
  comments: number;
}

export const posts: Post[] = [
  {
    id: 1,
    topic: "React",
    topicIcon:
      "https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg",
    updatedAt: "1h ago",
    user: {
      id: "shadcn",
    },
    title: "What do you feel about the new changes of React 19?",
    description: (
      <>
        🎉 Exciting news! React 19 is here, bringing a wave of enhancements and
        optimizations. From smoother rendering to enhanced developer tools,
        it&apos;s poised to elevate your web development experience. Dive in,
        explore, and let&apos;s see what magic we can create with this latest
        iteration of React! <br /> <br /> #React19 #WebDevelopment #Innovation
        🚀🔥
      </>
    ),
    vote: 123,
    comments: 4,
  },
  {
    id: 2,
    topic: "Next.js",
    topicIcon: "https://nextjs.org/static/favicon/favicon-32x32.png",
    updatedAt: "2h ago",
    user: {
      id: "nextjsfan",
    },
    title: "The Power of Server-side Rendering with Next.js",
    description: (
      <>
        Next.js offers powerful capabilities for server-side rendering (SSR),
        allowing your React applications to deliver dynamic content with
        lightning-fast performance. Learn how to harness the full potential of
        Next.js SSR and take your web projects to the next level! <br /> <br />
        #NextJS #SSR #WebPerformance 🚀
      </>
    ),
    vote: 98,
    comments: 7,
  },

  {
    id: 4,
    topic: "GraphQL",
    topicIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png",
    updatedAt: "4h ago",
    user: {
      id: "tsdev",
    },
    title: "GraphQL: Empowering API Development",
    description: (
      <>
        GraphQL empowers API development by offering a flexible query language
        and a powerful runtime. Discover how GraphQL enables efficient data
        fetching, improved performance, and enhanced developer workflows. <br />{" "}
        <br /> #GraphQL #APIDevelopment #Efficiency 🚀🔍
      </>
    ),
    vote: 134,
    comments: 9,
  },
];
