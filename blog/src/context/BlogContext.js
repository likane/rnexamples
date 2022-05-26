import React, {useReducer} from "react";
import createDataContext from './createDataContext';


// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random()*99999), title: `Blog Post #${blogPosts.length +1}`}];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    }
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'delete_blogpost'})
    };
}


// export const BlogProvider = ({children}) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);



//     // const addBlogPosts = () => {
//     //     setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length +1}`}]);
//     // }
//     // const blogPosts = [
//     //     {title: 'Blog Post #1'},
//     //     {title: 'Blog Post #2'}
//     // ]
//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost }}>
//         {children}
//     </BlogContext.Provider>
// };

// export default BlogContext;

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost},[]);