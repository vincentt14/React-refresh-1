import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Posts, { loader as postsLoader} from "./components/routes/Posts.tsx";
import NewPost, { action as newPostAction } from "./components/routes/NewPost.tsx";
import RootLayout from "./components/routes/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { 
        path: "/", element: <Posts />,
        loader: postsLoader,
        children: [
          { 
            path: "/create-post", 
            element: <NewPost />, 
            action:  newPostAction
          }
        ] 
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
